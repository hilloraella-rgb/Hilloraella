/**
 * Hillora Ella brand mark (placeholder SVG wordmark).
 *
 * ➜ SWAP: as soon as the official logo is uploaded, save it to
 *   public/assets/images/logo.png
 * and replace the contents of this component with:
 *   <img src="/assets/images/logo.png" alt="Hillora Ella" style={{ height: 46 }} />
 */
export default function Logo({ height = 46 }) {
  return (
    <svg
      viewBox="0 0 236 56"
      height={height}
      role="img"
      aria-label="Hillora Ella — A Quiet Stay in the Hills"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="he-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#57935f" />
          <stop offset="1" stopColor="#2a5237" />
        </linearGradient>
      </defs>

      {/* Badge */}
      <circle cx="28" cy="28" r="24" fill="url(#he-logo-g)" />
      <path d="M10 37 22.5 17.5l7.5 11.5L34.5 22 46 37z" fill="#eef4ea" opacity="0.97" />
      <path d="M36.5 11.5c-5 1.2-7.7 4.4-7.7 9.2 5.3 0 8.8-3.5 7.7-9.2z" fill="#cfe3c8" />

      {/* Wordmark */}
      <text x="62" y="27" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="21.5" fill="currentColor">
        Hillora Ella
      </text>
      <text
        x="63"
        y="44"
        fontFamily="Outfit, Arial, sans-serif"
        fontWeight="500"
        fontSize="8.3"
        letterSpacing="2.9"
        fill="currentColor"
        opacity="0.66"
      >
        A QUIET STAY IN THE HILLS
      </text>
    </svg>
  )
}
