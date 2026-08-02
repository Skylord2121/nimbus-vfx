import { asset } from '../lib/assets'

export type Project = {
  slug: string
  title: string
  client: string
  category: string
  proof: string
  thumbnail: string
  sourceHref: string
  embedHref?: string
  likes: number
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'vision-of-nirvana',
    title: 'The Vision of Nirvana',
    client: 'Intellibus',
    category: 'AI vision film',
    proof: 'A cinematic world that makes an institutional AI vision easier to understand before the sales conversation begins.',
    thumbnail: asset('work-thumbnails/nirvana.webp'),
    sourceHref: 'https://www.youtube.com/watch?v=HZ5BYQVj3t8&t=63s',
    embedHref: 'https://www.youtube.com/embed/HZ5BYQVj3t8?start=63&autoplay=1&rel=0',
    likes: 1208,
    featured: true,
  },
  {
    slug: 'jet-ski-vfx-ultima',
    title: 'Jet Ski VFX / Ultima',
    client: 'WatchAnish',
    category: 'Luxury VFX',
    proof: '3D jet ski and water simulation work that turns premium travel content into a high-retention visual hook.',
    thumbnail: asset('work-thumbnails/jet-ski-vfx-ultima.jpg'),
    sourceHref: 'https://vm.tiktok.com/ZMrmmqvhB/',
    embedHref: 'https://www.tiktok.com/embed/v2/6938294201461312774',
    likes: 85200,
    featured: true,
  },
  {
    slug: 'helene-being-present',
    title: 'The Art of Being Present',
    client: 'From Thinking to Being',
    category: 'Founder proof',
    proof: 'A calm public proof asset that helps a personal transformation practice feel safe, precise, and easier to enter.',
    thumbnail: asset('brand-experience/helene-youtube-art-being-present.jpg'),
    sourceHref: 'https://www.youtube.com/watch?v=gaMbzxUfxEI',
    embedHref: 'https://www.youtube.com/embed/gaMbzxUfxEI?autoplay=1&rel=0',
    likes: 342,
    featured: true,
  },
  {
    slug: 'tag-porsche-racing-orange',
    title: 'TAG Heuer x Porsche Racing Orange',
    client: 'WatchAnish',
    category: 'Product spectacle',
    proof: 'A branded watch moment built around speed, color, and immediate premium recognition.',
    thumbnail: asset('work-thumbnails/tag-porsche-racing-orange.jpg'),
    sourceHref: 'https://www.instagram.com/nimbus.vfx/',
    likes: 47600,
  },
  {
    slug: 'greubel-forsey-around-world',
    title: 'Greubel Forsey Around The World',
    client: 'WatchAnish',
    category: 'Product storytelling',
    proof: 'High-end watch storytelling with enough visual scale to make the object feel collectible before the caption explains it.',
    thumbnail: asset('work-thumbnails/greubel-forsey-around-world-ad.jpg'),
    sourceHref: 'https://www.instagram.com/nimbus.vfx/',
    likes: 39300,
  },
  {
    slug: 'ultima-gstaad-teleportation',
    title: 'Ultima Gstaad Teleportation',
    client: 'WatchAnish',
    category: 'Travel VFX',
    proof: 'Luxury destination content treated like a visual portal, built for fast attention without losing taste.',
    thumbnail: asset('work-thumbnails/ultima-gstaad-teleportation.jpg'),
    sourceHref: 'https://www.instagram.com/nimbus.vfx/',
    likes: 68400,
  },
  {
    slug: 'bahrain-car-collection',
    title: 'Bahrain Car Collection',
    client: 'WatchAnish',
    category: 'Automotive luxury',
    proof: 'Cars, watches, and collector spaces composed as proof of access and taste.',
    thumbnail: asset('work-thumbnails/bahrain-car-collection.jpg'),
    sourceHref: 'https://www.instagram.com/nimbus.vfx/',
    likes: 42100,
  },
  {
    slug: 'tag-heuer-mario-kart',
    title: 'TAG Heuer Mario Kart',
    client: 'WatchAnish',
    category: 'Branded VFX',
    proof: 'A playful brand-culture collision built to make the product moment travel faster.',
    thumbnail: asset('work-thumbnails/tag-heuer-mario-kart.jpg'),
    sourceHref: 'https://www.instagram.com/nimbus.vfx/',
    likes: 58800,
  },
  {
    slug: 'rick-ross-fake-watch',
    title: 'Rick Ross Fake Watch',
    client: 'WatchAnish',
    category: 'Social proof',
    proof: 'A fast cultural hook framed for debate, shareability, and watch-world relevance.',
    thumbnail: asset('work-thumbnails/rick-ross-fake-watch.jpg'),
    sourceHref: 'https://www.instagram.com/nimbus.vfx/',
    likes: 73500,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
