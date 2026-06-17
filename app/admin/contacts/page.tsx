import { prisma } from '@/lib/prisma'

export default async function ContactsPage() {
  const contacts =
    await prisma.contactRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-white">
        Contact Registrations
      </h1>

      <div className="overflow-hidden rounded-xl border border-white/10">
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
                Created
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className="border-t border-white/10"
              >
                <td className="p-4 text-slate-300">
                  {contact.fullName}
                </td>

                <td className="p-4 text-slate-300">
                  {contact.company}
                </td>

                <td className="p-4 text-slate-300">
                  {contact.email}
                </td>

                <td className="p-4 text-slate-300">
                  {contact.phone}
                </td>

                <td className="p-4 text-slate-300">
                  {new Date(
                    contact.createdAt
                  ).toLocaleDateString()
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}