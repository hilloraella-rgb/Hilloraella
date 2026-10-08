import { useState } from 'react'

/**
 * Official Hillora Ella brand logo.
 *
 * ➜ Drop the REAL artwork at either path — whichever exists is used
 *   automatically (.png first, then .jpg), no code changes needed:
 *
 *     public/assets/images/logo.png
 *     public/assets/images/logo.jpg
 *
 * Placements: glassmorphic navbar (top-left) + footer brand plate, both on
 * light organic surfaces with a multiply blend so the dark-green & gold
 * artwork keeps full contrast. Until the real file arrives, a design-matched
 * stand-in (approved by the owner) is shown.
 */
const SOURCES = ['/assets/images/logo.png', '/assets/images/logo.jpg']

export default function Logo({ height = 54, className = '', alt = 'Hillora Ella — A Quiet Stay in the Hills' }) {
  const [idx, setIdx] = useState(0)

  return (
    <img
      src={SOURCES[idx]}
      alt={alt}
      height={height}
      className={`logo ${className}`.trim()}
      draggable={false}
      onError={() => setIdx((v) => (v < SOURCES.length - 1 ? v + 1 : v))}
    />
  )
}
