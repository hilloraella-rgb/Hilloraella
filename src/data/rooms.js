/**
 * Room inventory. `image` paths are deliberate, stable slots — swap the file on
 * disk with the real photo (see public/assets/images/README.md), no code change.
 */
export const rooms = [
  {
    id: 'misty-peak',
    name: 'Misty Peak Room',
    image: '/assets/images/rooms/room-misty-peak.jpg',
    slot: 'ROOM_PHOTO_1',
    capacity: 2,
    price: 78,
    tagline: 'Wake up above the clouds — floor-to-ceiling hill views straight from your bed.',
    amenities: [
      'Panoramic mountain view',
      'Crisp white linens',
      'Solar-heated hot water',
      'Vegan breakfast included',
      'Organic bath amenities',
      'Free Wi-Fi',
    ],
  },
  {
    id: 'garden-nest',
    name: 'Garden Nest Room',
    image: '/assets/images/rooms/room-garden-nest.jpg',
    slot: 'ROOM_PHOTO_2',
    capacity: 2,
    price: 62,
    tagline: 'A warm timber hideaway opening straight onto our organic garden and veranda.',
    amenities: [
      'Private garden veranda',
      'Crisp white linens',
      'Solar-heated hot water',
      'Vegan breakfast included',
      'Zero single-use plastics',
      'Free Wi-Fi',
    ],
  },
  {
    id: 'cloud-suite',
    name: 'Cloud Nine Family Suite',
    image: '/assets/images/rooms/room-cloud-suite.jpg',
    slot: 'ROOM_PHOTO_3',
    capacity: 4,
    price: 110,
    tagline: 'Our most spacious stay — two beds, a reading nook and a valley-wide panorama.',
    amenities: [
      'Sleeps 4 · two beds',
      'Valley panorama windows',
      'Crisp white linens',
      'Solar-heated hot water',
      'Vegan breakfast included',
      'Board games & library',
    ],
  },
]
