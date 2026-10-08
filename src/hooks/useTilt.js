import { useEffect, useRef } from 'react'

/**
 * Gentle 3D tilt that follows the pointer. Applied to feature cards.
 * Disabled on touch devices and for reduced-motion users.
 */
export default function useTilt(max = 5) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${(px * max).toFixed(2)}deg) rotateX(${(-py * max).toFixed(2)}deg) translateY(-4px)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])

  return ref
}
