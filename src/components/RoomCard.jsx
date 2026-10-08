import Reveal from './Reveal.jsx'
import SlotImage from './SlotImage.jsx'
import { IconUsers, IconLeaf } from './Icons.jsx'

export default function RoomCard({ room, index, guests, onBook }) {
  const fits = guests <= room.capacity

  return (
    <Reveal delay={index * 110} className="room-reveal">
      <article className={`room-card ${fits ? '' : 'room-card--unfit'}`} aria-label={room.name}>
        <div className="room-media">
          <SlotImage src={room.image} alt={room.name} slot={room.slot} />
          <div className="price-tag">
            ${room.price}
            <small>/ night</small>
          </div>
        </div>

        <div className="room-body">
          <div className="room-title-row">
            <h3 className="room-title">{room.name}</h3>
            <span className="capacity-chip">
              <IconUsers size={14} /> Up to {room.capacity}
            </span>
          </div>

          <p className="room-tagline">{room.tagline}</p>

          <ul className="amenities">
            {room.amenities.map((a) => (
              <li key={a}>
                <IconLeaf size={13} /> {a}
              </li>
            ))}
          </ul>

          {fits ? (
            <button type="button" className="btn btn-primary room-cta" onClick={() => onBook(room)}>
              Book This Room
            </button>
          ) : (
            <div className="unfit-note">
              <p>Sleeps up to {room.capacity} — for {guests} guests we suggest{' '}
                <strong>{room.id === 'cloud-suite' ? 'booking more than one room' : 'our Cloud Nine Family Suite'}</strong>, or adjust guests above.</p>
              <button type="button" className="btn btn-sand room-cta" onClick={() => onBook(room)} disabled>
                Book This Room
              </button>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}
