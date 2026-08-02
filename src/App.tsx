import { useEffect, useState } from 'react'
import { AppShell } from './components/AppShell'
import { normalizeLegacyPathname, resolveRoute } from './lib/router'
import { LegacyStaticPage } from './pages/LegacyStaticPage'

function useRoute() {
  const [route, setRoute] = useState(() => resolveRoute(window.location.pathname))

  useEffect(() => {
    if (!window.location.hash) return

    const hashTarget = decodeURIComponent(window.location.hash.slice(1))
    const timeout = window.setTimeout(() => {
      document.getElementById(hashTarget)?.scrollIntoView({ block: 'start', behavior: 'instant' })
    }, 0)

    return () => window.clearTimeout(timeout)
  }, [route])

  useEffect(() => {
    function handlePopState() {
      setRoute(resolveRoute(window.location.pathname))
    }

    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest('a') : null
      if (!(target instanceof HTMLAnchorElement)) return
      if (target.target || target.hasAttribute('download') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const url = new URL(target.href)
      if (url.origin !== window.location.origin) return
      const pathname = normalizeLegacyPathname(url.pathname)
      if (pathname === normalizeLegacyPathname(window.location.pathname) && url.hash) return

      event.preventDefault()
      window.history.pushState({}, '', `${pathname}${url.search}${url.hash}`)
      setRoute(resolveRoute(pathname))
      if (!url.hash) window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return route
}

function RoutedPage() {
  const route = useRoute()

  if (route.name === 'home') return <LegacyStaticPage pageKey="home" />
  if (route.name === 'clients') return <LegacyStaticPage pageKey="clients" />
  if (route.name === 'projects') return <LegacyStaticPage pageKey="projects" />
  if (route.name === 'client' && route.slug === 'intellibus') return <LegacyStaticPage pageKey="intellibus" />
  if (route.name === 'client' && route.slug === 'watchanish') return <LegacyStaticPage pageKey="watchanish" />
  if (route.name === 'client' && route.slug === 'helene') return <LegacyStaticPage pageKey="helene" />
  if (route.name === 'legal' && route.slug === 'privacy-policy') return <LegacyStaticPage pageKey="privacyPolicy" />
  if (route.name === 'legal' && route.slug === 'terms-of-use') return <LegacyStaticPage pageKey="termsOfUse" />
  if (route.name === 'legal' && route.slug === 'security') return <LegacyStaticPage pageKey="security" />
  if (route.name === 'legal' && route.slug === 'cookie-policy') return <LegacyStaticPage pageKey="cookiePolicy" />

  return (
    <AppShell>
      <section className="not-found-page">
        <h1>This page is not built yet.</h1>
        <p>The React source is now the place this route should be added.</p>
        <a className="button button-dark" href="/">
          <span>Back home</span>
        </a>
      </section>
    </AppShell>
  )
}

export default function App() {
  return <RoutedPage />
}
