import { ArrowRight } from 'lucide-react'
import { BrandStrip } from '../components/BrandStrip'
import { Button } from '../components/Button'
import { VideoPreview } from '../components/Video'
import { clients } from '../content/clients'
import { projects, type Project } from '../content/projects'

export function ClientsPage({ onPlay }: { onPlay: (project: Project) => void }) {
  return (
    <>
      <section className="clients-hero">
        <div className="clients-hero-copy">
          <p className="section-kicker">Client systems</p>
          <h1>Client transformations with proof behind them.</h1>
          <p className="lead">
            Nimbus helps ambitious companies turn difficult ideas into clearer sales systems, sharper content, and visual proof people can understand fast.
          </p>
          <p>
            The strongest work is not a single deliverable. It is the operating layer where strategy, production, AI workflows, VFX, content, outreach, and proof start working together.
          </p>
          <div className="action-row">
            <Button href="/#audit" variant="ghost">
              Start growth audit
            </Button>
            <Button href="#client-transformations">View clients</Button>
          </div>
        </div>
        <div className="client-portrait-reel" aria-label="Featured client transformations">
          {clients.map((client, index) => (
            <a className={`portrait-tile ${index === 0 ? 'portrait-large' : ''}`} href={`/client-${client.slug}`} key={client.slug}>
              <img src={client.portrait} alt={`${client.leader} of ${client.company}`} />
              <span>
                <b>{client.company}</b>
                {client.label}
              </span>
              <em>
                Open <ArrowRight size={18} aria-hidden="true" />
              </em>
            </a>
          ))}
        </div>
      </section>

      <BrandStrip />

      <section className="client-index" id="client-transformations" aria-label="Client transformation cases">
        <div className="client-index-intro">
          <p className="section-kicker">Transformations</p>
          <h2>Three companies. Three proof systems.</h2>
          <p>
            Each story starts with a different kind of friction: a complex institutional vision, a luxury audience that moves fast, or a personal transformation offer that needs trust before action.
          </p>
        </div>

        {clients.map((client) => {
          const proof = projects.find((project) => project.slug === client.proofProjectSlug)
          return (
            <article className="client-panel" key={client.slug}>
              <div>{proof ? <VideoPreview project={proof} onPlay={onPlay} size="large" /> : null}</div>
              <div className="client-panel-copy">
                <div className="client-logo-line">
                  {client.mark ? <img src={client.mark} alt="" /> : client.logo ? <img src={client.logo} alt="" /> : null}
                  <span>{client.company}</span>
                </div>
                <p className="leader-line">
                  {client.leader}, {client.role}
                </p>
                <h3>{client.headline}</h3>
                <p className="lead">{client.summary}</p>
                <p>{client.body}</p>
                <ul className="shift-list">
                  {client.shifts.map((shift) => (
                    <li key={shift.label}>
                      <b>{shift.label}</b>
                      <span>{shift.copy}</span>
                    </li>
                  ))}
                </ul>
                <Button href={`/client-${client.slug}`}>View case</Button>
              </div>
            </article>
          )
        })}
      </section>

      <section className="operating-note">
        <div>
          <h2>The repeatable part is the operating system behind the work.</h2>
          <p>Nimbus diagnoses where the offer leaks, shapes the story buyers can understand, produces the proof assets, then connects the work to outreach and follow-up.</p>
        </div>
        <div className="term-row" aria-label="Nimbus operating system">
          <span>Diagnose leaks</span>
          <span>Shape belief</span>
          <span>Produce proof</span>
          <span>Connect demand</span>
        </div>
      </section>
    </>
  )
}
