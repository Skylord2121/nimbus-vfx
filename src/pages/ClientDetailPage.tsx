import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/Button'
import { VideoPreview } from '../components/Video'
import { clientProjects, getClient } from '../content/clients'
import { projects, type Project } from '../content/projects'

export function ClientDetailPage({ slug, onPlay }: { slug: string; onPlay: (project: Project) => void }) {
  const client = getClient(slug)

  if (!client) {
    return (
      <section className="not-found-page">
        <h1>Client not found.</h1>
        <Button href="/clients">Back to clients</Button>
      </section>
    )
  }

  const proof = projects.find((project) => project.slug === client.proofProjectSlug)
  const related = clientProjects(client.relatedProjectSlugs)

  return (
    <>
      <section className={`client-detail-hero ${client.theme}`}>
        <div className="client-detail-copy">
          <a className="back-link" href="/clients">
            <ArrowLeft size={17} />
            All clients
          </a>
          <p className="section-kicker">{client.company}</p>
          <h1>{client.company}: {client.headline}</h1>
          <p className="lead">{client.summary}</p>
          <div className="action-row">
            <Button href="#proof">Watch proof</Button>
            <Button href="/#audit" variant="ghost">
              Start audit
            </Button>
          </div>
        </div>
        <figure className="client-detail-image">
          <img src={client.portrait} alt={`${client.leader}, ${client.role} of ${client.company}`} />
          <figcaption>
            <b>{client.leader}, {client.role}</b>
            <span>{client.label}</span>
          </figcaption>
        </figure>
      </section>

      <section className="signal-grid" aria-label={`${client.company} proof signals`}>
        {client.signals.map((signal) => (
          <div key={signal.label}>
            <b>{signal.value}</b>
            <span>{signal.label}</span>
          </div>
        ))}
      </section>

      {client.chapters.map((chapter) => (
        <section className="case-chapter" key={chapter.title}>
          <h2>{chapter.title}</h2>
          <p>{chapter.copy}</p>
        </section>
      ))}

      <section className="work-section" id="proof">
        <div className="section-heading">
          <p className="section-kicker">Visible proof</p>
          <h2>The pieces that make the transformation tangible.</h2>
        </div>
        <div className="project-grid">
          {(related.length ? related : proof ? [proof] : []).map((project) => (
            <VideoPreview key={project.slug} project={project} onPlay={onPlay} />
          ))}
        </div>
      </section>

      <section className="page-cta calm-cta">
        <div>
          <h2>{client.company} shows the same pattern: proof gets stronger when it becomes a system.</h2>
          <p>{client.body}</p>
        </div>
        <Button href="/clients" variant="ghost">All transformations</Button>
      </section>
    </>
  )
}
