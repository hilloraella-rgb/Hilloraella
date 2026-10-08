import Reveal from './Reveal.jsx'
import { socials } from '../config/site.js'
import { socialIcons } from './Icons.jsx'

export default function Socials() {
  return (
    <section id="social" className="section socials">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow eyebrow--light">🤝 Community</p>
          <h2>Connect &amp; Follow Our Journey</h2>
          <p className="lead lead--light">
            Daily mist, mountain meals and quiet moments from Hillora Ella — come say hello.
          </p>
        </Reveal>

        <div className="socials-grid">
          {socials.map((s, i) => {
            const Icon = socialIcons[s.id]
            return (
              <Reveal key={s.id} delay={i * 70}>
                <a className="social-card" href={s.url} target="_blank" rel="noreferrer" aria-label={`${s.name} — ${s.handle}`}>
                  <span className={`social-orb orb-${s.id}`} aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <span className="social-text">
                    <strong>{s.name}</strong>
                    <small>{s.handle}</small>
                  </span>
                  <span className="social-arrow" aria-hidden="true">→</span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
