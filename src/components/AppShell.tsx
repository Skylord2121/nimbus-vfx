import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { SiteNav } from './SiteNav'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
