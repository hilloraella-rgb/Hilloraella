import Reveal from './Reveal.jsx'
import { site } from '../config/site.js'
import { IconPin, IconMail, IconPhone, IconWhatsApp, IconStar } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">🗺️ Find Us</p>
          <h2>Your way to quiet starts here</h2>
          <p className="lead">Tucked above Ella town — easy to reach, hard to leave.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-card glass">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true"><IconPin size={20} /></span>
              <div>
                <h3>Visit Us</h3>
                <p>{site.address}</p>
                <a href={site.mapsLink} target="_blank" rel="noreferrer">Get directions ↗</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true"><IconMail size={20} /></span>
              <div>
                <h3>Write to Us</h3>
                <p>We answer every message, usually the same day.</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className="contact-item contact-item--last">
              <span className="contact-icon" aria-hidden="true"><IconPhone size={18} /></span>
              <div className="contact-phones">
                <h3>Call or WhatsApp</h3>
                <ul>
                  {site.phones.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`}>{p.label}</a>
                      <em>{p.region}</em>
                      <a
                        className="wa-pill"
                        href={`https://wa.me/${p.wa}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp ${p.label}`}
                      >
                        <IconWhatsApp size={14} /> WhatsApp
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a className="btn btn-primary reviews-btn" href={site.mapsLink} target="_blank" rel="noreferrer">
              <IconStar size={15} /> Read &amp; Leave Google Reviews
            </a>
          </Reveal>

          <Reveal delay={120} className="map-frame">
            <iframe
              title="Hillora Ella — No. 54, Yahalegoda, Kithal Ella, Ella, Sri Lanka"
              src={site.mapEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <span className="map-badge">📍 Kithal Ella, Ella</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
