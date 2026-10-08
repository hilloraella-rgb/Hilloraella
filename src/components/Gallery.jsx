import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { galleryItems } from '../data/gallery.js'
import { IconChevronLeft, IconChevronRight, IconClose } from './Icons.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null) // index of the lightbox image

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + galleryItems.length) % galleryItems.length)),
    [],
  )

  // Keyboard controls + scroll lock for the lightbox.
  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">📸 Gallery</p>
          <h2>Moments from the mist</h2>
          <p className="lead">
            A first glimpse — these frames will soon be swapped for photos from our official Google Maps listing.
          </p>
        </Reveal>

        <Reveal className="gallery-grid">
          {galleryItems.map((item, i) => (
            <button
              type="button"
              key={item.src + i}
              className={`tile ${item.wide ? 'tile--wide' : ''} ${item.tall ? 'tile--tall' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Open photo: ${item.caption}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="tile-caption">{item.caption}</span>
            </button>
          ))}
        </Reveal>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <img
            src={galleryItems[active].src}
            alt={galleryItems[active].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">{galleryItems[active].caption}</p>

          <button type="button" className="lb-btn lb-close" aria-label="Close" onClick={close}>
            <IconClose />
          </button>
          <button
            type="button"
            className="lb-btn lb-prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            className="lb-btn lb-next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); step(1) }}
          >
            <IconChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}
