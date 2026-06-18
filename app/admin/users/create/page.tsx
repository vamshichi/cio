'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const permissionsList = [
  'contacts',
  'delegates',
  'sponsors',
  'nominations',
  'media',
]

export default function CreateUserPage() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('ADMIN')

  const [permissions, setPermissions] = useState<string[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePermissionChange = (permission: string) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    )
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          role,
          permissions,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(
          data.error || 'Failed to create user'
        )
      }

      router.push('/admin/users')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Create Admin User
        </h1>

        <p className="mt-2 text-slate-400">
          Create a new admin account and assign
          permissions.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          {/* Username */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Username
            </label>

            <input
              type="text"
              required
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
              placeholder="Enter password"
            />
          </div>

          {/* Role */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Role
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
            >
              <option value="ADMIN">
                Admin
              </option>

              <option value="SUPER_ADMIN">
                Super Admin
              </option>
            </select>
          </div>

          {/* Permissions */}
          {role !== 'SUPER_ADMIN' && (
            <div>
              <label className="mb-4 block text-sm text-slate-300">
                Permissions
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                {permissionsList.map((permission) => (
                  <label
                    key={permission}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-slate-950 p-4"
                  >
                    <input
                      type="checkbox"
                      checked={permissions.includes(
                        permission
                      )}
                      onChange={() =>
                        handlePermissionChange(
                          permission
                        )
                      }
                    />

                    <span className="capitalize text-white">
                      {permission}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600 disabled:opacity-50"
            >
              {loading
                ? 'Creating...'
                : 'Create User'}
            </button>

            <button
              type="button"
              onClick={() =>
                router.push('/admin/users')
              }
              className="rounded-lg border border-white/10 px-6 py-3 text-white hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}