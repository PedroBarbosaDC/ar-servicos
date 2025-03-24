import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = 'w-20 h-20' }: LogoProps) {
  return (
    <img
      src="/logo.jpg"
      alt="AR Serviços Ambientais Logo"
      className={className}
    />
  )
} 