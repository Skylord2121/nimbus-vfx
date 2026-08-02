import { Button } from '../components/Button'
import { getLegalPage } from '../content/legal'

export function LegalPage({ slug }: { slug: string }) {
  const page = getLegalPage(slug)

  if (!page) {
    return (
      <section className="not-found-page">
        <h1>Page not found.</h1>
        <Button href="/">Back home</Button>
      </section>
    )
  }

  return (
    <article className="legal-page">
      <header>
        <p className="section-kicker">Nimbus VFX</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <span>Last updated: {page.updated}</span>
      </header>
      <div className="legal-layout">
        <nav aria-label="Legal pages">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/security">Security</a>
          <a href="/cookie-policy">Cookie Policy</a>
        </nav>
        <div className="legal-sections">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
