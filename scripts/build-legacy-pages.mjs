import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, '')
const legacyRoot = join(appRoot, '..', 'deploy', 'nimbus-vfx')
const outputPath = join(appRoot, 'src', 'legacy', 'generatedPages.ts')

const pages = {
  home: 'index.html',
  clients: 'clients.html',
  projects: 'projects.html',
  intellibus: 'client-intellibus.html',
  watchanish: 'client-watchanish.html',
  helene: 'client-helene.html',
  privacyPolicy: 'privacy-policy.html',
  termsOfUse: 'terms-of-use.html',
  security: 'security.html',
  cookiePolicy: 'cookie-policy.html',
}

function extractAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'))
  return match ? match[1] : ''
}

function normalizeStylesheetHref(href) {
  if (!href || href.startsWith('http') || href.startsWith('/')) return href
  return `/${href}`
}

function normalizeAssetReferences(markup) {
  return markup
    .replace(/(["'`])assets\//g, '$1/assets/')
    .replace(/url\((["']?)assets\//g, 'url($1/assets/')
}

function extractPage(html, sourceFile) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? 'Nimbus VFX'
  const bodyTag = html.match(/<body([^>]*)>/i)?.[1] ?? ''
  const bodyClass = extractAttribute(bodyTag, 'class')
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)

  if (!bodyMatch) {
    throw new Error(`Could not find body markup in ${sourceFile}`)
  }

  const styles = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((match) =>
    normalizeAssetReferences(match[1]),
  )
  const stylesheetHrefs = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => /rel=["']stylesheet["']/i.test(tag))
    .map((tag) => normalizeStylesheetHref(extractAttribute(tag, 'href')))
    .filter(Boolean)

  const scripts = []
  const body = normalizeAssetReferences(
    bodyMatch[1].replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (_, script) => {
      if (script.trim()) scripts.push(normalizeAssetReferences(script))
      return ''
    }),
  )

  return {
    title,
    bodyClass,
    styles,
    stylesheetHrefs,
    body,
    scripts,
  }
}

const generated = {}

for (const [key, file] of Object.entries(pages)) {
  const html = await readFile(join(legacyRoot, file), 'utf8')
  generated[key] = extractPage(html, file)
}

const file = `export type LegacyPageKey = ${Object.keys(pages)
  .map((key) => JSON.stringify(key))
  .join(' | ')}

export type LegacyPage = {
  title: string
  bodyClass: string
  stylesheetHrefs: string[]
  styles: string[]
  body: string
  scripts: string[]
}

export const legacyPages: Record<LegacyPageKey, LegacyPage> = ${JSON.stringify(generated, null, 2)}
`

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, file)
