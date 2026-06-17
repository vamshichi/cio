import { prisma } from '@/lib/prisma'

export default async function DelegatesPage() {
  const delegates =
    await prisma.delegateRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Delegates
        </h1>

        <div className="rounded-lg bg-cyan-500 px-4 py-2 text-white">
          Total: {delegates.length}
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
            </tr>
          </thead>

          <tbody>
            {delegates.map((delegate) => (
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
                    className={`rounded-full px-3 py-1 text-xs ${
                      delegate.awardNomination === 'Yes'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }`}
                  >
                    {delegate.awardNomination}
                  </span>
                </td>

                <td className="p-4 text-slate-300">
                  {new Date(
                    delegate.createdAt
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