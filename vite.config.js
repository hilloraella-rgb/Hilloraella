import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Content Security Policy — injected into the built HTML only (never in dev,
 * where Vite's HMR client uses inline scripts that a strict CSP would block).
 *
 * The site is fully static: no third-party scripts, no cookies, no user input
 * rendered as HTML. The only external resources are Google Fonts (CSS + woff2)
 * and the Google Maps embed iframe.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  'img-src \'self\' data:',
  "connect-src 'self'",
  'frame-src https://www.google.com https://maps.google.com',
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

/** Injects the CSP meta tag into the production HTML only. */
const cspMeta = () => ({
  name: 'inject-csp-meta',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (html) =>
      html.replace(
        '</head>',
        `    <meta http-equiv="Content-Security-Policy" content="${CSP}" />\n  </head>`,
      ),
  },
})

// Bind to 0.0.0.0 so the site works behind preview proxies as well.
export default defineConfig({
  plugins: [react(), cspMeta()],
  server: { host: true, port: 5173, allowedHosts: true },
  preview: { host: true, port: 4173, allowedHosts: true },
  build: {
    // No inline polyfill script in the production HTML → keeps script-src 'self'
    // enforceable. Every supported browser handles native ES modules already.
    modulePreload: { polyfill: false },
  },
})
