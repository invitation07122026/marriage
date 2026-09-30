/**
 * =========================================================================
 * 💍 WEDDING DETAILS (KARISHMA & YOGESH)
 * =========================================================================
 * Edit any details below to customize the invitation.
 * The countdown, calendar, headings, and map will update automatically!
 */
window.weddingDetails = {
  // 1. The Happy Couple
  couple: {
    groom: {
      firstName: 'Yogesh',
      fullName: 'Yogesh Vishwakarma',
      bio: 'Engineer, coffee lover, and the happiest groom!',
    },
    bride: {
      firstName: 'Karishma',
      fullName: 'Karishma Sharma',
      bio: 'The sweetest bride!',
    },
  },

  // 2. The Families
  families: {
    groom: {
      father: 'Mr. Shiv Pratap Vishwakarma',
      mother: 'Mrs. Manorama Devi',
      address: 'Bargadwa, Gorakhpur',
    },
    bride: {
      father: 'Mr. Radheshyam Sharma',
      mother: 'Mrs. Madhuri Devi',
      address: 'Partawal, Maharajganj',
    },
  },

  // 3. Invitation Wording
  invitation: {
    recipient: 'Honored Guest',
    headline: 'Our Forever Starts Here',
    message: 'With the blessings of our parents and elders, we joyfully invite you to celebrate the wedding of our beloved son Yogesh and bless the beautiful beginning of his new journey with Karishma.',
    welcomeNote: 'You are cordially invited to celebrate this sacred union and bless the couple.',
    closingNote: 'Your presence and blessings would mean the world to our family.',
  },

  // Event timezone used for all countdown calculations (India Standard Time).
  timezone: {
    name: 'Asia/Kolkata',
    utcOffset: '+05:30',
  },

  // 4. Main Venue & Map
  venue: {
    name: 'Dream Palace Lawn',
    address: 'Partawal bazaar, Maharajganj',
    googleMapsUrl: 'https://maps.google.com/?q=Dream+Palace+Lawn+Partawal+Maharajganj',
    embedMapUrl: 'https://maps.google.com/maps?q=Dream+Palace+Lawn+Partawal+Maharajganj&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // 5. Wedding Events (Wedding Ceremony & Reception Dinner)
  events: [
    {
      id: 'event-ceremony',
      title: 'Wedding Ceremony',
      type: 'ceremony',
      date: '2026-12-07',
      formattedDate: 'Monday, December 07, 2026',
      time: '19:30',
      locationName: 'Dream Palace Lawn',
      address: 'Partawal bazaar, Maharajganj',
      googleMapsUrl: 'https://maps.google.com/?q=Dream+Palace+Lawn+Partawal+Maharajganj',
      calendarUrl: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Yogesh+%26+Karishma+Wedding+Ceremony&dates=20261207T140000Z/20261207T180000Z&details=Baraat%2C+Varmala%2C+Pheras+and+wedding+rituals&location=Dream+Palace+Lawn%2C+Partawal+Bazaar%2C+Maharajganj',
    },
    {
      id: 'event-dinner',
      title: 'Grand Wedding Dinner',
      type: 'reception',
      date: '2026-12-07',
      formattedDate: 'Monday, December 07, 2026',
      time: '20:30',
      locationName: 'Dream Palace Lawn',
      address: 'Partawal bazaar, Maharajganj',
      googleMapsUrl: 'https://maps.google.com/?q=Dream+Palace+Lawn+Partawal+Maharajganj',
      calendarUrl: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Yogesh+%26+Karishma+Wedding+Dinner&dates=20261207T150000Z/20261207T180000Z&details=Grand+Wedding+Dinner&location=Dream+Palace+Lawn%2C+Partawal+Bazaar%2C+Maharajganj',
    },
  ],

  // 6. Day Schedule / Timeline
  // Keep this array chronological so the rendered timeline matches the actual event flow.
  schedule: [
    { id: '1', time: '19:30', title: 'Baraat & Swagat', description: 'Welcoming Yogesh & the Baraat procession' },
    { id: '2', time: '20:30', title: 'Dinner', description: 'Royal banquet dinner' },
    { id: '3', time: '21:00', title: 'Varmala', description: 'Exchange of floral garlands' },
    { id: '4', time: '23:30', title: 'Pheras & Wedding Rituals', description: 'Sacred wedding vows' },
    // { id: '5', time: '22:30', title: 'Doli & Vidai', description: 'Blessings and farewell' },
  ],

  // 7. The Seven Vows
  // Each card is interactive: tap/click to reveal the promise.
  vows: [
    {
      number: '01',
      title: 'Togetherness',
      promise: 'To walk beside each other through every season of life, with love, patience and understanding.',
    },
    {
      number: '02',
      title: 'Strength',
      promise: 'To support one another through every challenge and celebrate every victory together.',
    },
    {
      number: '03',
      title: 'Prosperity',
      promise: 'To build a home filled with respect, abundance, generosity and shared dreams.',
    },
    {
      number: '04',
      title: 'Happiness',
      promise: 'To protect the joy between us and fill our days with laughter, warmth and kindness.',
    },
    {
      number: '05',
      title: 'Family',
      promise: 'To honour our families, cherish their blessings and grow together with love and gratitude.',
    },
    {
      number: '06',
      title: 'Friendship',
      promise: 'To remain best friends, listen to each other and choose each other every single day.',
    },
    {
      number: '07',
      title: 'Forever',
      promise: 'To share this journey with faith and devotion, standing together through all that life brings.',
    },
  ],

  // 8. Background Music
  music: {
    title: 'Acoustic Wedding Melody',
    autoplay: true,
  },
};
