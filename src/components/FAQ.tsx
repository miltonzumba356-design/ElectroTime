import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'O que é o ElectroTime?',
    a: 'ElectroTime é um software de gestão de tempo e assiduidade que permite às empresas controlar as entradas e saídas dos colaboradores, gerir férias e ausências, e obter relatórios detalhados sobre horas trabalhadas — tudo numa plataforma simples e intuitiva.',
  },
  {
    q: 'Quanto custa o ElectroTime?',
    a: 'O ElectroTime tem o preço de 1.050 Kz por funcionário por mês no plano Business. Oferecemos também um plano Starter para pequenas equipas e uma solução Enterprise para grandes organizações. Todos os planos incluem 30 dias de teste gratuito.',
  },
  {
    q: 'Como funciona a marcação de ponto?',
    a: 'Os colaboradores podem marcar ponto através da app móvel (iOS e Android), do portal web, ou de terminais físicos com suporte a biometria, cartão ou PIN. A marcação por geolocalização está disponível para trabalho remoto e estaleiros.',
  },
  {
    q: 'O ElectroTime integra com outros sistemas?',
    a: 'Sim. O ElectroTime integra com os principais sistemas de ERP e payroll do mercado angolano. Disponibilizamos também uma API REST para integrações personalizadas com qualquer sistema existente na sua empresa.',
  },
  {
    q: 'Os dados dos colaboradores estão seguros?',
    a: 'Absolutamente. Todos os dados são encriptados em repouso e em trânsito. Os nossos servidores estão em conformidade com o RGPD e as leis de proteção de dados angolanas. Realizamos backups automáticos diários com retenção de 90 dias.',
  },
  {
    q: 'Quanto tempo demora a implementação?',
    a: 'A maioria das empresas está operacional em menos de 48 horas. Oferecemos suporte de onboarding dedicado, importação de dados de sistemas anteriores e formação para a equipa de RH.',
  },
  {
    q: 'É possível gerir equipas em múltiplas localizações?',
    a: 'Sim. O ElectroTime foi desenhado para suportar empresas com múltiplas sedes, estaleiros ou equipas remotas. Pode configurar regras de assiduidade e aprovação diferentes por localização ou departamento.',
  },
  {
    q: 'Existe app para Android e iPhone?',
    a: 'Sim, temos apps nativas para iOS e Android, disponíveis gratuitamente na App Store e Google Play. A app permite marcação de ponto, pedidos de férias, consulta de registos e notificações em tempo real.',
  },
  {
    q: 'Qual o tamanho mínimo de empresa para usar o ElectroTime?',
    a: 'O ElectroTime é adequado para empresas de qualquer dimensão, desde 5 colaboradores até grandes corporações com milhares de funcionários. O nosso plano Starter é ideal para pequenas equipas.',
  },
  {
    q: 'Como é o suporte ao cliente?',
    a: 'Oferecemos suporte por email para todos os planos, suporte prioritário com resposta em 4h para o plano Business, e gestor de conta dedicado para o plano Enterprise. Disponibilizamos também uma base de conhecimento completa e tutoriais em vídeo.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-500">
            Não encontra a resposta? Entre em contacto connosco.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 ${
                open === i ? 'border-blue-200 shadow-md' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
