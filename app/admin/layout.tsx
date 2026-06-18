'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useSWR from 'swr'

import {
  LayoutDashboard,
  Users,
  Award,
  Handshake,
  Mail,
  UserCog,
} from 'lucide-react'

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json())

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const { data } = useSWR(
    '/api/admin/me',
    fetcher
  )

  const user = data?.user

  if (
    pathname === '/admin/login' ||
    pathname.startsWith('/admin/login')
  ) {
    return <>{children}</>
  }

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      permission: null,
    },
    {
      name: 'Contacts',
      href: '/admin/contacts',
      icon: Mail,
      permission: 'contacts',
    },
    {
      name: 'Delegates',
      href: '/admin/delegates',
      icon: Users,
      permission: 'delegates',
    },
    {
      name: 'Sponsors',
      href: '/admin/sponsors',
      icon: Handshake,
      permission: 'sponsors',
    },
    {
      name: 'Nominations',
      href: '/admin/nominations',
      icon: Award,
      permission: 'nominations',
    },
    {
      name: 'Media',
      href: '/admin/media',
      icon: Award,
      permission: 'media',
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: UserCog,
      permission: 'super_admin',
    },
  ]

  const visibleMenus = menuItems.filter(
    (item) => {
      if (!item.permission)
        return true

      if (
        item.permission ===
        'super_admin'
      ) {
        return (
          user?.role ===
          'SUPER_ADMIN'
        )
      }

      if (
        user?.role ===
        'SUPER_ADMIN'
      ) {
        return true
      }

      return user?.permissions?.includes(
        item.permission
      )
    }
  )

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-slate-900">
        <div className="border-b border-white/10 p-6">
          <h1 className="text-2xl font-bold text-white">
            CIO Admin
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Conference Dashboard
          </p>
        </div>

        {/* User Info */}
        <div className="border-b border-white/10 p-4">
          <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-sm font-medium text-white">
              {user?.username ||
                'Loading...'}
            </p>

            <p className="mt-1 text-xs text-cyan-400">
              {user?.role ||
                'Loading...'}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {visibleMenus.map((item) => {
              const Icon = item.icon

              const active =
                pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                      active
                        ? 'bg-cyan-500 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />

                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <header className="border-b border-white/10 bg-slate-900/50 px-8 py-5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            Admin Dashboard
          </h2>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}