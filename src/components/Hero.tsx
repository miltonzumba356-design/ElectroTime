import { useEffect, useState } from 'react'
import { ArrowRight, CalendarCheck, Clock, FileText, Play } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Ponto em tempo real',
    description: 'Registe entradas, saídas e atrasos de cada colaborador num painel simples.',
  },
  {
    icon: CalendarCheck,
    title: 'Férias e ausências',
    description: 'Controle pedidos, aprovações e faltas sem depender de folhas manuais.',
  },
  {
    icon: FileText,
    title: 'Relatórios automáticos',
    description: 'Veja horas trabalhadas, assiduidade e exportações para a folha salarial.',
  },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative w-full bg-white pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div
        className="relative w-full max-w-5xl mx-auto px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8 text-sm text-gray-600 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
          Software de gestão de tempo para empresas em Angola
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-[1.08] mb-6">
          Controle o ponto, as férias e a assiduidade da sua equipa
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          O ElectroTime centraliza marcações de ponto, pedidos de ausência,
          horários e relatórios num sistema fácil de usar, com informação pronta
          para gestores, recursos humanos e processamento salarial.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a
            href="/cadastro-empresa"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            Solicitar registo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm transition-all duration-200 text-sm"
          >
            <Play className="w-4 h-4 text-gray-400" />
            Ver como funciona
          </a>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${0.3 + i * 0.08}s, transform 0.6s ease ${0.3 + i * 0.08}s`,
              }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-semibold text-gray-950">{title}</h2>
              <p className="text-sm leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Plano desde <span className="font-semibold text-gray-600">1.050 Kz por funcionário/mês</span>
        </p>
      </div>
    </section>
  )
}
