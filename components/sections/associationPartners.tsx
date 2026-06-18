import Image from 'next/image'

const associationPartners = [
  {
    id: 1,
    name: 'AIWoW Council',
    logo: '/associatpartners/AIWOW COUNCIL.jpg',
  },
  {
    id: 2,
    name: 'MAIT',
    logo: '/associatpartners/MAIT.jpg',
  },
]

export default function AssociationPartners() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#071B35] to-[#0B2347]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Strategic Collaborations
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Association Partners
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Proudly collaborating with leading industry associations
            driving innovation, leadership and digital transformation.
          </p>
        </div>

        {/* Center Logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {associationPartners.map((partner) => (
            <div
              key={partner.id}
              className="
                group
                flex
                h-44
                w-[320px]
                items-center
                justify-center
                rounded-3xl
                border
                border-cyan-400/20
                bg-white
                p-8
                shadow-[0_0_40px_rgba(0,212,255,0.08)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_50px_rgba(0,212,255,0.25)]
              "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={120}
                className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}