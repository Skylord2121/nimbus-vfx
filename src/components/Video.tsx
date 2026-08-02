import { ExternalLink, Heart, Play, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { Project } from '../content/projects'
import { Button } from './Button'

export type ActiveVideo = Project | null

function compactNumber(value: number) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value)
}

function useLike(project: Project) {
  const key = `nimbus-like-${project.slug}`
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(project.likes)

  useEffect(() => {
    const stored = window.localStorage.getItem(key)
    if (stored === '1') {
      setLiked(true)
      setCount(project.likes + 1)
    } else {
      setLiked(false)
      setCount(project.likes)
    }
  }, [key, project.likes])

  function toggle() {
    setLiked((current) => {
      const next = !current
      window.localStorage.setItem(key, next ? '1' : '0')
      setCount(project.likes + (next ? 1 : 0))
      return next
    })
  }

  return { liked, count, toggle }
}

export function VideoPreview({ project, onPlay, size = 'standard' }: { project: Project; onPlay: (project: Project) => void; size?: 'standard' | 'large' }) {
  const { liked, count, toggle } = useLike(project)

  return (
    <article className={`video-card video-card-${size}`}>
      <button className="video-thumb" type="button" onClick={() => onPlay(project)} aria-label={`Play ${project.title}`}>
        <img src={project.thumbnail} alt={`${project.title} preview`} />
        <span className="play-token" aria-hidden="true">
          <Play size={24} fill="currentColor" />
        </span>
      </button>
      <div className="video-meta">
        <span>{project.client}</span>
        <h3>{project.title}</h3>
        <p>{project.proof}</p>
        <div className="video-actions">
          <button className={`like-button ${liked ? 'is-liked' : ''}`} type="button" onClick={toggle} aria-pressed={liked}>
            <Heart size={17} fill={liked ? 'currentColor' : 'none'} />
            {compactNumber(count)}
          </button>
          <button className="text-action" type="button" onClick={() => onPlay(project)}>
            Watch
          </button>
        </div>
      </div>
    </article>
  )
}

export function VideoModal({ video, onClose }: { video: ActiveVideo; onClose: () => void }) {
  const isOpen = Boolean(video)
  const { liked, count, toggle } = useLike(
    video ?? {
      slug: 'empty',
      title: '',
      client: '',
      category: '',
      proof: '',
      thumbnail: '',
      sourceHref: '#',
      likes: 0,
    },
  )
  const embed = useMemo(() => video?.embedHref, [video])

  useEffect(() => {
    if (!isOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('modal-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
    }
  }, [isOpen, onClose])

  if (!video) return null

  return (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${video.title} player`}>
      <button className="video-modal-backdrop" type="button" aria-label="Close video" onClick={onClose} />
      <div className="video-modal-shell">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close video">
          <X size={22} />
        </button>
        <div className="video-frame">
          {embed ? (
            <iframe title={video.title} src={embed} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <img src={video.thumbnail} alt={`${video.title} preview`} />
          )}
        </div>
        <div className="video-modal-copy">
          <div>
            <span>{video.client}</span>
            <h2>{video.title}</h2>
            <p>{video.proof}</p>
          </div>
          <div className="video-modal-actions">
            <button className={`like-button ${liked ? 'is-liked' : ''}`} type="button" onClick={toggle} aria-pressed={liked}>
              <Heart size={17} fill={liked ? 'currentColor' : 'none'} />
              {compactNumber(count)}
            </button>
            <a className="source-link" href={video.sourceHref} target="_blank" rel="noreferrer">
              Open source
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EmptyVideoCta() {
  return <Button href="/projects">View portfolio</Button>
}
