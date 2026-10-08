import Reveal from './Reveal.jsx'
import useTilt from '../hooks/useTilt.js'

const features = [
  {
    emoji: '⛰️',
    title: 'Panoramic Mountain Views',
    text: 'Wake to rolling green ridges and drifting mist. Every window at Hillora Ella frames the hills like a living painting.',
  },
  {
    emoji: '🌿',
    title: 'Eco-Friendly & Organic Living',
    text: 'Solar-heated water, organic gardens and zero single-use plastics — with a fully vegan-friendly kitchen at the heart of it all.',
  },
  {
    emoji: '🛏️',
    title: 'Simple Luxury',
    text: 'Crisp white linens, warm timber and soft morning light. Nothing that shouts — everything you need, beautifully done.',
  },
  {
    emoji: '📍',
    title: 'Prime Location',
    text: 'Secluded in Kithal Ella, yet minutes from Ella Rock, Little Adam’s Peak, the Nine Arch Bridge and town cafés.',
  },
]

function FeatureCard({ feature, delay }) {
  const ref = useTilt(6)
  return (
    <Reveal delay={delay}>
      <article className="feature-card" ref={ref}>
        <div className="feature-icon" aria-hidden="true">{feature.emoji}</div>
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </article>
    </Reveal>
  )
}

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">✨ Why Choose Us</p>
          <h2>Four reasons the hills feel like home</h2>
          <p className="lead">Quiet luxury, conscious choices and views that stay with you long after checkout.</p>
        </Reveal>

        <div className="features-grid">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
