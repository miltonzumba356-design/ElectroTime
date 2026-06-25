import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

const screens = [
  {
    src: '/images/screens/screen-0.jpeg',
    title: 'Ponto em Tempo Real',
    desc: 'Entrada com biometria em segundos.',
    yOffset: 60,
    color: 'from-blue-500 to-blue-700',
    details: [
      'Registo rápido de entrada com impressão digital',
      'Dashboard com atividade diária em destaque',
      'Ações rápidas: almoço, gastos e férias',
      'Notificações automáticas de ponto por registar',
    ],
  },
  {
    src: '/images/screens/screen-1.jpeg',
    title: 'Gestão Financeira',
    desc: 'Balanço líquido e sobra salarial.',
    yOffset: 30,
    color: 'from-emerald-500 to-emerald-700',
    details: [
      'Cartão de economias com saldo líquido por mês',
      'Salário vs. gastos comparados em tempo real',
      'Indicador de saúde financeira automático',
      'Histórico completo de despesas mensais',
    ],
  },
  {
    src: '/images/screens/screen-2.jpeg',
    title: 'Controlo de Gastos',
    desc: 'Projeções automáticas de despesas.',
    yOffset: 0,
    color: 'from-orange-500 to-orange-700',
    details: [
      'Fugas de dinheiro identificadas automaticamente',
      'Projeção diária, mensal e anual de gastos',
      'Categorização por tipo: alimentação, transporte…',
      'Alertas quando os gastos ultrapassam o habitual',
    ],
  },
  {
    src: '/images/screens/screen-3.jpeg',
    title: 'Escala & Calendário',
    desc: 'Escalas semanais e saldos de férias.',
    yOffset: 0,
    color: 'from-violet-500 to-violet-700',
    details: [
      'Escala semanal visual com status por dia',
      'Checklist de tarefas do dia integrado',
      'Saldo de férias: disponíveis, gozados e total',
      'Histórico de solicitações de ausência',
    ],
  },
  {
    src: '/images/screens/screen-4.jpeg',
    title: 'Férias & Atrasos',
    desc: 'Pedidos de férias e registo de atrasos.',
    yOffset: 30,
    color: 'from-rose-500 to-rose-700',
    details: [
      'Pedidos de férias com status aprovado/pendente',
      'Registo de atrasos com motivo e duração',
      'Notificação ao gestor em tempo real',
      'Histórico completo de ausências do colaborador',
    ],
  },
  {
    src: '/images/screens/screen-5.jpeg',
    title: 'Documentos & Recibos',
    desc: 'Recibos de vencimento sempre acessíveis.',
    yOffset: 60,
    color: 'from-teal-500 to-teal-700',
    details: [
      'Recibos de vencimento mensais para download',
      'Declarações e outros documentos de RH',
      'Acesso direto via app sem passar pelo RH',
      'Histórico desde o início do contrato',
    ],
  },
]

function useInView(threshold = 0.1) {
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
      <div
        className="relative"
        style={{
          background: 'linear-gradient(145deg, #3a3a3c, #1c1c1e)',
          borderRadius: '2.1rem',
          padding: '3px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        {/* Left: mute */}
        <div className="absolute bg-gray-600" style={{ left: '-4px', top: '13%', width: '4px', height: '20px', borderRadius: '2px 0 0 2px' }} />
        {/* Left: vol+ */}
        <div className="absolute bg-gray-600" style={{ left: '-4px', top: '21%', width: '4px', height: '32px', borderRadius: '2px 0 0 2px' }} />
        {/* Left: vol- */}
        <div className="absolute bg-gray-600" style={{ left: '-4px', top: '31%', width: '4px', height: '32px', borderRadius: '2px 0 0 2px' }} />
        {/* Right: power */}
        <div className="absolute bg-gray-600" style={{ right: '-4px', top: '22%', width: '4px', height: '50px', borderRadius: '0 2px 2px 0' }} />

        {/* Screen */}
        <div
          className="relative overflow-hidden bg-black"
          style={{ borderRadius: '1.9rem', aspectRatio: '9 / 19.5' }}
        >
          {/* Dynamic Island */}
          <div
            className="absolute z-20 bg-black"
            style={{ top: '2.6%', left: '50%', transform: 'translateX(-50%)', width: '33%', height: '3.3%', borderRadius: '999px' }}
          />
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" draggable={false} />
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState<number | null>(null)
  const active = hovered !== null ? screens[hovered] : null

  return (
    <>
      <style>{`
        @keyframes detailIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="features" className="pt-24 pb-0 bg-gray-50 overflow-visible">

          {/* Header */}
          <div className="text-center mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Phones row — sem container, largura livre */}
          <div
            ref={ref}
            className="flex items-end justify-center gap-3 sm:gap-6"
            style={{ paddingBottom: '88px', paddingLeft: '16px', paddingRight: '16px' }}
          >
            {screens.map(({ src, title, desc, yOffset, color }, i) => {
              const isHovered = hovered === i
              const finalY = isHovered ? yOffset - 28 : yOffset

              return (
                <div
                  key={title}
                  className="flex-shrink-0 flex flex-col items-center gap-4 cursor-pointer"
                  style={{ width: 'clamp(140px, 13.5vw, 200px)' }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Phone */}
                  <div
                    style={{
                      width: '100%',
                      transform: inView
                        ? `translateY(${finalY}px)`
                        : `translateY(${yOffset + 48}px)`,
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.6s ease ${i * 80}ms, transform ${isHovered ? '0.28s' : '0.6s'} cubic-bezier(.22,.68,0,1.2) ${inView ? '0ms' : `${i * 80}ms`}`,
                      filter: isHovered ? 'drop-shadow(0 28px 32px rgba(0,0,0,0.30))' : 'none',
                    }}
                  >
                    <IphoneMockup src={src} alt={title} />
                  </div>

                  {/* Label */}
                  <div
                    className="text-center"
                    style={{
                      transform: inView ? `translateY(${yOffset}px)` : `translateY(${yOffset + 48}px)`,
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s cubic-bezier(.22,.68,0,1.2) ${i * 80}ms`,
                    }}
                  >
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-br ${color} mb-2`} />
                    <p className={`text-xs font-bold transition-colors duration-200 ${isHovered ? 'text-gray-900' : 'text-gray-600'}`}>
                      {title}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-tight mt-0.5 hidden sm:block">{desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="mt-4 h-[130px] flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {active && (
              <div
                key={hovered}
                className="w-full max-w-xl bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5"
                style={{ animation: 'detailIn 0.28s ease forwards' }}
              >
                <p className={`text-sm font-bold bg-gradient-to-r ${active.color} bg-clip-text text-transparent mb-3`}>
                  {active.title}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {active.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!active && (
              <p className="text-xs text-gray-400">
                Passe o cursor sobre um ecrã para ver os detalhes
              </p>
            )}
          </div>

      </section>
    </>
  )
}
