import { asset } from '../lib/assets'

export type BrandLogo = {
  name: string
  src?: string
  mark?: string
  lockup?: string
}

export const navigation = [
  { label: 'Clients', href: '/clients' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#solution' },
  { label: 'Audit', href: '/#audit' },
]

export const mobileNavigation = [
  { label: 'Clients', href: '/clients', description: 'Flagship transformations and proof systems.' },
  { label: 'Projects', href: '/projects', description: 'Large previews of VFX, film, and content work.' },
  { label: 'About', href: '/#solution', description: 'How strategy, AI, production, and outreach connect.' },
  { label: 'Audit', href: '/#audit', description: 'Find the leak before building the campaign.' },
]

export const brandLogos: BrandLogo[] = [
  { name: 'Rolex', src: asset('brand-experience/rolex.png') },
  { name: 'Porsche', src: asset('brand-experience/porsche.png') },
  { name: 'TAG Heuer', src: asset('brand-experience/tag-heuer.png') },
  { name: 'Rebellion Timepieces', src: asset('brand-experience/rebellion-timepieces.png') },
  { name: 'Ultima', src: asset('brand-experience/ultima-gstaad.png') },
  { name: 'Greubel Forsey', src: asset('brand-experience/greubel-forsey.png') },
  { name: 'WatchAnish', src: asset('brand-experience/watchanish.png') },
  { name: 'From Thinking to Being', mark: asset('brand-experience/helene-mark.png'), lockup: 'FROM THINKING TO BEING' },
  { name: 'Intellibus', src: asset('brand-experience/intellibus.png') },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dcallaghanvfx/' },
  { label: 'X', href: 'https://x.com/Nimbus_vfx' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@nimbus_vfx' },
  { label: 'YouTube', href: 'https://www.youtube.com/@NimbusVFX' },
  { label: 'Instagram', href: 'https://www.instagram.com/nimbus.vfx/' },
]

export const contact = {
  email: 'Daniel@NimbusVFX.com',
  phone: '1-876-862-1778',
  phoneHref: 'tel:+18768621778',
  location: 'Kingston, Jamaica',
}
