export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'
import DelegatesTable from './DelegatesTable'

export default async function DelegatesPage() {
  const delegates =
    await prisma.delegateRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    

  return (
    <DelegatesTable
      delegates={JSON.parse(
        JSON.stringify(delegates)
      )}
    />
  )
}