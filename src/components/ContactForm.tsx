import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', employees: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Fale com a nossa equipa
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Solicite uma demonstração gratuita e personalizada para a sua empresa.
              Respondemos em menos de 2 horas úteis.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'info@electrotime.ao' },
                { icon: Phone, label: 'Telefone', value: '+244 923 000 000' },
                { icon: MapPin, label: 'Morada', value: 'Luanda, Angola' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{label}</div>
                    <div className="text-sm font-semibold text-gray-800">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promise */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3">O que acontece a seguir?</h4>
              <ul className="space-y-2">
                {[
                  'Entramos em contacto em menos de 2 horas',
                  'Agendamos uma demo de 30 minutos personalizada',
                  'Configuramos o seu ambiente de teste gratuito',
                  'Acompanhamento durante os 30 dias de trial',
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pedido Enviado!</h3>
                <p className="text-gray-500">
                  Obrigado pelo seu interesse. A nossa equipa vai entrar em contacto em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Nome *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="O seu nome"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Empresa *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Nome da empresa"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@empresa.ao"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+244 9XX XXX XXX"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Nº de Funcionários *
                  </label>
                  <select
                    required
                    value={form.employees}
                    onChange={(e) => setForm({ ...form, employees: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="1-20">1 — 20 funcionários</option>
                    <option value="21-50">21 — 50 funcionários</option>
                    <option value="51-200">51 — 200 funcionários</option>
                    <option value="201-500">201 — 500 funcionários</option>
                    <option value="500+">Mais de 500 funcionários</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva as suas necessidades específicas..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Solicitar Demonstração Gratuita
                </button>

                <p className="text-xs text-center text-gray-400">
                  Ao submeter, aceita a nossa{' '}
                  <a href="#" className="text-blue-500 hover:underline">Política de Privacidade</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
