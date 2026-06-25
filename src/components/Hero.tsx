import { useEffect, useRef, useState } from 'react'

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4.08 23.87a2.3 2.3 0 0 0 2.47-.22l13.1-7.56-3.02-3.02L4.08 23.87z" fill="#EA4335" />
      <path d="M20.6 10.3 17.65 8.6l-3.38 3.38 3.38 3.38 2.97-1.71a1.77 1.77 0 0 0-.02-3.35z" fill="#FBBC05" />
      <path d="M4.08.13A2.3 2.3 0 0 0 2 2.43v19.14a2.3 2.3 0 0 0 2.08 2.3L16.63 12 4.08.13z" fill="#4285F4" />
      <path d="M16.63 12 4.08.13A2.3 2.3 0 0 1 5.7.03l14.9 8.57L16.63 12z" fill="#34A853" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ── Full-screen video hero ── */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          src="/demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Bottom gradient → white */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

        {/* ── Content — bottom left ── */}
        <div
          className="absolute bottom-0 left-0 pb-20 px-8 sm:px-14 lg:px-20 max-w-xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Brand label */}
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">
            ElectroTime
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            O seu assistente de<br />gestão de tempo
          </h1>

          {/* Description */}
          <p className="text-base text-white/70 leading-relaxed mb-8">
            Controle ponto, férias e assiduidade da sua equipa — de qualquer lugar, em qualquer dispositivo.
          </p>

          {/* Store buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Google Play */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black/80 hover:bg-black border border-white/15 backdrop-blur-sm text-white rounded-xl px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <GooglePlayIcon className="w-6 h-6 shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-white/60 font-medium">Disponível no</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black/80 hover:bg-black border border-white/15 backdrop-blur-sm text-white rounded-xl px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <AppleIcon className="w-6 h-6 shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-white/60 font-medium">Baixe na</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
