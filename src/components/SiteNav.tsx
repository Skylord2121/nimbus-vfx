import { Menu, X } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { mobileNavigation, navigation } from '../content/brand'
import { Button } from './Button'

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-nav">
        <div className="site-nav-inner">
          <a className="wordmark" href="/" onClick={() => setOpen(false)}>
            Nimbus VFX
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <Button href="/#audit" variant="ghost">
              Start audit
            </Button>
            <button
              className="menu-toggle"
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {mobileNavigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ '--delay': `${index * 65}ms` } as CSSProperties}
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
