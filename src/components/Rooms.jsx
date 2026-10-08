import Reveal from './Reveal.jsx'
import RoomCard from './RoomCard.jsx'
import { rooms } from '../data/rooms.js'

const pretty = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })

export default function Rooms({ dates, availability, onBook, onEditDates }) {
  return (
    <section id="rooms" className="section rooms">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">🛏️ Rooms &amp; Booking</p>
          <h2>Choose your quiet corner</h2>
          <p className="lead">
            Three rooms, one philosophy: crisp linens, warm wood, and the hills at your window.
          </p>
        </Reveal>

        {availability && (
          <Reveal className="avail-banner glass" role="status">
            <span className="avail-dot" aria-hidden="true">✓</span>
            <span>
              <strong>Available</strong> · {pretty(availability.checkIn)} → {pretty(availability.checkOut)} ·{' '}
              {availability.guests} {availability.guests === 1 ? 'guest' : 'guests'} — all rooms open for these dates.
            </span>
            <button type="button" className="avail-edit" onClick={onEditDates}>Change dates</button>
          </Reveal>
        )}

        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} guests={dates.guests} onBook={onBook} />
          ))}
        </div>

        <Reveal delay={150} className="rooms-note">
          <p>
            🌿 Prefer to book personally? WhatsApp us at{' '}
            <a href="https://wa.me/94712418114" target="_blank" rel="noreferrer">+94 71 24 18 114</a> — we reply within hours.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
