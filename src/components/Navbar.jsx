import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Rooms', '#rooms'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Navbar({ activeId, onBookNow }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="Hillora Ella — home" onClick={(e) => { e.preventDefault(); go('#home') }}>
          <Logo height={56} className="logo--nav" />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${activeId === href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(href) }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button type="button" className="btn btn-primary btn-sm nav-cta" onClick={onBookNow}>
            Book Now
          </button>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger ${open ? 'burger--open' : ''}`}>
              <i /><i /><i />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile glass menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={`mobile-link ${activeId === href.slice(1) ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); go(href) }}
          >
            {label}
          </a>
        ))}
        <button type="button" className="btn btn-primary mobile-cta" onClick={() => { setOpen(false); onBookNow() }}>
          Book Now 🌿
        </button>
      </div>
    </header>
  )
}
