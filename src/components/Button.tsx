import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'dark' | 'light' | 'ghost'
  className?: string
}

export function Button({ href, children, variant = 'dark', className = '' }: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={20} strokeWidth={2.2} />
    </a>
  )
}
