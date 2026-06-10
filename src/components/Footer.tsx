import { Mail, Phone, MapPin, Globe, MessageCircle, Share2, Send } from 'lucide-react'
import Logo from './Logo'

const links = {
  produto: [
    { label: 'Controlo Horário', href: '#products' },
    { label: 'Gestão de Tempo', href: '#products' },
    { label: 'Gestão de Férias', href: '#products' },
    { label: 'Relatórios', href: '#features' },
    { label: 'Integrações', href: '#features' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Parceiros', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Imprensa', href: '#' },
  ],
  suporte: [
    { label: 'Centro de Ajuda', href: '#' },
    { label: 'Documentação', href: '#' },
    { label: 'Estado do Sistema', href: '#' },
    { label: 'Contacto', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center mb-4">
              <Logo size={54} onDark />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              A solução líder em Angola para controlo de assiduidade e gestão de tempo de trabalho.
              Simples, fiável e escalável.
            </p>

            <div className="space-y-2.5">
              {[
                { icon: Mail, text: 'info@electrotime.ao' },
                { icon: Phone, text: '+244 923 000 000' },
                { icon: MapPin, text: 'Luanda, Angola' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-slate-400">
                  <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h4>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ElectroTime. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Globe, href: '#' },
              { icon: MessageCircle, href: '#' },
              { icon: Share2, href: '#' },
              { icon: Send, href: '#' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href + Icon.displayName}
                href={href}
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
