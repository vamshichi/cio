'use client'

import { useState } from 'react'
import { Search, Eye, Trash2 } from 'lucide-react'
import DataDrawer from './DataDrawer'

interface Delegate {
    id: string
    fullName: string
    company: string
    industry: string
    email: string
    phone: string
    awardNomination: string
    createdAt: string
}

export default function DelegatesTable({
    delegates,
}: {
    delegates: Delegate[]
}) {
    const [search, setSearch] =
        useState('')

    const [selectedDelegate, setSelectedDelegate] =
        useState<any>(null)

    const filteredDelegates =
        delegates.filter((delegate) => {
            const q =
                search.toLowerCase()

            return (
                delegate.fullName
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.company
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.email
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.phone
                    ?.toLowerCase()
                    .includes(q)
            )
        })

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">
                    Delegates
                </h1>

                <div className="rounded-lg bg-cyan-500 px-4 py-2 text-white">
                    Total: {filteredDelegates.length}
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    placeholder="Search delegates..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-900 py-3 pl-10 pr-4 text-white outline-none focus:border-cyan-500"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full">
                    <thead className="bg-slate-900">
                        <tr>
                            <th className="p-4 text-left text-white">
                                Name
                            </th>

                            <th className="p-4 text-left text-white">
                                Company
                            </th>

                            <th className="p-4 text-left text-white">
                                Industry
                            </th>

                            <th className="p-4 text-left text-white">
                                Email
                            </th>

                            <th className="p-4 text-left text-white">
                                Phone
                            </th>

                            <th className="p-4 text-left text-white">
                                Award
                            </th>

                            <th className="p-4 text-left text-white">
                                Date
                            </th>

                            <th className="p-4 text-left text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredDelegates.map(
                            (delegate) => (
                                <tr
                                    key={delegate.id}
                                    className="border-t border-white/10"
                                >
                                    <td className="p-4 text-slate-300">
                                        {delegate.fullName}
                                    </td>

                                    <td className="p-4 text-slate-300">
                                        {delegate.company}
                                    </td>

                                    <td className="p-4 text-slate-300">
                                        {delegate.industry}
                                    </td>

                                    <td className="p-4 text-slate-300">
                                        {delegate.email}
                                    </td>

                                    <td className="p-4 text-slate-300">
                                        {delegate.phone}
                                    </td>

                                    <td className="p-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs ${delegate.awardNomination ===
                                                'Yes'
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-slate-500/20 text-slate-400'
                                                }`}
                                        >
                                            {
                                                delegate.awardNomination
                                            }
                                        </span>
                                    </td>

                                    <td className="p-4 text-slate-300">
                                        {new Date(
                                            delegate.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="p-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    setSelectedDelegate(delegate)
                                                }
                                                className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 hover:bg-cyan-500/20"
                                            >
                                                <Eye size={16} />
                                            </button>

                                            {/* <button className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20">
                                                <Trash2 size={16} />
                                            </button> */}
                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>


                {filteredDelegates.length ===
                    0 && (
                        <div className="p-10 text-center text-slate-400">
                            No delegates found
                        </div>
                    )}

                <DataDrawer
                    open={!!selectedDelegate}
                    data={selectedDelegate}
                    title="Delegate"
                    userRole="SUPER_ADMIN"
                    onDelete={(id) =>
                        console.log('delete', id)
                    }
                    onClose={() =>
                        setSelectedDelegate(null)
                    }
                />
            </div>
        </div>
    )
}