import Logo from './Logo.jsx'
import { site, socials } from '../config/site.js'
import { socialIcons, IconWhatsApp, IconMail } from './Icons.jsx'

const quickLinks = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Rooms', '#rooms'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Brand plate — official logo, above the contact details */}
      <div className="container footer-top">
        <div className="footer-logo-plate">
          <Logo height={132} className="logo--footer" />
        </div>
        <div className="footer-intro">
          <p>
            Eco-friendly, vegan-inspired quiet luxury in the misty mountains of Ella,
            Sri Lanka. Come for the views — stay for the stillness.
          </p>
          <div className="footer-socials">
            {socials.map((s) => {
              const Icon = socialIcons[s.id]
              return (
                <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
                  <Icon size={17} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <nav className="footer-col" aria-label="Footer">
          <h4>Explore</h4>
          {quickLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <p className="footer-address">{site.address}</p>
          <a href={`mailto:${site.email}`} className="footer-line"><IconMail size={14} /> {site.email}</a>
          {site.phones.map((p) => (
            <a key={p.tel} href={`https://wa.me/${p.wa}`} target="_blank" rel="noreferrer" className="footer-line">
              <IconWhatsApp size={14} /> {p.label}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Good to Know</h4>
          <a href={site.mapsLink} target="_blank" rel="noreferrer">Google Business Profile ↗</a>
          <a href={site.mapsLink} target="_blank" rel="noreferrer">Directions &amp; Reviews ↗</a>
          <a href="#rooms">Book a Room</a>
          <a href={`mailto:${site.email}?subject=Booking%20enquiry%20—%20Hillora%20Ella`}>Booking Enquiry</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Hillora Ella · Kithal Ella, Ella, Sri Lanka. All rights reserved.</p>
        <p>Crafted with 💚 in the hills · Eco-friendly · Vegan-friendly</p>
      </div>
    </footer>
  )
}
