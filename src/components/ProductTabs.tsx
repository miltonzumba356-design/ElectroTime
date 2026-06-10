import { useState } from 'react'
import { CheckCircle2, Clock, Calendar, BarChart3, Users } from 'lucide-react'

const tabs = [
  {
    id: 'attendance',
    label: 'Controlo Horário',
    icon: Clock,
    headline: 'Controlo preciso do tempo de trabalho',
    desc: 'Elimine folhas de ponto em papel e erros manuais. O ElectroTime regista automaticamente as entradas, saídas e pausas de cada colaborador, com suporte a múltiplos métodos de marcação.',
    benefits: [
      'Marcação por biometria, cartão ou app móvel',
      'Cálculo automático de horas extra',
      'Alertas de atraso em tempo real',
      'Histórico completo de marcações',
      'Suporte a múltiplos turnos e horários',
    ],
    visual: {
      title: 'Controlo de Ponto',
      rows: [
        { name: 'João Silva', entry: '08:02', exit: '17:05', hours: '9h03', status: 'Normal' },
        { name: 'Maria Costa', entry: '08:45', exit: '18:20', hours: '9h35', status: 'Extra' },
        { name: 'Pedro Neto', entry: '09:15', exit: '—', hours: '—', status: 'Activo' },
        { name: 'Ana Barros', entry: '—', exit: '—', hours: '0h', status: 'Falta' },
      ],
    },
  },
  {
    id: 'time',
    label: 'Gestão de Tempo',
    icon: BarChart3,
    headline: 'Analise e otimize a produtividade',
    desc: 'Dashboards inteligentes que transformam dados de presença em insights accionáveis. Identifique padrões de absenteísmo, distribua turnos de forma equilibrada e maximize a eficiência da equipa.',
    benefits: [
      'Dashboards personalizáveis em tempo real',
      'Análise de produtividade por departamento',
      'Relatórios automáticos por email',
      'Exportação para Excel e PDF',
      'Integração com sistemas de payroll',
    ],
    visual: {
      title: 'Análise de Produtividade',
      chart: true,
    },
  },
  {
    id: 'vacation',
    label: 'Gestão de Férias',
    icon: Calendar,
    headline: 'Férias e ausências sem complicações',
    desc: 'Os colaboradores submetem pedidos de férias diretamente na app. Os gestores aprovam com um clique, com visibilidade total do calendário da equipa e saldos disponíveis.',
    benefits: [
      'Submissão de pedidos via app ou web',
      'Aprovação automática ou por gestor',
      'Calendário de equipa partilhado',
      'Cálculo automático de saldos de férias',
      'Notificações push para aprovações',
    ],
    visual: {
      title: 'Calendário de Férias',
      calendar: true,
    },
  },
  {
    id: 'team',
    label: 'Gestão de Equipa',
    icon: Users,
    headline: 'Toda a sua equipa centralizada',
    desc: 'Organize colaboradores por departamentos, defina hierarquias de aprovação e gira permissões de forma granular. Escalável para equipas de 10 a 10.000 pessoas.',
    benefits: [
      'Organograma dinâmico',
      'Perfis completos de colaboradores',
      'Gestão de permissões por papel',
      'Integração com Active Directory',
      'Onboarding simplificado',
    ],
    visual: {
      title: 'Equipa',
      team: true,
    },
  },
]

function VisualPanel({ tab }: { tab: typeof tabs[0] }) {
  if (tab.visual.chart) {
    const data = [72, 85, 68, 91, 78, 63, 88, 95, 70, 82, 76, 89]
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
        <div className="text-sm font-bold text-gray-800 mb-4">{tab.visual.title}</div>
        <div className="flex items-end gap-2 h-36">
          {data.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 transition-all"
                style={{ height: `${v}%` }}
              />
              <span className="text-[9px] text-gray-400">{months[i]}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
          {[
            { label: 'Média Horas/Dia', value: '8h12m' },
            { label: 'Horas Extra', value: '+342h' },
            { label: 'Absenteísmo', value: '2.1%' },
          ].map((kpi) => (
            <div key={kpi.label} className="text-center">
              <div className="text-lg font-bold text-blue-600">{kpi.value}</div>
              <div className="text-[10px] text-gray-500">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (tab.visual.calendar) {
    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const vacations = [8, 9, 10, 11, 12, 15, 16, 17, 22, 23]
    const pending = [25, 26, 27]
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-bold text-gray-800">Julho 2025</div>
          <div className="flex gap-3 text-[10px]">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-100 inline-block" />Férias</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-100 inline-block" />Pendente</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d) => (
            <div key={d} className="text-center text-[9px] font-semibold text-gray-400 py-1">{d}</div>
          ))}
          {days.map((d) => (
            <div
              key={d}
              className={`text-center py-1.5 rounded-lg text-xs font-medium ${
                vacations.includes(d) ? 'bg-blue-100 text-blue-700' :
                pending.includes(d) ? 'bg-yellow-100 text-yellow-700' :
                'text-gray-600'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (tab.visual.team) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
        <div className="text-sm font-bold text-gray-800 mb-4">{tab.visual.title}</div>
        <div className="space-y-2">
          {[
            { name: 'Ricardo Alves', role: 'Director RH', dept: 'RH', avatar: 'R' },
            { name: 'Inês Rodrigues', role: 'Gestora Financeira', dept: 'Financeiro', avatar: 'I' },
            { name: 'Bruno Santos', role: 'Dev Lead', dept: 'Tecnologia', avatar: 'B' },
            { name: 'Cátia Monteiro', role: 'Marketing', dept: 'Marketing', avatar: 'C' },
            { name: 'Luís Ferreira', role: 'Operações', dept: 'Operações', avatar: 'L' },
          ].map((emp) => (
            <div key={emp.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {emp.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-800 truncate">{emp.name}</div>
                <div className="text-xs text-gray-500">{emp.role}</div>
              </div>
              <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{emp.dept}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default: rows table
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-blue-700 px-5 py-3 text-white text-sm font-bold">{tab.visual.title}</div>
      <div className="divide-y divide-gray-100">
        <div className="grid grid-cols-5 px-5 py-2 bg-gray-50 text-xs font-semibold text-gray-500">
          <span className="col-span-2">Colaborador</span>
          <span>Entrada</span>
          <span>Saída</span>
          <span>Estado</span>
        </div>
        {tab.visual.rows?.map((row) => (
          <div key={row.name} className="grid grid-cols-5 px-5 py-3 text-sm items-center">
            <span className="col-span-2 font-medium text-gray-800">{row.name}</span>
            <span className="text-gray-600">{row.entry}</span>
            <span className="text-gray-600">{row.exit}</span>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${
              row.status === 'Normal' ? 'bg-green-100 text-green-700' :
              row.status === 'Extra' ? 'bg-blue-100 text-blue-700' :
              row.status === 'Activo' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>{row.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductTabs() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]
  const Icon = tab.icon

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            As Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Uma plataforma, múltiplas soluções
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore cada módulo do ElectroTime e descubra como cada um pode transformar
            a gestão do tempo na sua organização.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(({ label, icon: TabIcon }, i) => (
            <button
              key={label}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{tab.headline}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">{tab.desc}</p>
            <ul className="space-y-3">
              {tab.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Ver em Detalhe
            </a>
          </div>

          {/* Right: visual */}
          <VisualPanel tab={tab} />
        </div>
      </div>
    </section>
  )
}
