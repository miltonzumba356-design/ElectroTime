import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const cases = [
  {
    id: 'biometria',
    tag: 'Controlo Biometrico',
    title: 'Marcacao de ponto rapida e fiavel',
    desc: 'Os colaboradores identificam-se em segundos por impressao digital, cartao ou PIN. Sem fraudes, sem confusoes, cada marcacao fica associada a pessoa certa.',
    img: '/images/scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg',
    imgAlt: 'Colaborador a usar leitor biometrico com luz verde de confirmacao',
    points: ['Impressao digital, face e cartao RFID', 'Confirmacao instantanea em menos de 1 segundo', 'Anti-fraude integrado'],
    accent: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    badge: 'bg-green-100 text-green-800',
  },
  {
    id: 'acesso',
    tag: 'Grandes Instalacoes',
    title: 'Controlo de acesso em escala',
    desc: 'Integre o ElectroTime com torniquetes, cancelas e portas automaticas. Gira o acesso de centenas de colaboradores em varias entradas.',
    img: '/images/ticket-barriers-subway-entrance.jpg',
    imgAlt: 'Torniquetes de controlo de acesso numa instalacao industrial',
    points: ['Integracao com torniquetes e cancelas', 'Multiplas entradas numa so plataforma', 'Registo automatico de cada passagem'],
    accent: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'terminal',
    tag: 'Instalacao Simples',
    title: 'Terminal autonomo para qualquer ambiente',
    desc: 'Os terminais de ponto funcionam sem internet, resistem a ambientes industriais e instalam-se rapidamente.',
    img: '/it-professional-working-ensure-data-center-gear-operates-efficiently.jpg',
    imgAlt: 'Terminal de marcacao de ponto com teclado e leitor biometrico',
    points: ['Funciona offline com sincronizacao automatica', 'Resistente a poeira, humidade e impactos', 'Configuracao rapida'],
    accent: 'from-slate-600 to-slate-800',
    bg: 'bg-slate-50',
    badge: 'bg-slate-100 text-slate-800',
  },
  {
    id: 'movel',
    tag: 'Trabalhadores Remotos',
    title: 'App movel para equipas no terreno',
    desc: 'Tecnicos, vendedores e trabalhadores fora do escritorio marcam ponto diretamente pelo telemovel com geolocalizacao.',
    img: '/images/fashionable-young-black-man-tourist-with-leather-backpack-looking-smartphone-his-hands-with-serious-expression-using-online-navigation-app-searching-direction-while-got-lost-big-city.jpg',
    imgAlt: 'Profissional a usar app ElectroTime no telemovel em ambiente urbano',
    points: ['iOS e Android com modo offline', 'Geolocalizacao por GPS', 'Notificacoes em tempo real'],
    accent: 'from-orange-500 to-amber-600',
    bg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    id: 'armazem',
    tag: 'Logistica e Operacoes',
    title: 'Visibilidade total de equipas no terreno',
    desc: 'Supervisores e operadores consultam horarios, aprovam ausencias e gerem turnos diretamente no tablet.',
    img: '/images/black-employees-checking-inventory-shipment-details-laptop-before-applying-awb-tags-large.jpg',
    imgAlt: 'Operarios de armazem a consultar dados de gestao de equipa num tablet',
    points: ['Gestao de turnos rotativos e noturnos', 'Aprovacao de ausencias sem papel', 'Dashboard para supervisores'],
    accent: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-50',
    badge: 'bg-yellow-100 text-yellow-800',
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function UseCases() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Para Quem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            O ElectroTime adapta-se{' '}
            <span className="text-blue-600">a qualquer ambiente de trabalho</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Do escritorio ao armazem, do campo ao estaleiro, uma plataforma unica
            que acompanha os seus colaboradores onde quer que estejam.
          </p>
        </div>

        <div ref={ref} className="space-y-24">
          {cases.map(({ id, tag, title, desc, img, imgAlt, points, accent, bg, badge }, index) => (
            <div
              key={id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
              }}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={img}
                    alt={imgAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-20`} />
                  <div className="absolute top-4 left-4">
                    <span className={`${badge} text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
                      {tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className={`inline-block ${bg} rounded-2xl p-8`}>
                  <span className={`text-xs font-bold uppercase tracking-widest ${badge} px-3 py-1 rounded-full`}>
                    {tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900 mt-4 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>

                  <ul className="space-y-3 mb-8">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all group"
                  >
                    Saber mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
