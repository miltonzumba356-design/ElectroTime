import { useEffect, useRef, useState } from 'react'
import { UserPlus, Settings, Smartphone, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Configure a sua Empresa',
    desc: 'Importe os seus colaboradores, defina departamentos, horários e regras de negócio específicas da sua organização em minutos.',
    color: 'bg-blue-600',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Personalize os Módulos',
    desc: 'Ative as funcionalidades que precisa: controlo de ponto, gestão de férias, relatórios. Configure de acordo com a sua política interna.',
    color: 'bg-indigo-600',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'A Equipa Começa a Usar',
    desc: 'Os colaboradores instalam a app e começam a marcar ponto, pedir férias e consultar os seus registos de forma autónoma.',
    color: 'bg-purple-600',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Analise e Decida',
    desc: 'Aceda a dashboards completos, exporte relatórios e tome decisões baseadas em dados reais da sua equipa.',
    color: 'bg-violet-600',
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Pronto em 4 passos simples
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Em menos de 48 horas tem o ElectroTime completamente configurado e a sua equipa
            a trabalhar com a nova solução.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, number, title, desc, color }, i) => (
            <div
              key={title}
              className="relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] right-[-50%] h-px bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}

              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-4xl font-black text-gray-100 absolute top-4 right-4">{number}</span>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Começar Agora — É Grátis por 30 dias
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-400 mt-3">Sem cartão de crédito. Sem compromisso.</p>
        </div>
      </div>
    </section>
  )
}
