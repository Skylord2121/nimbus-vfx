import { brandLogos } from '../content/brand'

function BrandGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="brand-strip-group" aria-hidden={hidden}>
      {brandLogos.map((brand) =>
        brand.lockup ? (
          <span className="brand-lockup" key={brand.name}>
            {brand.mark ? <img src={brand.mark} alt="" /> : null}
            {brand.lockup}
          </span>
        ) : (
          <img key={brand.name} src={brand.src ?? ''} alt={hidden ? '' : brand.name} />
        ),
      )}
    </div>
  )
}

export function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Selected client and brand experience">
      <div className="brand-strip-track">
        <BrandGroup />
        <BrandGroup hidden />
      </div>
    </section>
  )
}
