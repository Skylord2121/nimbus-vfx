export type Route =
  | { name: 'home' }
  | { name: 'clients' }
  | { name: 'client'; slug: string }
  | { name: 'projects' }
  | { name: 'legal'; slug: string }
  | { name: 'not-found' }

export function resolveRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/') return { name: 'home' }
  if (path === '/clients') return { name: 'clients' }
  if (path === '/projects' || path === '/portfolio') return { name: 'projects' }
  if (path === '/client-intellibus') return { name: 'client', slug: 'intellibus' }
  if (path === '/client-watchanish') return { name: 'client', slug: 'watchanish' }
  if (path === '/client-helene') return { name: 'client', slug: 'helene' }
  if (path === '/privacy-policy') return { name: 'legal', slug: 'privacy-policy' }
  if (path === '/terms-of-use') return { name: 'legal', slug: 'terms-of-use' }
  if (path === '/security') return { name: 'legal', slug: 'security' }
  if (path === '/cookie-policy') return { name: 'legal', slug: 'cookie-policy' }

  return { name: 'not-found' }
}
