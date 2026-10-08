/**
 * Image slot component.
 *
 * Until the real property photos from the Google Maps listing
 * (https://maps.app.goo.gl/st65DzDzJ9mktRhm9) are dropped into
 * public/assets/images, every slot shows a generated stand-in PLUS a highly
 * visible "INSERT_REAL_MAPS_IMAGE_HERE" badge so swapping is unambiguous.
 */
export default function SlotImage({ src, alt, slot = '', className = '', eager = false }) {
  return (
    <div className={`slot-image ${className}`}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
      <span
        className="slot-badge"
        title={`Replace this stand-in with a real photo from the Hillora Ella Google Maps listing. Slot: ${slot || src}`}
      >
        📍 INSERT_REAL_MAPS_IMAGE_HERE
      </span>
    </div>
  )
}
