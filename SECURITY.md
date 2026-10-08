# Security Policy

## Reporting a Vulnerability

If you find a security issue with the Hillora Ella website, please email
**hilloraella@gmail.com** (subject: `Security — Hillora Ella website`) instead
of opening a public issue. We aim to acknowledge reports within 48 hours.

Please include:

- A description of the issue and its potential impact
- Steps to reproduce (URL, screenshots, payload)
- The browser/device you used, if relevant

## Scope

This is a fully static marketing/booking site (React + Vite, no backend, no
database, no user accounts, no cookies). Out of scope: the WhatsApp / email /
phone handoff targets (wa.me, `mailto:`, `tel:`), Google Fonts, and the Google
Maps embed — those are third-party services governed by their own policies.

## Automated hygiene

- Dependency vulnerabilities are tracked with `npm audit` and Dependabot
  (`.github/dependabot.yml`); security PRs are opened automatically.
- The production build ships a strict Content Security Policy
  (`script-src 'self'`, `object-src 'none'`, `base-uri 'self'`, …) injected at
  build time — see `vite.config.js`.
- Security headers for static hosts live in `public/_headers`.

## Supported Versions

Only the latest commit on the default branch (`main`) is supported with
security updates.
