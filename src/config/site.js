/**
 * Central site configuration — all real-world details live here so they are
 * trivial to update in one place.
 */
export const site = {
  name: 'Hillora Ella',
  tagline: 'A Quiet Stay in the Hills',
  location: 'Kithal Ella · Ella · Sri Lanka',
  address: 'No. 54, Yahalegoda, Kithal Ella, Ella, Sri Lanka',
  email: 'hilloraella@gmail.com',

  /** Google Business Profile / reviews / directions (official Maps short link). */
  mapsLink: 'https://maps.app.goo.gl/st65DzDzJ9mktRhm9',

  /** Keyless Google Maps embed for the contact section. */
  mapEmbed:
    'https://www.google.com/maps?q=Hillora%20Ella%2C%20No.%2054%20Yahalegoda%2C%20Kithal%20Ella%2C%20Ella%2C%20Sri%20Lanka&z=14&output=embed',

  phones: [
    { label: '+94 71 24 18 114', tel: '+94712418114', wa: '94712418114', region: 'Sri Lanka' },
    { label: '+94 76 65 38 114', tel: '+94766538114', wa: '94766538114', region: 'Sri Lanka' },
    { label: '+33 75 840 3274', tel: '+33758403274', wa: '33758403274', region: 'France' },
  ],

  /** Primary number used for booking confirmations over WhatsApp. */
  primaryWhatsApp: '94712418114',
}

export const socials = [
  { id: 'instagram', name: 'Instagram', handle: '@hilloraella', url: 'https://instagram.com/hilloraella' },
  { id: 'facebook', name: 'Facebook', handle: 'Hillora Ella', url: 'https://facebook.com/share/1CripESEts' },
  { id: 'youtube', name: 'YouTube', handle: '@HilloraElla', url: 'https://youtube.com/@HilloraElla' },
  { id: 'tiktok', name: 'TikTok', handle: '@hilloraella', url: 'https://tiktok.com/@hilloraella' },
  { id: 'pinterest', name: 'Pinterest', handle: 'hillorae', url: 'https://pinterest.com/hillorae/_profile' },
  { id: 'threads', name: 'Threads', handle: '@hilloraella', url: 'https://threads.com/@hilloraella' },
]
