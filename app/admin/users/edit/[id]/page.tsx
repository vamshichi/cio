'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

const permissionsList = [
  'contacts',
  'delegates',
  'sponsors',
  'nominations',
  'media',
]

export default function EditUserPage() {
  const params = useParams()
  const router = useRouter()

  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const [error, setError] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('ADMIN')
  const [permissions, setPermissions] = useState<string[]>([])

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const res = await fetch(`/api/admin/users/${id}`)

      if (!res.ok) {
        throw new Error('Failed to load user')
      }

      const user = await res.json()

      setUsername(user.username)
      setRole(user.role)
      setPermissions(user.permissions || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const togglePermission = (permission: string) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    )
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    setSaving(true)
    setError('')

    try {
      const res = await fetch(
        `/api/admin/users/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            role,
            permissions,
          }),
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(
          data.error || 'Failed to update user'
        )
      }

      router.push('/admin/users')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?'
    )

    if (!confirmDelete) return

    setDeleting(true)

    try {
      const res = await fetch(
        `/api/admin/users/${id}`,
        {
          method: 'DELETE',
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(
          data.error || 'Failed to delete user'
        )
      }

      router.push('/admin/users')
      router.refresh()
    } catch (err: any) {
      alert(err.message)
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="text-white">
        Loading user...
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
        <h2 className="text-3xl font-bold text-white">
          Edit User
        </h2>

        <p className="mt-2 text-slate-400">
          Update user details and permissions.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-400">
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
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              New Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Leave blank to keep current password"
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
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
                ADMIN
              </option>

              <option value="SUPER_ADMIN">
                SUPER_ADMIN
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
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-950 p-4"
                  >
                    <input
                      type="checkbox"
                      checked={permissions.includes(
                        permission
                      )}
                      onChange={() =>
                        togglePermission(permission)
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

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-white hover:bg-cyan-600 disabled:opacity-50"
            >
              {saving
                ? 'Saving...'
                : 'Save Changes'}
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

            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="ml-auto rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {deleting
                ? 'Deleting...'
                : 'Delete User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}