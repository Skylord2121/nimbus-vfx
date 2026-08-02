import { useEffect, useState } from 'react'
import { AppShell } from './components/AppShell'
import { VideoModal, type ActiveVideo } from './components/Video'
import { resolveRoute } from './lib/router'
import { ClientDetailPage } from './pages/ClientDetailPage'
import { ClientsPage } from './pages/ClientsPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { ProjectsPage } from './pages/ProjectsPage'

function useRoute() {
  const [route, setRoute] = useState(() => resolveRoute(window.location.pathname))

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
      if (url.pathname === window.location.pathname && url.hash) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      setRoute(resolveRoute(url.pathname))
      window.scrollTo({ top: 0, behavior: 'instant' })
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

function RoutedPage({ openVideo }: { openVideo: (video: ActiveVideo) => void }) {
  const route = useRoute()

  if (route.name === 'home') return <HomePage />
  if (route.name === 'clients') return <ClientsPage onPlay={openVideo} />
  if (route.name === 'client') return <ClientDetailPage slug={route.slug} onPlay={openVideo} />
  if (route.name === 'projects') return <ProjectsPage onPlay={openVideo} />
  if (route.name === 'legal') return <LegalPage slug={route.slug} />

  return (
    <section className="not-found-page">
      <h1>This page is not built yet.</h1>
      <p>The React source is now the place this route should be added.</p>
      <a className="button button-dark" href="/">
        <span>Back home</span>
      </a>
    </section>
  )
}

export default function App() {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo>(null)

  return (
    <AppShell>
      <RoutedPage openVideo={setActiveVideo} />
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </AppShell>
  )
}
