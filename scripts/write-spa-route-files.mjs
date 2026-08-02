import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const publicRoutes = [
  '/clients',
  '/client-intellibus',
  '/client-watchanish',
  '/client-helene',
  '/projects',
  '/portfolio',
  '/privacy-policy',
  '/terms-of-use',
  '/security',
  '/cookie-policy',
]

const distDir = join(process.cwd(), 'dist')
const source = join(distDir, 'index.html')

await Promise.all(
  publicRoutes.flatMap((route) => {
    const cleanPath = route.replace(/^\/+/, '')
    const htmlPath = join(distDir, `${cleanPath}.html`)
    const nestedPath = join(distDir, cleanPath, 'index.html')

    return [
      mkdir(dirname(htmlPath), { recursive: true }).then(() => copyFile(source, htmlPath)),
      mkdir(dirname(nestedPath), { recursive: true }).then(() => copyFile(source, nestedPath)),
    ]
  }),
)
