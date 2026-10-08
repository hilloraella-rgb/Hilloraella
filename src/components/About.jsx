import Reveal from './Reveal.jsx'
import SlotImage from './SlotImage.jsx'

const values = [
  ['🌱', '100% plant-based breakfast'],
  ['☀️', 'Solar-heated water'],
  ['♻️', 'Zero single-use plastics'],
  ['🤝', 'Local artisans & produce'],
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-frame">
            <SlotImage
              src="/assets/images/exterior.jpg"
              alt="Hillora Ella guesthouse nestled in the hills"
              slot="ABOUT_EXTERIOR"
            />
          </div>
          <div className="about-chip glass" aria-hidden="true">
            <span>🏔️</span> 1,041 m above the everyday
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="eyebrow">🌿 About Us</p>
            <h2>Rooted in the hills, gentle on the earth</h2>
            <p className="lead">
              Hillora Ella is a small, family-run retreat tucked into the green folds of
              Kithal Ella, just minutes from the heart of Ella town. We built it around a
              simple idea: that luxury can be quiet, and comfort can be conscious.
            </p>
            <p className="lead">
              Every detail leans lighter on the planet — solar-heated water, organic
              gardens, a fully vegan-friendly kitchen, and rooms dressed in crisp white
              linens rather than excess. What stays loud is the view: ridges, mist and
              birdsong, from sunrise to starlight.
            </p>
          </Reveal>

          <Reveal delay={120} className="about-values">
            {values.map(([icon, label]) => (
              <div className="value-chip" key={label}>
                <span aria-hidden="true">{icon}</span> {label}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
