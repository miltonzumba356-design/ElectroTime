import { useEffect, useRef, useState } from 'react'

const screens = [
  {
    src: '/images/screens/screen-1.jpeg',
    title: 'Gestão Financeira',
    desc: 'Balanço líquido e sobra salarial por colaborador.',
    yOffset: 64,
  },
  {
    src: '/images/screens/screen-2.jpeg',
    title: 'Controlo de Gastos',
    desc: 'Monitorize gastos mensais com projeções automáticas.',
    yOffset: 32,
  },
  {
    src: '/images/screens/screen-3.jpeg',
    title: 'Escala & Calendário',
    desc: 'Escalas semanais, tarefas e saldos de férias.',
    yOffset: 0,
  },
  {
    src: '/images/screens/screen-4.jpeg',
    title: 'Férias & Atrasos',
    desc: 'Solicite férias e acompanhe registos de atrasos.',
    yOffset: 32,
  },
  {
    src: '/images/screens/screen-5.jpeg',
    title: 'Documentos',
    desc: 'Recibos de vencimento e declarações sempre acessíveis.',
    yOffset: 64,
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

function IphoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full select-none">
      {/* Outer titanium frame */}
      <div
        className="relative shadow-[0_28px_56px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]"
        style={{
          background: 'linear-gradient(145deg, #3a3a3c, #1c1c1e)',
          borderRadius: '2.2rem',
          padding: '3px',
        }}
      >
        {/* Left: mute toggle */}
        <div
          className="absolute bg-gray-600"
          style={{ left: '-4px', top: '14%', width: '4px', height: '22px', borderRadius: '2px 0 0 2px' }}
        />
        {/* Left: volume up */}
        <div
          className="absolute bg-gray-600"
          style={{ left: '-4px', top: '22%', width: '4px', height: '34px', borderRadius: '2px 0 0 2px' }}
        />
        {/* Left: volume down */}
        <div
          className="absolute bg-gray-600"
          style={{ left: '-4px', top: '32%', width: '4px', height: '34px', borderRadius: '2px 0 0 2px' }}
        />
        {/* Right: power/lock */}
        <div
          className="absolute bg-gray-600"
          style={{ right: '-4px', top: '23%', width: '4px', height: '52px', borderRadius: '0 2px 2px 0' }}
        />

        {/* Screen bezel */}
        <div
          className="relative overflow-hidden bg-black"
          style={{ borderRadius: '2rem', aspectRatio: '9 / 19.5' }}
        >
          {/* Dynamic Island */}
          <div
            className="absolute z-20 bg-black"
            style={{
              top: '2.8%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '34%',
              height: '3.4%',
              borderRadius: '999px',
            }}
          />

          {/* Screenshot */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Tudo o que precisa para gerir{' '}
            <span className="text-blue-600">o tempo da sua equipa</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Uma plataforma completa que elimina processos manuais e dá visibilidade total
            sobre a assiduidade dos seus colaboradores.
          </p>
        </div>

        {/* Phones row */}
        <div
          ref={ref}
          className="flex items-end justify-center gap-4 sm:gap-6 overflow-x-auto pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screens.map(({ src, title, desc, yOffset }, i) => (
            <div
              key={title}
              className="flex-shrink-0 flex flex-col items-center gap-5"
              style={{
                width: 'clamp(140px, 17vw, 196px)',
                transform: inView
                  ? `translateY(${yOffset}px)`
                  : `translateY(${yOffset + 48}px)`,
                opacity: inView ? 1 : 0,
                transition: `opacity 0.65s ease ${i * 90}ms, transform 0.65s cubic-bezier(.22,.68,0,1.2) ${i * 90}ms`,
              }}
            >
              <IphoneMockup src={src} alt={title} />

              <div className="text-center px-1">
                <p className="text-sm font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
