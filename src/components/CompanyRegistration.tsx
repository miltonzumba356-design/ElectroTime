import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ArrowLeft, Building2, CheckCircle2, Loader2, Mail, Phone, ShieldCheck } from 'lucide-react'

type RegisterForm = {
  nome: string
  nif: string
  email: string
  telefone: string
  endereco: string
  admin_nome: string
  admin_email: string
  admin_telefone: string
  observacoes: string
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

const initialForm: RegisterForm = {
  nome: '',
  nif: '',
  email: '',
  telefone: '',
  endereco: '',
  admin_nome: '',
  admin_email: '',
  admin_telefone: '',
  observacoes: '',
}

export default function CompanyRegistration() {
  const [form, setForm] = useState<RegisterForm>(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (key: keyof RegisterForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${API_URL}/api/empresas/cadastro_publico/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar solicitacao')
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError('Nao foi possivel enviar a solicitacao. Verifique os dados e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto grid min-h-screen max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <section className="space-y-7">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </a>

          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Cadastro publico
            </span>
            <h1 className="max-w-xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Solicite o registo da sua empresa no ElectroTime
            </h1>
            <p className="max-w-lg text-base leading-7 text-slate-600">
              O pedido segue para analise do Dono SaaS. Depois da aprovacao, a empresa recebe o acesso administrativo para configurar equipas, horarios e geofencing.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: Building2, label: 'Dados legais', text: 'NIF, contacto e endereco da empresa.' },
              { icon: ShieldCheck, label: 'Aprovacao SaaS', text: 'Fluxo pendente, aprovado ou rejeitado.' },
              { icon: Mail, label: 'Contacto direto', text: 'Responsavel indicado no pedido.' },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <Icon className="mb-3 h-5 w-5 text-blue-600" />
                <p className="text-sm font-semibold text-slate-950">{label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          {submitted ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-950">Solicitacao enviada</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Recebemos o pedido de registo. A equipa responsavel vai analisar os dados e contactar o email indicado.
              </p>
              <a href="/" className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                Voltar ao site
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-950">Dados para registo</h2>
                <p className="mt-1 text-sm text-slate-500">Preencha os campos obrigatorios para solicitar acesso.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome da empresa"><input required value={form.nome} onChange={(e) => update('nome', e.target.value)} className={inputClass} placeholder="Empresa, Lda" /></Field>
                <Field label="NIF"><input required value={form.nif} onChange={(e) => update('nif', e.target.value)} className={inputClass} placeholder="Numero fiscal" /></Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email da empresa"><input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} placeholder="empresa@dominio.ao" /></Field>
                <Field label="Telefone"><input required value={form.telefone} onChange={(e) => update('telefone', e.target.value)} className={inputClass} placeholder="+244 9XX XXX XXX" /></Field>
              </div>

              <Field label="Endereco"><input required value={form.endereco} onChange={(e) => update('endereco', e.target.value)} className={inputClass} placeholder="Rua, municipio, provincia" /></Field>

              <div className="border-t border-slate-100 pt-5">
                <h3 className="text-sm font-bold text-slate-950">Responsavel pelo acesso</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome do responsavel"><input required value={form.admin_nome} onChange={(e) => update('admin_nome', e.target.value)} className={inputClass} placeholder="Nome completo" /></Field>
                <Field label="Email do responsavel"><input required type="email" value={form.admin_email} onChange={(e) => update('admin_email', e.target.value)} className={inputClass} placeholder="admin@empresa.ao" /></Field>
              </div>

              <Field label="Telefone do responsavel"><input value={form.admin_telefone} onChange={(e) => update('admin_telefone', e.target.value)} className={inputClass} placeholder="+244 9XX XXX XXX" /></Field>

              <Field label="Observacoes"><textarea value={form.observacoes} onChange={(e) => update('observacoes', e.target.value)} rows={3} className={`${inputClass} h-auto resize-none py-3`} placeholder="Informacoes adicionais para analise" /></Field>

              {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

              <button type="submit" disabled={loading} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-60">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Phone className="h-4 w-4" />}
                Enviar solicitacao de registo
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-slate-700">{label}</span>
      {children}
    </label>
  )
}

const inputClass = 'h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15'
