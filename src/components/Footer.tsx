import { ExternalLink } from 'lucide-react'
import { contact, socials } from '../content/brand'
import { Button } from './Button'

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Clients', href: '/clients' },
      { label: 'Portfolio', href: '/projects' },
      { label: 'Studio', href: '/#solution' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Client Case Studies', href: '/clients' },
      { label: 'View Portfolio', href: '/projects' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'Proof', href: '/#proof' },
    ],
  },
  {
    title: 'Audit',
    links: [
      { label: 'Overview', href: '/#audit' },
      { label: 'What We Review', href: '/#audit' },
      { label: 'Sample Report', href: '/#audit' },
      { label: 'Book a Call', href: '/#audit' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-labelledby="footer-title">
        <div>
          <h2 id="footer-title">Build the system buyers can believe.</h2>
          <p>Nimbus VFX turns complex offers into clearer proof, sharper outreach, stronger content, and AI-powered sales motion.</p>
        </div>
        <Button href="/#audit">Start audit</Button>
      </section>

      <div className="footer-main">
        <section className="footer-brand" aria-label="Nimbus VFX">
          <a className="wordmark" href="/">
            Nimbus VFX
          </a>
          <p>Clarity. Credibility. Conversion.</p>
        </section>

        {footerGroups.map((group) => (
          <section className="footer-col" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a key={link.href + link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </section>
        ))}

        <section className="footer-col footer-contact">
          <h3>Let's Talk</h3>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <p>{contact.location}</p>
        </section>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Nimbus VFX. All rights reserved.</span>
        <nav aria-label="Legal links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/security">Security</a>
          <a href="/cookie-policy">Cookie</a>
        </nav>
        <nav className="footer-social" aria-label="Social links">
          {socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
              <ExternalLink aria-hidden="true" size={13} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
