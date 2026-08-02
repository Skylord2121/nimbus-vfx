import { ArrowRight } from 'lucide-react'
import { BrandStrip } from '../components/BrandStrip'
import { Button } from '../components/Button'
import { auditItems, heroCapabilities, problemItems, proofLanes, solutionItems, testimonials } from '../content/home'
import { clients } from '../content/clients'

export function HomePage() {
  return (
    <>
      <section className="home-section home-hero bg-hero" aria-labelledby="home-title">
        <div className="home-panel center-panel">
          <p className="section-kicker">AI marketing and build studio</p>
          <h1 id="home-title">
            Marketing and sales <span className="natural-mark">systems</span> powered by AI.
          </h1>
          <p className="lead">
            Nimbus helps founder-led companies find better clients, build stronger proof, and sell through clearer outreach, content, VFX, and AI workflows.
          </p>
          <div className="action-row">
            <Button href="#audit">Find my growth leak</Button>
            <Button href="#solution" variant="ghost">
              See the system
            </Button>
          </div>
        </div>
        <div className="hero-capabilities" aria-label="Nimbus capabilities">
          {heroCapabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <BrandStrip />

      <section className="home-section split-section bg-problem" id="problem" aria-labelledby="problem-title">
        <div className="section-copy">
          <p className="section-kicker">The problem</p>
          <h2 id="problem-title">
            Most growth is <span className="natural-underline">leaking</span> before sales ever begins.
          </h2>
          <p className="lead">
            The audience exists. The offer might be strong. But the path from attention to trust to action is often broken in small places.
          </p>
          <div className="action-row">
            <Button href="#audit">Find the leak</Button>
            <Button href="#solution" variant="ghost">
              See the fix
            </Button>
          </div>
        </div>
        <div className="number-list" aria-label="Common growth leaks">
          {problemItems.map((item, index) => (
            <article key={item.title}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section solution-section bg-solution" id="solution" aria-labelledby="solution-title">
        <div className="center-panel">
          <p className="section-kicker">The solution</p>
          <h2 id="solution-title">
            Nimbus builds the system around the <span className="natural-underline">sale</span>.
          </h2>
          <p className="lead">
            Strategy, production, AI workflows, outreach, and proof are built as one operating layer instead of scattered deliverables.
          </p>
        </div>
        <div className="solution-grid">
          {solutionItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="action-row centered-actions">
          <Button href="#proof">Explore the proof</Button>
          <Button href="#audit" variant="ghost">
            Audit my system
          </Button>
        </div>
      </section>

      <section className="home-section split-section bg-proof" id="proof" aria-labelledby="proof-title">
        <div className="section-copy">
          <p className="section-kicker">Proof and portfolio</p>
          <h2 id="proof-title">
            The work has to make the idea <span className="natural-underline">easier</span> to believe.
          </h2>
          <p className="lead">
            The proof is in the range: an Intellibus vision film, WatchAnish luxury content, TAG Heuer x Porsche VFX, Greubel Forsey storytelling, and Ultima concepts built around spectacle.
          </p>
          <div className="action-row">
            <Button href="/clients">Client Case Studies</Button>
            <Button href="/projects" variant="ghost">
              View Portfolio
            </Button>
          </div>
        </div>
        <div className="number-list proof-list" aria-label="Proof lanes">
          {proofLanes.map((lane, index) => (
            <a href="/projects" key={lane.title}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <span>
                <strong>{lane.title}</strong>
                {lane.copy}
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="home-section trust-section" id="testimonials" aria-labelledby="trust-title">
        <div className="center-panel">
          <p className="section-kicker">Trust</p>
          <h2 id="trust-title">
            People <span className="natural-underline">remember</span> the work when it makes the idea easier to buy.
          </h2>
        </div>
        <div className="testimonial-row">
          {testimonials.map((testimonial) => {
            const client = clients.find((item) => item.company === testimonial.company)
            return (
              <article key={testimonial.name}>
                {client ? <img src={client.portrait} alt={testimonial.name} /> : null}
                <p>"{testimonial.quote}"</p>
                <div>
                  <b>{testimonial.name}</b>
                  <span>{testimonial.company}</span>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="home-section split-section dark-section bg-action" id="audit" aria-labelledby="audit-title">
        <div className="section-copy">
          <p className="section-kicker">Action</p>
          <h2 id="audit-title">
            Start with the AI Growth <span className="natural-underline">Audit</span>.
          </h2>
          <p className="lead">
            Before we sell you a campaign, we find the leak. The audit shows where your growth system is strongest, where it is stuck, and what Nimbus should build first.
          </p>
          <div className="action-row">
            <Button href="#close" variant="light">
              Open the audit
            </Button>
            <Button href="#proof" variant="ghost">
              Review proof first
            </Button>
          </div>
        </div>
        <div className="number-list audit-list" aria-label="Audit diagnostic preview">
          {auditItems.map((item, index) => (
            <article key={item.title}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section close-section bg-close" id="close" aria-labelledby="close-title">
        <div className="center-panel">
          <p className="section-kicker">Close</p>
          <h2 id="close-title">
            Your next client is not hiding. Your system needs to reach them <span className="natural-underline">clearly</span>.
          </h2>
          <p className="lead">
            Nimbus helps you find better clients, build the assets that earn trust, and run the outreach that turns interest into conversations.
          </p>
          <div className="action-row centered-actions">
            <Button href="#audit">Start the AI Growth Audit</Button>
            <Button href="#proof" variant="ghost">
              Review the proof
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
