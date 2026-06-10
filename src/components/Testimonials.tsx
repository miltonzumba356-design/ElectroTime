import { BarChart3, Clock3, ShieldCheck, UsersRound } from 'lucide-react'

const results = [
  {
    icon: Clock3,
    value: 'Menos tempo',
    label: 'Processos de ponto passam a ser automaticos e faceis de consultar.',
  },
  {
    icon: BarChart3,
    value: 'Mais controlo',
    label: 'Relatorios claros para acompanhar horas, atrasos e ausencias.',
  },
  {
    icon: UsersRound,
    value: 'Equipas alinhadas',
    label: 'RH, supervisores e colaboradores trabalham com a mesma informacao.',
  },
  {
    icon: ShieldCheck,
    value: 'Dados seguros',
    label: 'Registos organizados para auditoria, payroll e gestao interna.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Uma gestao de assiduidade mais simples
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            O ElectroTime ajuda a reduzir tarefas manuais e melhora a leitura dos dados da equipa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map(({ icon: Icon, value, label }) => (
            <div key={value} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">{value}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-blue-700 px-6 py-7 sm:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-white">Pronto para empresas em crescimento</h3>
            <p className="text-sm text-blue-100 mt-1">
              Um sistema unico para ponto, turnos, ausencias e relatorios.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            Pedir demonstracao
          </a>
        </div>
      </div>
    </section>
  )
}
