import { IconCalendar, IconUsers } from './Icons.jsx'

const guestLabel = (n) => `${n} ${n === 1 ? 'Guest' : 'Guests'}`

/**
 * Floating 3D availability widget (Check-in / Check-out / Guests).
 */
export default function BookingWidget({ dates, onDatesChange, onCheck, id = 'booking-widget' }) {
  const set = (key) => (e) => onDatesChange({ ...dates, [key]: e.target.value })

  return (
    <form
      id={id}
      className="widget glass"
      onSubmit={(e) => {
        e.preventDefault()
        onCheck()
      }}
      aria-label="Check availability"
    >
      <div className="field">
        <label htmlFor="checkin"><IconCalendar /> Check-in</label>
        <input
          id="checkin"
          type="date"
          value={dates.checkIn}
          min={dates.today}
          onChange={set('checkIn')}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="checkout"><IconCalendar /> Check-out</label>
        <input
          id="checkout"
          type="date"
          value={dates.checkOut}
          min={dates.checkIn || dates.today}
          onChange={set('checkOut')}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="guests"><IconUsers /> Guests</label>
        <select id="guests" value={dates.guests} onChange={set('guests')}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>{guestLabel(n)}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary widget-submit">
        Check Availability
      </button>
    </form>
  )
}
