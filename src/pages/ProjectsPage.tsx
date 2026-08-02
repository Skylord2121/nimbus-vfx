import { useMemo, useState } from 'react'
import { BrandStrip } from '../components/BrandStrip'
import { Button } from '../components/Button'
import { VideoPreview } from '../components/Video'
import { featuredProjects, projects, type Project } from '../content/projects'

const filters = ['All', 'AI vision film', 'Luxury VFX', 'Founder proof', 'Product spectacle', 'Product storytelling', 'Travel VFX']

export function ProjectsPage({ onPlay }: { onPlay: (project: Project) => void }) {
  const [filter, setFilter] = useState('All')
  const visibleProjects = useMemo(() => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)), [filter])
  const spotlight = featuredProjects[0]

  return (
    <>
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="portfolio-copy">
          <p className="section-kicker">Portfolio</p>
          <h1 id="portfolio-title">Proof you can watch.</h1>
          <p className="lead">
            Large previews of the films, VFX, luxury content, and founder proof that help Nimbus turn attention into belief.
          </p>
          <div className="action-row">
            <Button href="#work">View portfolio</Button>
            <Button href="/clients" variant="ghost">
              Client Case Studies
            </Button>
          </div>
        </div>
        {spotlight ? (
          <div className="spotlight-card">
            <VideoPreview project={spotlight} onPlay={onPlay} size="large" />
          </div>
        ) : null}
      </section>

      <BrandStrip />

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Flagship work</p>
          <h2>Give the work enough size to sell itself.</h2>
          <p>Each preview is built to be watched, liked, filtered, and opened without burying the proof under too much copy.</p>
        </div>

        <div className="filter-bar" aria-label="Project filters">
          {filters.map((item) => (
            <button className={item === filter ? 'is-active' : ''} key={item} type="button" onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="project-grid project-grid-large">
          {visibleProjects.map((project, index) => (
            <VideoPreview key={project.slug} project={project} onPlay={onPlay} size={index < 2 ? 'large' : 'standard'} />
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div>
          <h2>Need the portfolio to become a sales system?</h2>
          <p>Nimbus connects the work to offer strategy, outreach, AI follow-up, and buyer proof so people do more than admire the visuals.</p>
        </div>
        <Button href="/#audit">Start audit</Button>
      </section>
    </>
  )
}
