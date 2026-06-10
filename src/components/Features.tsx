import { useEffect, useRef, useState } from 'react'
import {
  Clock, Shield, BarChart3, Smartphone, Calendar,
  Bell, FileText, Globe, Zap,
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Controlo de Assiduidade',
    desc: 'Registe entradas e saídas com precisão. Suporte a biometria, cartão, PIN e app móvel.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Calendar,
    title: 'Gestão de Férias',
    desc: 'Pedidos, aprovações e saldos de férias totalmente automatizados e integrados.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Avançados',
    desc: 'Dashboards em tempo real com análises de produtividade, horas extra e absenteísmo.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Smartphone,
    title: 'App Móvel',
    desc: 'Gestão na palma da mão. iOS e Android com marcação de ponto por geolocalização.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Shield,
    title: 'Conformidade Legal',
    desc: 'Cumprimento automático da legislação laboral angolana e RGPD para dados de colaboradores.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Bell,
    title: 'Alertas Inteligentes',
    desc: 'Notificações automáticas para atrasos, ausências não justificadas e horas extra.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: FileText,
    title: 'Processamento Salarial',
    desc: 'Exportação direta para sistemas de payroll com cálculo automático de subsídios.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Globe,
    title: 'Acesso Remoto',
    desc: 'Gerencie equipas distribuídas com suporte a múltiplas localizações e turnos.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Zap,
    title: 'Integrações',
    desc: 'Conecte com ERP, sistemas de RH e ferramentas que já utiliza na sua empresa.',
    color: 'bg-pink-100 text-pink-600',
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

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms, box-shadow 0.3s, border-color 0.3s, translate 0.3s`,
              }}
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
