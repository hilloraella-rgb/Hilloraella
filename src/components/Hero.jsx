import BookingWidget from './BookingWidget.jsx'
import SlotImage from './SlotImage.jsx'

export default function Hero({ dates, onDatesChange, onCheck }) {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <SlotImage
          src="/assets/images/hero.jpg"
          alt="Panoramic misty mountains of Ella, Sri Lanka"
          slot="HERO_BACKGROUND"
          eager
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <p className="hero-eyebrow">🌿 Kithal Ella · Ella · Sri Lanka</p>
        <h1>
          Welcome to <em>Hillora Ella</em> — A Quiet Stay in the Hills ⛰️✨
        </h1>
        <p className="hero-sub">
          Eco-friendly, vegan-inspired quiet luxury in the misty mountains of Sri Lanka.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#rooms">Explore Our Rooms</a>
          <a className="btn btn-ghost-light" href="#about">Our Story</a>
        </div>
      </div>

      <div className="container hero-widget">
        <BookingWidget dates={dates} onDatesChange={onDatesChange} onCheck={onCheck} />
      </div>
    </section>
  )
}
