export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'

export default async function SponsorsPage() {
  const sponsors =
    await prisma.sponsorRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Sponsors
        </h1>

        <div className="rounded-lg bg-cyan-500 px-4 py-2 text-white">
          Total: {sponsors.length}
        </div>
      </div>

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
                Email
              </th>

              <th className="p-4 text-left text-white">
                Phone
              </th>

              <th className="p-4 text-left text-white">
                Sponsored Before
              </th>

              <th className="p-4 text-left text-white">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {sponsors.map((sponsor) => (
              <tr
                key={sponsor.id}
                className="border-t border-white/10"
              >
                <td className="p-4 text-slate-300">
                  {sponsor.fullName}
                </td>

                <td className="p-4 text-slate-300">
                  {sponsor.company}
                </td>

                <td className="p-4 text-slate-300">
                  {sponsor.email}
                </td>

                <td className="p-4 text-slate-300">
                  {sponsor.phone}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      sponsor.sponsoredBefore ===
                      'Yes'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }`}
                  >
                    {sponsor.sponsoredBefore}
                  </span>
                </td>

                <td className="p-4 text-slate-300">
                  {new Date(
                    sponsor.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}