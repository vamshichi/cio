export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'

export default async function MediaPage() {
  const [
    contacts,
    delegates,
    sponsors,
    nominations,
  ] = await Promise.all([
    prisma.contactRegistration.findMany({
      where: {
        utmSource: {
          not: null,
        },
      },
    }),

    prisma.delegateRegistration.findMany({
      where: {
        utmSource: {
          not: null,
        },
      },
    }),

    prisma.sponsorRegistration.findMany({
      where: {
        utmSource: {
          not: null,
        },
      },
    }),

    prisma.awardNomination.findMany({
      where: {
        utmSource: {
          not: null,
        },
      },
    }),
  ])

  const leads = [
    ...contacts.map((item) => ({
      id: item.id,
      type: 'Contact',
      name: item.fullName,
      company: item.company,
      email: item.email,
      source: item.utmSource,
      medium: item.utmMedium,
      campaign: item.utmCampaign,
      date: item.createdAt,
    })),

    ...delegates.map((item) => ({
      id: item.id,
      type: 'Delegate',
      name: item.fullName,
      company: item.company,
      email: item.email,
      source: item.utmSource,
      medium: item.utmMedium,
      campaign: item.utmCampaign,
      date: item.createdAt,
    })),

    ...sponsors.map((item) => ({
      id: item.id,
      type: 'Sponsor',
      name: item.fullName,
      company: item.company,
      email: item.email,
      source: item.utmSource,
      medium: item.utmMedium,
      campaign: item.utmCampaign,
      date: item.createdAt,
    })),

    ...nominations.map((item) => ({
      id: item.id,
      type: 'Nomination',
      name: item.nomineeName,
      company: item.nomineeOrganisation,
      email: item.nominatorEmail,
      source: item.utmSource,
      medium: item.utmMedium,
      campaign: item.utmCampaign,
      date: item.createdAt,
    })),
  ].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )

  const sourceCounts = leads.reduce(
    (acc, lead) => {
      const source =
        lead.source || 'direct'

      acc[source] =
        (acc[source] || 0) + 1

      return acc
    },
    {} as Record<string, number>
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Media Leads
        </h1>

        <p className="mt-2 text-slate-400">
          Leads generated from social media,
          campaigns and media partners
        </p>
      </div>

      {/* Analytics Cards */}

      <div className="grid gap-4 md:grid-cols-4">
        {Object.entries(sourceCounts).map(
          ([source, count]) => (
            <div
              key={source}
              className="rounded-xl border border-white/10 bg-slate-900 p-5"
            >
              <p className="text-sm text-slate-400">
                {source}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                {count}
              </h3>
            </div>
          )
        )}
      </div>

      {/* Leads Table */}

      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left text-white">
                Type
              </th>

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
                Source
              </th>

              <th className="p-4 text-left text-white">
                Medium
              </th>

              <th className="p-4 text-left text-white">
                Campaign
              </th>

              <th className="p-4 text-left text-white">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={`${lead.type}-${lead.id}`}
                className="border-t border-white/10"
              >
                <td className="p-4 text-slate-300">
                  {lead.type}
                </td>

                <td className="p-4 text-slate-300">
                  {lead.name}
                </td>

                <td className="p-4 text-slate-300">
                  {lead.company}
                </td>

                <td className="p-4 text-slate-300">
                  {lead.email}
                </td>

                <td className="p-4">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                    {lead.source || 'direct'}
                  </span>
                </td>

                <td className="p-4 text-slate-300">
                  {lead.medium || '-'}
                </td>

                <td className="p-4 text-slate-300">
                  {lead.campaign || '-'}
                </td>

                <td className="p-4 text-slate-300">
                  {new Date(
                    lead.date
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