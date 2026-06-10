import { useCallback, useState } from 'react'
import { ArrowRight, Calculator, CheckCircle2, Minus, Plus, Users } from 'lucide-react'

const PRICE_PER_EMPLOYEE = 1050
const ANNUAL_DISCOUNT = 0.15

const features = [
  'Controlo biometrico, cartao e PIN',
  'App movel com geolocalizacao',
  'Gestao de ferias e ausencias',
  'Relatorios em tempo real',
  'Exportacao para payroll',
  'Suporte tecnico local',
  'Actualizacoes incluidas',
]

const presets = [10, 20, 50, 100]

function fmt(value: number) {
  return `${value.toLocaleString('pt-AO')} Kz`
}

export default function Pricing() {
  const [employees, setEmployees] = useState(20)
  const [input, setInput] = useState('20')

  const setEmployeeCount = useCallback((count: number) => {
    const safeCount = Math.min(99999, Math.max(1, count))
    setEmployees(safeCount)
    setInput(String(safeCount))
  }, [])

  const handleInput = useCallback((value: string) => {
    setInput(value)

    const parsedValue = parseInt(value, 10)
    if (!Number.isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 99999) {
      setEmployees(parsedValue)
    }
  }, [])

  const monthly = employees * PRICE_PER_EMPLOYEE
  const annualFull = monthly * 12
  const annualDiscounted = Math.round(annualFull * (1 - ANNUAL_DISCOUNT))
  const annualSaving = annualFull - annualDiscounted

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Preco transparente
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Calcule o valor para a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              sua empresa
            </span>
          </h2>
          <p className="text-lg text-blue-200/80 max-w-xl mx-auto">
            Preco fixo de <strong className="text-white">1.050 Kz</strong> por funcionario por mes.
            Informe a equipa e veja o total na hora.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-orange-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Calculadora simples</h3>
                <p className="text-sm text-blue-200/70">Ajuste o numero de funcionarios.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-5 mb-5">
              <label className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-4">
                <Users className="w-4 h-4" />
                Funcionarios
              </label>

              <div className="grid grid-cols-[48px_1fr_48px] gap-3 items-center">
                <button
                  type="button"
                  aria-label="Diminuir funcionarios"
                  onClick={() => setEmployeeCount(employees - 1)}
                  className="h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>

                <input
                  type="number"
                  min={1}
                  max={99999}
                  value={input}
                  onChange={event => handleInput(event.target.value)}
                  className="h-12 min-w-0 rounded-xl bg-white text-center text-2xl font-black text-slate-900 outline-none ring-2 ring-transparent focus:ring-orange-400 transition-shadow"
                />

                <button
                  type="button"
                  aria-label="Aumentar funcionarios"
                  onClick={() => setEmployeeCount(employees + 1)}
                  className="h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4">
                {presets.map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setEmployeeCount(count)}
                    className={`h-10 rounded-lg text-sm font-bold transition-colors ${
                      employees === count
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/10 text-blue-100 hover:bg-white/20'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white text-slate-900 p-6 mb-4">
              <div className="text-sm font-semibold text-slate-500 mb-1">Total mensal</div>
              <div className="text-3xl sm:text-4xl font-black">{fmt(monthly)}</div>
              <div className="text-sm text-slate-500 mt-2">
                {employees} funcionario{employees !== 1 ? 's' : ''} x {fmt(PRICE_PER_EMPLOYEE)}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-orange-500/20 border border-orange-400/30 p-4">
                <div className="text-xs text-orange-200 font-bold uppercase mb-1">Plano anual</div>
                <div className="text-xl font-black text-white">{fmt(annualDiscounted)}</div>
                <div className="text-xs text-orange-100/80 mt-1">Poupa {fmt(annualSaving)}</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-blue-300 font-bold uppercase mb-1">Sem desconto</div>
                <div className="text-xl font-black text-white">{fmt(annualFull)}</div>
                <div className="text-xs text-blue-300 mt-1">12 meses</div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/40 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              Solicitar proposta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Tudo incluido no preco</h3>
              <p className="text-blue-200/70 text-sm">
                Um preco por funcionario cobre a plataforma principal.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map(feature => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                  <span className="text-blue-100 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/10 text-xs font-bold text-blue-300 uppercase tracking-wide">
                Resumo para {employees} funcionario{employees !== 1 ? 's' : ''}
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { label: 'Pagamento mensal', value: fmt(monthly), sub: 'sem compromisso' },
                  { label: 'Pagamento anual', value: fmt(annualDiscounted), sub: `poupa ${fmt(annualSaving)}/ano`, highlight: true },
                ].map(({ label, value, sub, highlight }) => (
                  <div key={label} className={`flex items-center justify-between gap-4 px-5 py-3.5 ${highlight ? 'bg-orange-500/10' : ''}`}>
                    <div>
                      <div className={`text-sm font-semibold ${highlight ? 'text-orange-300' : 'text-white'}`}>{label}</div>
                      <div className="text-xs text-blue-400">{sub}</div>
                    </div>
                    <div className={`text-sm font-bold text-right ${highlight ? 'text-orange-300' : 'text-white'}`}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-blue-400/60 mt-4 text-center">
              Valores em Kwanzas (Kz). IVA nao incluido. Precos sujeitos a confirmacao por proposta formal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
