'use client'

import { useState } from 'react'
import { Search, Eye, Trash2 } from 'lucide-react'
import DataDrawer from './DataDrawer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Delegate {
    id: string
    fullName: string
    company: string
    jobTitle: string
    industry: string
    email: string
    phone: string
    awardNomination: string
    status?: string
    notes?: string
    createdAt: string
}

export default function DelegatesTable({
    delegates,
}: {
    delegates: Delegate[]
}) {
    // const [search, setSearch] =
    // useState('')

    const [search, setSearch] = useState('')

    const [selectedDate, setSelectedDate] =
        useState<Date | null>(null)

    const [statusFilter, setStatusFilter] =
        useState('ALL')

    const [selectedDelegate, setSelectedDelegate] =
        useState<any>(null)

    const filteredDelegates = delegates.filter(
        (delegate) => {
            const q = search.toLowerCase()

            const matchesSearch =
                delegate.fullName
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.company
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.jobTitle
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.email
                    ?.toLowerCase()
                    .includes(q) ||
                delegate.phone
                    ?.toLowerCase()
                    .includes(q)

            const delegateDate = new Date(
                delegate.createdAt
            )

            const matchesDate = selectedDate
                ? delegateDate.toDateString() ===
                selectedDate.toDateString()
                : true

            const matchesStatus =
                statusFilter === 'ALL'
                    ? true
                    : (delegate.status || 'NEW') ===
                    statusFilter

            return (
                matchesSearch &&
                matchesDate &&
                matchesStatus
            )
        }
    )


    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">
                    Delegates
                </h2>

                <div className="rounded-lg bg-cyan-500 px-4 py-2 text-white">
                    Total: {filteredDelegates.length}
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
                {/* Search */}
                <div className="relative flex-1 min-w-[250px]">
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

                {/* Date Filter */}
                <div className="w-[180px]">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(
                            date: Date | null
                        ) => setSelectedDate(date)}
                        placeholderText="Filter by Date"
                        dateFormat="dd/MM/yyyy"
                        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Status Filter */}
                <select
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                    className="w-[180px] rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                    <option value="ALL">
                        All Status
                    </option>

                    <option value="NEW">
                        NEW
                    </option>

                    <option value="CONTACTED">
                        CONTACTED
                    </option>

                    <option value="INTERESTED">
                        INTERESTED
                    </option>

                    <option value="CONVERTED">
                        CONVERTED
                    </option>

                    <option value="REJECTED">
                        REJECTED
                    </option>
                </select>

                {/* Clear */}
                <button
                    onClick={() => {
                        setSearch('')
                        setSelectedDate(null)
                        setStatusFilter('ALL')
                    }}
                    className="rounded-xl bg-red-500/10 px-4 py-3 text-red-400 hover:bg-red-500/20"
                >
                    Clear
                </button>
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
                                Job Title
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
                                Status
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
                                        {delegate.jobTitle}
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

                                    <td className="p-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs ${delegate.status === 'CONVERTED'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : delegate.status === 'INTERESTED'
                                                        ? 'bg-blue-500/20 text-blue-400'
                                                        : delegate.status === 'CONTACTED'
                                                            ? 'bg-yellow-500/20 text-yellow-400'
                                                            : delegate.status === 'REJECTED'
                                                                ? 'bg-red-500/20 text-red-400'
                                                                : 'bg-slate-500/20 text-slate-400'
                                                }`}
                                        >
                                            {delegate.status || 'NEW'}
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