import { useEffect, useMemo, useState } from 'react'
import { site } from '../config/site.js'
import { IconClose, IconWhatsApp, IconMail, IconCheck } from './Icons.jsx'

const pretty = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })

/**
 * Placeholder booking flow: collects the guest details, then hands off to
 * WhatsApp / email with a pre-filled confirmation message. Swap the submit
 * handler for a real reservations API when ready.
 */
export default function BookingModal({ room, dates, onClose }) {
  const [step, setStep] = useState('form') // 'form' | 'success'
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })

  const ref = useMemo(() => `HE-${Math.random().toString(36).slice(2, 7).toUpperCase()}`, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const nights = Math.max(
    1,
    Math.round((new Date(dates.checkOut) - new Date(dates.checkIn)) / 86400000),
  )
  const total = nights * room.price

  const summaryText =
    `Hello Hillora Ella! I'd like to book the ${room.name} ` +
    `from ${pretty(dates.checkIn)} to ${pretty(dates.checkOut)} ` +
    `(${nights} night${nights > 1 ? 's' : ''}, est. total $${total}) ` +
    `for ${dates.guests} guest${dates.guests > 1 ? 's' : ''}. Ref: ${ref}.` +
    `${form.name ? `\nName: ${form.name}.` : ''}` +
    `${form.email ? `\nEmail: ${form.email}.` : ''}` +
    `${form.phone ? `\nPhone/WhatsApp: ${form.phone}.` : ''}` +
    `${form.notes ? `\nSpecial requests: ${form.notes}.` : ''}`

  const waHref = `https://wa.me/${site.primaryWhatsApp}?text=${encodeURIComponent(summaryText)}`
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(`Booking ${ref} — ${room.name}`)}&body=${encodeURIComponent(summaryText)}`

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={`Book ${room.name}`} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close booking form" onClick={onClose}>
          <IconClose />
        </button>

        {step === 'form' ? (
          <>
            <p className="eyebrow">🌿 Almost there</p>
            <h3 className="modal-title">Book · {room.name}</h3>

            <div className="modal-summary">
              <div>
                <small>Stay</small>
                <strong>{pretty(dates.checkIn)} → {pretty(dates.checkOut)}</strong>
              </div>
              <div>
                <small>Guests</small>
                <strong>{dates.guests}</strong>
              </div>
              <div>
                <small>Total</small>
                <strong>${total} <span>· {nights} night{nights > 1 ? 's' : ''}</span></strong>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setStep('success')
              }}
            >
              <div className="modal-fields">
                <label>
                  Full name
                  <input required value={form.name} onChange={set('name')} placeholder="Your name" autoFocus autoComplete="name" maxLength={60} />
                </label>
                <label>
                  Email
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" autoComplete="email" maxLength={254} />
                </label>
                <label>
                  Phone / WhatsApp
                  <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+94 …" autoComplete="tel" maxLength={30} />
                </label>
                <label className="full">
                  Special requests <em>(optional)</em>
                  <textarea rows="2" value={form.notes} onChange={set('notes')} placeholder="Airport pickup, vegan cake, early check-in…" maxLength={500} />
                </label>
              </div>

              <button type="submit" className="btn btn-primary modal-submit">
                Confirm Booking Request
              </button>
              <p className="modal-note">✨ Demo booking flow — connect this to your reservations system, or confirm instantly via WhatsApp below.</p>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-orb" aria-hidden="true"><IconCheck size={30} /></div>
            <h3 className="modal-title">Thank you, {form.name.split(' ')[0] || 'traveller'}! 🌿</h3>
            <p>
              Your request for the <strong>{room.name}</strong> ({pretty(dates.checkIn)} → {pretty(dates.checkOut)},{' '}
              {dates.guests} guest{dates.guests > 1 ? 's' : ''}) is noted under reference <strong>{ref}</strong>.
            </p>
            <p className="success-sub">Send it to us directly to lock in your dates:</p>
            <div className="success-actions">
              <a className="btn btn-primary" href={waHref} target="_blank" rel="noreferrer">
                <IconWhatsApp size={16} /> Confirm on WhatsApp
              </a>
              <a className="btn btn-sand" href={mailHref}>
                <IconMail size={16} /> Confirm by Email
              </a>
            </div>
            <button type="button" className="modal-done" onClick={onClose}>Back to the hills</button>
          </div>
        )}
      </div>
    </div>
  )
}
