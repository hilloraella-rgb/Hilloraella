import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Rooms from './components/Rooms.jsx'
import Gallery from './components/Gallery.jsx'
import Socials from './components/Socials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BookingModal from './components/BookingModal.jsx'
import Toast from './components/Toast.jsx'

/* ---------- date helpers ---------- */
const toISO = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
const addDays = (n) => {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return toISO(d)
}

export default function App() {
  const today = addDays(0)
  const [dates, setDates] = useState({ today, checkIn: addDays(1), checkOut: addDays(3), guests: 2 })
  const [availability, setAvailability] = useState(null)
  const [bookingRoom, setBookingRoom] = useState(null)
  const [toast, setToast] = useState(null)
  const [activeId, setActiveId] = useState('home')
  const toastTimer = useRef(null)

  const showToast = useCallback((msg, tone = 'ok') => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast({ msg, tone })
  }, [])

  const dismissToast = useCallback(() => setToast(null), [])

  /* Scroll-spy for the nav bar */
  useEffect(() => {
    const ids = ['home', 'about', 'rooms', 'gallery', 'contact']
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: '-38% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  /* Floating widget → "Check Availability" */
  const handleCheck = useCallback(() => {
    if (!dates.checkIn || !dates.checkOut) {
      showToast('🌙 Please choose both a check-in and a check-out date.', 'error')
      return
    }
    if (dates.checkIn < dates.today) {
      showToast('🌙 Check-in can’t be in the past — please pick today or later.', 'error')
      return
    }
    if (dates.checkOut <= dates.checkIn) {
      showToast('🌙 Please choose a check-out date after your check-in date.', 'error')
      return
    }
    setAvailability({ checkIn: dates.checkIn, checkOut: dates.checkOut, guests: dates.guests })
    showToast(`🌿 Great news — all rooms are available for ${dates.guests} guest${dates.guests > 1 ? 's' : ''}!`)
    scrollTo('rooms')
  }, [dates, showToast])

  const handleBookNow = useCallback(() => {
    scrollTo('rooms')
    showToast('🛏️ Pick your favourite room below — or WhatsApp us anytime.')
  }, [showToast])

  return (
    <>
      <Navbar activeId={activeId} onBookNow={handleBookNow} />

      <main>
        <Hero dates={dates} onDatesChange={setDates} onCheck={handleCheck} />
        <About />
        <Features />
        <Rooms
          dates={dates}
          availability={availability}
          onBook={setBookingRoom}
          onEditDates={() => scrollTo('booking-widget')}
        />
        <Gallery />
        <Socials />
        <Contact />
      </main>

      <Footer />

      {bookingRoom && (
        <BookingModal room={bookingRoom} dates={dates} onClose={() => setBookingRoom(null)} />
      )}

      <Toast toast={toast} onDone={dismissToast} />
    </>
  )
}
