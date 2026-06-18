'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'

interface AdminUser {
  id: string
  username: string
  role: string
  permissions: string[]
}

export default function UsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const res = await fetch('/api/admin/users')
      const data = await res.json()

      setUsers(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="text-white">
        Loading users...
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Admin Users
          </h1>

          <p className="mt-2 text-slate-400">
            Manage admin accounts and permissions
          </p>
        </div>

        <Link
          href="/admin/users/create"
          className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
        >
          <Plus size={18} />
          Create User
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-slate-300">
                Username
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Role
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Permissions
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-white/5"
              >
                <td className="px-6 py-4 text-white">
                  {user.username}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {user.permissions.map((permission) => (
                      <span
                        key={permission}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {permission}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <Link
                    href={`/admin/users/edit/${user.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                  >
                    <Pencil size={16} />
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="p-10 text-center text-slate-400">
            No users found
          </div>
        )}
      </div>
    </div>
  )
}