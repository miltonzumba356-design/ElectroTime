interface LogoProps {
  size?: number
  onDark?: boolean
  className?: string
  iconOnly?: boolean
}

export default function Logo({ size = 40, onDark = false, className = '', iconOnly = false }: LogoProps) {
  const imageSize = iconOnly ? size : Math.round(size * 2.7)

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/LOGOC (1).png"
        alt="ElectroTime"
        className={onDark ? 'drop-shadow-sm' : ''}
        style={{
          width: imageSize,
          height: size,
          objectFit: 'contain',
          objectPosition: 'left center',
          flexShrink: 0,
        }}
      />
    </div>
  )
}
