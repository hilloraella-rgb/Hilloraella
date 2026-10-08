/**
 * Inline SVG icon set — no external icon fonts or CDNs, works offline.
 * All icons inherit `currentColor`.
 */

const base = (size, extra = {}) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: 'false',
  ...extra,
})

/* ---------- UI icons ---------- */

export const IconPhone = ({ size = 18 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
)

export const IconMail = ({ size = 18 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const IconPin = ({ size = 18 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.25 6.6 11.6 6.9 11.9a.86.86 0 0 0 1.2 0c.3-.3 6.9-6.65 6.9-11.9A7.5 7.5 0 0 0 12 2zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
  </svg>
)

export const IconWhatsApp = ({ size = 18 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.14.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.43 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.44h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" />
  </svg>
)

export const IconCalendar = ({ size = 16 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="3.5" y="5" width="17" height="16" rx="3" />
    <path d="M3.5 9.5h17M8 2.8V6M16 2.8V6" />
  </svg>
)

export const IconUsers = ({ size = 16 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7 .5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2.5 19.5c0-3 2.9-5.2 6.5-5.2s6.5 2.2 6.5 5.2v.5h-13v-.5zm14.6.5v-.5c0-1.4-.5-2.7-1.4-3.7.6-.2 1.2-.3 1.8-.3 2.7 0 5 1.7 5 4v.5h-5.4z" />
  </svg>
)

export const IconLeaf = ({ size = 14 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M19.8 3.2c.2.4.4 1.1.4 2 0 5.9-4.5 10.6-10.4 10.6-1 0-2-.2-2.8-.5-.2-.1-.3-.4-.1-.6C9.5 11.6 13 8.3 16.4 6c-3.1 1.4-6.7 3.7-9.3 7.1-.2.2-.5.2-.6-.1-.2-.7-.3-1.4-.3-2.1 0-4.3 3.5-7.8 7.8-7.8 2.4 0 4.6.1 5.8.1z" />
    <path d="M4.5 20.5c2-4.5 5.5-8.5 9.5-11-4.4 1.9-8 5.8-10.2 10.6-.1.4.5.8.7.4z" opacity=".55" />
  </svg>
)

export const IconClose = ({ size = 20 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
    <path d="M5.5 5.5l13 13m0-13-13 13" />
  </svg>
)

export const IconChevronLeft = ({ size = 22 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />
  </svg>
)

export const IconChevronRight = ({ size = 22 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </svg>
)

export const IconCheck = ({ size = 16 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
)

export const IconStar = ({ size = 15 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6z" />
  </svg>
)

export const IconExternal = ({ size = 14 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5h10v10M19 5 5 19" />
  </svg>
)

/* ---------- Social brand icons ---------- */

export const IconInstagram = ({ size = 22 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5.2" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
  </svg>
)

export const IconFacebook = ({ size = 22 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M13.4 21.5v-7.1h2.4l.45-2.9H13.4V9.6c0-.84.4-1.65 1.7-1.65h1.33V5.5s-1.2-.2-2.35-.2c-2.4 0-3.97 1.46-3.97 4.09v2.11H7.6v2.9h2.5v7.1h3.3z" />
  </svg>
)

export const IconYouTube = ({ size = 22 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M23.2 7.1a2.9 2.9 0 0 0-2.05-2.06C19.34 4.55 12 4.55 12 4.55s-7.34 0-9.15.49A2.9 2.9 0 0 0 .8 7.1 30.4 30.4 0 0 0 .35 12 30.4 30.4 0 0 0 .8 16.9a2.9 2.9 0 0 0 2.05 2.06c1.81.49 9.15.49 9.15.49s7.34 0 9.15-.49a2.9 2.9 0 0 0 2.05-2.06A30.4 30.4 0 0 0 23.65 12 30.4 30.4 0 0 0 23.2 7.1zM9.75 15.02V8.98L15.55 12l-5.8 3.02z" />
  </svg>
)

export const IconTikTok = ({ size = 22 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M16.6 3c.35 1.98 1.7 3.35 3.9 3.55v2.75c-1.35.05-2.6-.35-3.9-1.1v5.6c0 4.15-3.4 6.65-6.85 5.95-2.4-.5-4.3-2.6-4.4-5.1-.15-3.35 2.6-6 5.9-5.55v2.85c-.25-.05-.5-.1-.8-.1-1.45 0-2.5 1.2-2.35 2.65.15 1.25 1.3 2.25 2.6 2.2 1.4-.05 2.45-1.15 2.45-2.85V3h3.45z" />
  </svg>
)

export const IconPinterest = ({ size = 22 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M12 2.5a9.5 9.5 0 0 0-3.7 18.24c-.06-.75-.11-1.9.02-2.72l1.2-5.1s-.3-.62-.3-1.53c0-1.43.83-2.5 1.86-2.5.88 0 1.3.66 1.3 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.86 1.52 1.86 1.83 0 3.23-1.93 3.23-4.7 0-2.46-1.77-4.18-4.3-4.18-2.92 0-4.64 2.2-4.64 4.46 0 .88.34 1.83.77 2.35.08.1.1.19.07.3l-.29 1.16c-.05.19-.16.23-.36.14-1.33-.62-2.16-2.56-2.16-4.13 0-3.36 2.44-6.44 7.04-6.44 3.7 0 6.57 2.63 6.57 6.15 0 3.67-2.31 6.63-5.52 6.63-1.08 0-2.09-.56-2.44-1.22l-.66 2.53c-.24.93-.9 2.1-1.34 2.8A9.5 9.5 0 1 0 12 2.5z" />
  </svg>
)

export const IconThreads = ({ size = 22 }) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11.4" cy="12" r="3.4" />
    <path d="M14.8 8.7v5c0 2 1.2 3.1 2.8 2.7 1.6-.4 2.9-2.1 2.9-4.4A9.5 9.5 0 1 0 15 19.9" />
  </svg>
)

export const socialIcons = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  youtube: IconYouTube,
  tiktok: IconTikTok,
  pinterest: IconPinterest,
  threads: IconThreads,
}
