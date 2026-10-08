/**
 * Official Hillora Ella brand logo.
 *
 * The logo file lives at public/assets/images/logo.png and is used in:
 *   - the glassmorphic navigation bar (top-left)
 *   - the footer, on a light brand plate above the contact details
 *
 * Both placements sit on light organic surfaces so the dark-green & gold
 * artwork always keeps full contrast. To update the brand mark, simply
 * replace public/assets/images/logo.png — no code changes needed.
 */
export default function Logo({ height = 54, className = '', alt = 'Hillora Ella — A Quiet Stay in the Hills' }) {
  return (
    <img
      src="/assets/images/logo.png"
      alt={alt}
      height={height}
      className={`logo ${className}`.trim()}
      draggable={false}
    />
  )
}
