import { useCallback, useState } from 'react'
import { ArrowRight, Calculator, CheckCircle2, Minus, Plus, Users } from 'lucide-react'

const PRICE_PER_EMPLOYEE = 1050
const ANNUAL_DISCOUNT = 0.15

const features = [
  'Controlo biométrico, cartão e PIN',
  'App móvel com geolocalização',
  'Gestão de férias e ausências',
  'Relatórios em tempo real',
  'Exportação para payroll',
  'Suporte técnico local',
  'Actualizações incluídas',
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
    const parsed = parseInt(value, 10)
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= 99999) {
      setEmployees(parsed)
    }
  }, [])

  const monthly = employees * PRICE_PER_EMPLOYEE
  const annualFull = monthly * 12
  const annualDiscounted = Math.round(annualFull * (1 - ANNUAL_DISCOUNT))
  const annualSaving = annualFull - annualDiscounted

  return (
    /* Page background stays white */
    <section id="pricing" className="bg-white py-20">

      {/* ── Premium card ── */}
      <div
        style={{
          maxWidth: '1400px',
          width: '92%',
          margin: '0 auto',
          background: '#182a66',
          borderRadius: '30px',
          padding: 'clamp(36px, 5vw, 64px) clamp(28px, 5.5vw, 72px)',
        }}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
          >
            Preço transparente
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Calcule o valor para a{' '}
            <span style={{ color: '#f97316' }}>sua empresa</span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Preço fixo de <strong className="text-white">1.050 Kz</strong> por funcionário por mês.
            Informe a equipa e veja o total na hora.
          </p>
        </div>

        {/* Two columns */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-[70px]">

          {/* ── Left: calculator ── */}
          <div className="flex-1 min-w-0">

            {/* Calculator header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.35)' }}
              >
                <Calculator className="w-5 h-5" style={{ color: '#fb923c' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Calculadora simples</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Ajuste o número de funcionários.</p>
              </div>
            </div>

            {/* Employee input */}
            <div
              className="rounded-2xl p-5 mb-5"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <Users className="w-4 h-4" />
                Funcionários
              </label>

              <div className="grid grid-cols-[48px_1fr_48px] gap-3 items-center">
                <button
                  type="button"
                  aria-label="Diminuir"
                  onClick={() => setEmployeeCount(employees - 1)}
                  className="h-12 rounded-xl flex items-center justify-center text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                >
                  <Minus className="w-5 h-5" />
                </button>

                <input
                  type="number"
                  min={1}
                  max={99999}
                  value={input}
                  onChange={e => handleInput(e.target.value)}
                  className="h-12 min-w-0 rounded-xl bg-white text-center text-2xl font-black text-slate-900 outline-none transition-shadow"
                  style={{ boxShadow: 'none' }}
                  onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 2px #f97316')}
                  onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
                />

                <button
                  type="button"
                  aria-label="Aumentar"
                  onClick={() => setEmployeeCount(employees + 1)}
                  className="h-12 rounded-xl flex items-center justify-center text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
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
                    className="h-10 rounded-lg text-sm font-bold transition-colors"
                    style={
                      employees === count
                        ? { background: '#f97316', color: '#fff' }
                        : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)' }
                    }
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly total */}
            <div className="rounded-2xl bg-white p-6 mb-4">
              <div className="text-sm font-semibold text-slate-500 mb-1">Total mensal</div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900">{fmt(monthly)}</div>
              <div className="text-sm text-slate-400 mt-2">
                {employees} funcionário{employees !== 1 ? 's' : ''} × {fmt(PRICE_PER_EMPLOYEE)}
              </div>
            </div>

            {/* Annual breakdown */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
              >
                <div className="text-xs font-bold uppercase mb-1" style={{ color: '#fb923c' }}>Plano anual</div>
                <div className="text-xl font-black text-white">{fmt(annualDiscounted)}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(251,146,60,0.8)' }}>Poupa {fmt(annualSaving)}</div>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="text-xs font-bold uppercase mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>Sem desconto</div>
                <div className="text-xl font-black text-white">{fmt(annualFull)}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>12 meses</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-4 font-bold rounded-xl transition-all duration-200 group"
              style={{ background: '#f97316', color: '#fff' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ea6c10'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f97316'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Solicitar proposta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* ── Right: features + summary ── */}
          <div className="flex-1 min-w-0">

            <h3 className="text-xl font-bold text-white mb-2">Tudo incluído no preço</h3>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Um preço por funcionário cobre a plataforma completa.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.4)' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#fb923c' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Summary table */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="px-5 py-3 text-xs font-bold uppercase tracking-wide"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
              >
                Resumo para {employees} funcionário{employees !== 1 ? 's' : ''}
              </div>
              <div>
                {[
                  { label: 'Pagamento mensal', value: fmt(monthly), sub: 'sem compromisso', highlight: false },
                  { label: 'Pagamento anual', value: fmt(annualDiscounted), sub: `poupa ${fmt(annualSaving)}/ano`, highlight: true },
                ].map(({ label, value, sub, highlight }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 px-5 py-4"
                    style={{
                      background: highlight ? 'rgba(249,115,22,0.08)' : 'transparent',
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <div>
                      <div className="text-sm font-semibold" style={{ color: highlight ? '#fb923c' : '#fff' }}>{label}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{sub}</div>
                    </div>
                    <div className="text-sm font-bold" style={{ color: highlight ? '#fb923c' : '#fff' }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs mt-4 text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Valores em Kwanzas (Kz). IVA não incluído. Preços sujeitos a confirmação por proposta formal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
