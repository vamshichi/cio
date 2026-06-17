'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Award,
  Handshake,
  Mail,
} from 'lucide-react'

const menuItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Contacts',
    href: '/admin/contacts',
    icon: Mail,
  },
  {
    name: 'Delegates',
    href: '/admin/delegates',
    icon: Users,
  },
  {
    name: 'Sponsors',
    href: '/admin/sponsors',
    icon: Handshake,
  },
  {
    name: 'Nominations',
    href: '/admin/nominations',
    icon: Award,
  },
  {
    name: 'Media',
    href: '/admin/media',
    icon: Award,
  }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

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

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
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

      {/* Main Content */}
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