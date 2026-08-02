import { useEffect } from 'react'
import { legacyPages, type LegacyPageKey } from '../legacy/generatedPages'

type LegacyStaticPageProps = {
  pageKey: LegacyPageKey
}

export function LegacyStaticPage({ pageKey }: LegacyStaticPageProps) {
  const page = legacyPages[pageKey]

  useEffect(() => {
    document.title = page.title

    const bodyClasses = page.bodyClass.split(/\s+/).filter(Boolean)
    document.body.classList.add(...bodyClasses)

    const injectedScripts = page.scripts.map((source) => {
      const script = document.createElement('script')
      script.textContent = `(() => {\n${source}\n})();`
      document.body.appendChild(script)
      return script
    })

    return () => {
      document.body.classList.remove(...bodyClasses, 'mobile-menu-open', 'mobile-menu-closing', 'has-video-modal')
      injectedScripts.forEach((script) => script.remove())
    }
  }, [page])

  return (
    <>
      {page.styles.map((style, index) => (
        <style key={`${pageKey}-style-${index}`} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      {page.stylesheetHrefs.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div className="legacy-static-page" dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  )
}
