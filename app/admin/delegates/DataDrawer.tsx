'use client'

import { useState, useEffect } from 'react'
// import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  Mail,
  Phone,
  Building2,
  User,
  Calendar,
  MessageCircle,
  Trash2,
  Save,
} from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  data: any
  userRole?: string
  onDelete?: (id: string) => void
}

export default function DataDrawer({
  open,
  onClose,
  title,
  data,
  userRole,
  onDelete,
}: Props) {
  const statuses = [
    'NEW',
    'CONTACTED',
    'INTERESTED',
    'CONVERTED',
    'REJECTED',
  ]

  const [status, setStatus] = useState('NEW')
  const [notes, setNotes] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (data) {
      setStatus(data.status || 'NEW')
      setNotes(data.notes || '')
    }
  }, [data])

 const updateStatus = async (
  newStatus: string
) => {
  try {
    const response = await fetch(
      '/api/delegate',
      {
        method: 'PATCH',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          status: newStatus,
        }),
      }
    )

    const result =
      await response.json()

    console.log(
      'PATCH RESULT:',
      result
    )

    if (!response.ok) {
      throw new Error(
        result.message ||
          'Failed to update'
      )
    }

    setStatus(newStatus)

    router.refresh()
  } catch (error) {
    console.error(error)
  }
}

  const saveNotes = async () => {
    try {
      await fetch(
        '/api/admin/delegates',
        {
          method: 'PATCH',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            id: data.id,
            notes,
          }),
        }
      )

      alert('Notes saved')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AnimatePresence>
      {open && data && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 250,
            }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto border-l border-cyan-500/20 bg-slate-950"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-950 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {title}
                  </span>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {data.fullName ||
                      data.nomineeName ||
                      data.name}
                  </h2>

                  <p className="mt-1 text-slate-400">
                    {data.jobTitle ||
                      data.company}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Status */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Update Status
                </h3>

                <div className="flex flex-wrap gap-2">
                  {statuses.map(
                    (statusItem) => (
                      <button
                        key={statusItem}
                        onClick={() =>
                          updateStatus(
                            statusItem
                          )
                        }
                        className={`rounded-full px-4 py-2 text-sm transition ${
                          status ===
                          statusItem
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {statusItem}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="mt-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Details
                </h3>

                <div className="space-y-4">
                  <InfoRow
                    icon={
                      <User size={16} />
                    }
                    label="Name"
                    value={
                      data.fullName
                    }
                  />

                  <InfoRow
                    icon={
                      <Mail size={16} />
                    }
                    label="Email"
                    value={data.email}
                  />

                  <InfoRow
                    icon={
                      <Phone size={16} />
                    }
                    label="Phone"
                    value={data.phone}
                  />

                  <InfoRow
                    icon={
                      <Building2
                        size={16}
                      />
                    }
                    label="Company"
                    value={
                      data.company
                    }
                  />

                  <InfoRow
                    label="Industry"
                    value={
                      data.industry
                    }
                  />

                  <InfoRow
                    label="Job Title"
                    value={
                      data.jobTitle
                    }
                  />

                  <InfoRow
                    label="Award Nomination"
                    value={
                      data.awardNomination
                    }
                  />

                  <InfoRow
                    icon={
                      <Calendar
                        size={16}
                      />
                    }
                    label="Created"
                    value={
                      data.createdAt
                        ? new Date(
                            data.createdAt
                          ).toLocaleString()
                        : ''
                    }
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mt-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Notes
                </h3>

                <textarea
                  rows={6}
                  value={notes}
                  onChange={(e) =>
                    setNotes(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none focus:border-cyan-500"
                  placeholder="Add notes..."
                />

                <button
                  onClick={saveNotes}
                  className="mt-3 flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-white"
                >
                  <Save size={16} />
                  Save Notes
                </button>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-2 rounded-xl bg-cyan-500/10 px-5 py-3 text-cyan-400 hover:bg-cyan-500/20"
                >
                  <Mail size={18} />
                  Reply
                </a>

                <a
                  href={`https://wa.me/${(
                    data.phone || ''
                  ).replace(
                    /\D/g,
                    ''
                  )}`}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl bg-green-500/10 px-5 py-3 text-green-400 hover:bg-green-500/20"
                >
                  <MessageCircle
                    size={18}
                  />
                  WhatsApp
                </a>

                {userRole ===
                  'SUPER_ADMIN' && (
                  <button
                    onClick={() =>
                      onDelete?.(
                        data.id
                      )
                    }
                    className="flex items-center gap-2 rounded-xl bg-red-500/10 px-5 py-3 text-red-400 hover:bg-red-500/20"
                  >
                    <Trash2
                      size={18}
                    />
                    Delete
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode
  label: string
  value?: string
}) {
  if (!value) return null

  return (
    <div className="flex items-start gap-3 border-b border-white/5 pb-3">
      {icon && (
        <div className="mt-1 text-cyan-400">
          {icon}
        </div>
      )}

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-white break-all">
          {value}
        </p>
      </div>
    </div>
  )
}