import { asset } from '../lib/assets'
import { projects, type Project } from './projects'

export type Client = {
  slug: string
  company: string
  leader: string
  role: string
  label: string
  portrait: string
  logo?: string
  mark?: string
  theme: string
  headline: string
  summary: string
  body: string
  proofProjectSlug: string
  signals: { value: string; label: string }[]
  shifts: { label: string; copy: string }[]
  chapters: { title: string; copy: string }[]
  relatedProjectSlugs: string[]
}

export const clients: Client[] = [
  {
    slug: 'intellibus',
    company: 'Intellibus',
    leader: 'Ed Watal',
    role: 'CEO',
    label: 'Institutional AI vision',
    portrait: asset('brand-experience/ed-watal-aibusiness-hd.webp'),
    logo: asset('brand-experience/intellibus.png'),
    mark: asset('brand-experience/intellibus-mark.png'),
    theme: 'client-theme-green',
    headline: 'Making an institutional AI vision easier to believe.',
    summary:
      'Intellibus needed more than an explainer. The story had to make AI, innovation, nature, education, and institutional ambition feel like one coherent world.',
    body:
      'Nimbus built a cinematic proof film that let serious audiences feel the scale of the vision before the deeper business conversation began.',
    proofProjectSlug: 'vision-of-nirvana',
    signals: [
      { value: 'AI', label: 'institutional category' },
      { value: 'Film', label: 'flagship proof asset' },
      { value: 'Vision', label: 'core belief system' },
    ],
    shifts: [
      { label: 'Problem', copy: 'The vision was too expansive to be understood through normal sales copy alone.' },
      { label: 'Nimbus built', copy: 'A flagship proof film with a clear visual world, sequence, and emotional logic.' },
      { label: 'Shift', copy: 'The idea became easier to explain before a buyer entered the deeper conversation.' },
    ],
    chapters: [
      {
        title: 'The vision had gravity, but gravity alone does not make buyers believe.',
        copy:
          'The work needed to turn a complex future-facing idea into something people could see, feel, and repeat. Nimbus treated the film as a belief asset, not just a content deliverable.',
      },
      {
        title: 'We turned the idea into a cinematic path people could follow.',
        copy:
          'The proof film connected institutional ambition to a visible world: learning, nature, technology, and possibility moving together instead of competing for attention.',
      },
      {
        title: 'The strongest win was making the vision easier to hold.',
        copy:
          'The result gave the business a clearer story container, making the idea easier to introduce before the technical and commercial details took over.',
      },
    ],
    relatedProjectSlugs: ['vision-of-nirvana'],
  },
  {
    slug: 'watchanish',
    company: 'WatchAnish',
    leader: 'Anish Bhatt',
    role: 'CEO',
    label: 'Luxury content engine',
    portrait: asset('brand-experience/watch-anish-photo-hd.jpg'),
    mark: asset('brand-experience/watchanish-mark.png'),
    logo: asset('brand-experience/watchanish.png'),
    theme: 'client-theme-graphite',
    headline: 'Turning luxury attention into a repeatable content engine.',
    summary:
      'WatchAnish needed content that could move fast without losing the premium feel of the watch world.',
    body:
      'Nimbus helped turn watches, cars, destinations, celebrities, boutiques, and collector moments into short-form proof with immediate visual hooks.',
    proofProjectSlug: 'jet-ski-vfx-ultima',
    signals: [
      { value: '85K+', label: 'seeded platform likes' },
      { value: 'Luxury', label: 'watch and travel context' },
      { value: 'VFX', label: 'attention hook system' },
    ],
    shifts: [
      { label: 'Problem', copy: 'Premium objects needed sharper hooks to travel across fast social feeds.' },
      { label: 'Nimbus built', copy: 'A repeatable VFX-led language for watches, luxury spaces, cars, and collector culture.' },
      { label: 'Shift', copy: 'The work became a library of watchable proof, from six-figure pieces to flagship luxury lanes.' },
    ],
    chapters: [
      {
        title: 'Luxury content has to be fast enough for social, but tasteful enough for the brand.',
        copy:
          'The challenge was not simply making watches look expensive. It was making each moment instantly legible without flattening the craft, access, and collector culture behind it.',
      },
      {
        title: 'We built a content grammar for luxury objects people want to watch.',
        copy:
          'The system used VFX, motion, destinations, and object drama to create immediate hooks that still felt aligned with the audience and category.',
      },
      {
        title: 'The win is a library of proof that shows range, speed, and taste.',
        copy:
          'Instead of isolated posts, the work becomes a repeatable library that proves the brand can carry spectacle, story, and product clarity at the same time.',
      },
    ],
    relatedProjectSlugs: [
      'jet-ski-vfx-ultima',
      'tag-porsche-racing-orange',
      'greubel-forsey-around-world',
      'ultima-gstaad-teleportation',
      'bahrain-car-collection',
      'tag-heuer-mario-kart',
      'rick-ross-fake-watch',
    ],
  },
  {
    slug: 'helene',
    company: 'From Thinking to Being',
    leader: 'Helene Verheije',
    role: 'CEO',
    label: 'Founder-led trust system',
    portrait: asset('brand-experience/helene-photo-hd.jpg'),
    mark: asset('brand-experience/helene-mark.png'),
    theme: 'client-theme-sage',
    headline: 'Giving a founder-led transformation practice a clearer commercial shape.',
    summary:
      'From Thinking to Being needed calm, precise language for a personal transformation practice where trust arrives before the sale.',
    body:
      'Nimbus shaped the offer and proof around clarity, presence, and emotional safety so the work could feel easier to enter from the outside.',
    proofProjectSlug: 'helene-being-present',
    signals: [
      { value: 'Trust', label: 'primary buying condition' },
      { value: 'Presence', label: 'method made legible' },
      { value: 'Offer', label: 'clearer commercial path' },
    ],
    shifts: [
      { label: 'Problem', copy: 'A deeply personal method needed to become legible without becoming generic.' },
      { label: 'Nimbus built', copy: 'Clearer offer architecture, calmer positioning, and buyer-facing transformation language.' },
      { label: 'Shift', copy: 'The company could present the work with more confidence, premium clarity, and emotional precision.' },
    ],
    chapters: [
      {
        title: 'The public videos already carry trust. The system gives each one a job.',
        copy:
          'Helene has the presence and proof. Nimbus is shaping the way those assets work together so a buyer can understand the promise, the tone, and the next step faster.',
      },
      {
        title: 'The offer needs to feel calm before it asks for action.',
        copy:
          'For personal transformation, the first sale is safety. The language, page rhythm, proof sequence, and call to action need to feel grounded before they feel persuasive.',
      },
      {
        title: 'The result is less noise and more belief.',
        copy:
          'The transformation system gives From Thinking to Being a clearer bridge between founder energy, public proof, and a premium client path.',
      },
    ],
    relatedProjectSlugs: ['helene-being-present'],
  },
]

export function getClient(slug: string) {
  return clients.find((client) => client.slug === slug)
}

export function clientProjects(slugs: string[]) {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))
}
