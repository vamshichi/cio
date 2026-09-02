export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function NominationsPage() {
  const nominations =
    await prisma.awardNomination.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Award Nominations
        </h2>

        <div className="rounded-lg bg-cyan-500 px-4 py-2 text-white">
          Total: {nominations.length}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left text-white">
                Nominee
              </th>

              <th className="p-4 text-left text-white">
                Organization
              </th>

              <th className="p-4 text-left text-white">
                Category
              </th>

              <th className="p-4 text-left text-white">
                Nominator
              </th>

              <th className="p-4 text-left text-white">
                Email
              </th>

              <th className="p-4 text-left text-white">
                Date
              </th>

              <th className="p-4 text-left text-white">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {nominations.map((nomination) => (
              <tr
                key={nomination.id}
                className="border-t border-white/10"
              >
                <td className="p-4 text-slate-300">
                  {nomination.nomineeName}
                </td>

                <td className="p-4 text-slate-300">
                  {nomination.nomineeOrganisation}
                </td>

                <td className="p-4 text-slate-300">
                  {nomination.awardCategory}
                </td>

                <td className="p-4 text-slate-300">
                  {nomination.nominatorName}
                </td>

                <td className="p-4 text-slate-300">
                  {nomination.nominatorEmail}
                </td>

                <td className="p-4 text-slate-300">
                  {new Date(
                    nomination.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <Link
                    href={`/admin/nominations/${nomination.id}`}
                    className="rounded-lg bg-cyan-500 px-3 py-2 text-sm text-white"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}