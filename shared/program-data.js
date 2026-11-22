/*
 * Walsh Honor Band — Midwest Clinic digital program
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF CONTENT for every draft layout.
 * Anything with `placeholder: true` (or text in [brackets]) is mock
 * copy and needs to be replaced with verified information.
 *
 * Photos: set `photo: "images/whatever.jpg"` (path relative to the site
 * root) on any person/piece/band entry. When `photo` is empty, each draft
 * falls back to a generated placeholder graphic.
 */
window.PROGRAM = {
  concert: {
    ensemble: "Walsh Middle School Honor Band",
    shortName: "Walsh Honor Band",
    event: "The 80th Annual Midwest Clinic",
    eventSub: "International Band & Orchestra Conference",
    // Source: midwestclinic.org schedule of events (verify before printing)
    date: "Thursday, December 17, 2026",
    time: "1:30 – 2:20 PM",
    venue: "McCormick Place West",
    room: "Room W375E",
    city: "Chicago, Illinois",
    school: "Walsh Middle School",
    district: "Round Rock ISD",
    hometown: "Round Rock, Texas",
    conductor: "Jennifer Bergeron",
    motto: "The way we do anything is the way we do everything!",
    donateUrl: "https://donate.walshband.com",
    siteUrl: "https://walshband.com",
  },

  welcome: {
    placeholder: true,
    heading: "Welcome to Chicago",
    body: "[Placeholder welcome letter from the directors] Thank you for joining us for this once-in-a-lifetime performance. Being invited to perform at The Midwest Clinic is one of the highest honors a school band can receive, and these students have earned every moment on this stage through thousands of hours of practice, sectionals, and Friday rehearsals. This is the second time in its history that the Walsh Honor Band has performed at The Midwest Clinic. We are so proud of them — and so grateful to the families, teachers, and community who made this trip possible.",
    signedBy: "Jennifer Bergeron, Stone Wang & Zachary Glaser",
  },

  // ---- Program order (10 pieces) ----------------------------------------
  // `placeholder: true` = some text is still mock. `sources` = where real info came from.
  pieces: [
    {
      title: "Crosswalk",
      composer: "Dennis Llinás",
      duration: "",
      placeholder: true,
      description: "[Placeholder — no published program note found yet] A bright, kinetic opener that captures the rush of a busy city intersection — overlapping rhythms, bold brass, and a melody that keeps darting through the traffic.",
      composerBio: "Dennis Llinás is a Cuban-Colombian conductor and composer and the Director of Bands at the University of Oregon, where he conducts the Wind Ensemble and oversees the band area. A native of Hialeah, Florida, he studied at Florida International University and The University of Texas. He is also one of the mentors Mr. Glaser credits with shaping his own teaching.",
      why: "[Placeholder] We open with Crosswalk because it is pure energy — every section gets a moment in the spotlight.",
    },
    {
      title: "Dystopia",
      composer: "Jay Coles",
      composerPhoto: "images/composers/jay-coles.jpg",
      duration: "≈ 2½ min",
      description: "Dystopia is a dark and brooding musical exploration of a nation severely damaged by a long war. Filled with driving rhythms, blazing dissonances, and rapid-fire tuttis, it places the musicians at the center of the ruin, where everyone plays a part in the final escape. Inspired by blockbuster dystopian film trilogies, it tells the story of a society working together to survive and rebuild — a musical toast to the idea of working together to break free.",
      composerBio: "Jay Coles writes music for young bands that is unique yet accessible, and has quickly become one of the most-played new voices in the concert band world. Dystopia, published by C. Alan Publications, was selected as a 2017–18 J.W. Pepper Editor's Choice.",
      why: "[Placeholder] Dystopia challenges our students to play with intensity and control at the same time.",
      sources: ["https://c-alanpublications.com/dystopia/"],
    },
    {
      title: "Rozana",
      composer: "Reena Esmail",
      duration: "",
      placeholder: true,
      description: "Clear phrasing and imaginative use of color define this expressive work. Its transparent textures and rich harmonic language let the band focus on musical shaping, balance, and tone — music that sounds mature, confident, and deeply expressive. [Add composer's note on the meaning of “Rozana.”]",
      composerBio: "Reena Esmail works between the worlds of Indian and Western classical music, and brings communities together through the creation of equitable musical spaces. She holds degrees from The Juilliard School and the Yale School of Music, and her music is performed by orchestras, choirs, and ensembles around the world.",
      why: "[Placeholder] Rozana teaches us to listen — it asks for beautiful, connected phrasing.",
      sources: ["https://www.jwpepper.com/rozana-11628239/p"],
    },
    {
      title: "Ogres and Goblins and Trolls, Oh My!",
      composer: "Julie Giroux",
      duration: "≈ 4 min",
      description: "Commissioned by Dan Bassett and the South Florida Pride Concert Band, this is Halloween-style music in the spirit of Grieg's “In the Hall of the Mountain King.” Giroux started with her favorite gaming characters — ogres, goblins and trolls — and heard how the words fit the rhythm of “Lions and Tigers and Bears, Oh My!” In her words: “It has several great sound effects that involve everybody in the band, crazy fun melodies, and you never know what is coming next.”",
      composerBio: "Julie Giroux is an American composer and orchestrator whose career began in film and television scoring. She has written well over a hundred works for wind band, published through her own company, Giroux Music, and her music is performed by ensembles of every level around the world.",
      why: "[Placeholder] Because band should be fun! This piece lets the students show off character and a little bit of theatre.",
      sources: ["https://www.girouxmusic.com/products/ogres-and-goblins-and-trolls-oh-my"],
    },
    {
      title: "Simple Suite",
      composer: "Tyler S. Grant",
      duration: "",
      description: "A four-movement suite — Intrada, Dance, Song, and March — that moves from a bright fanfare to a lilting 6/8 dance, a lyrical song, and finally a brisk march. Simple Suite won the 2026 Barbara Buehlman Prize for Composition, presented by The Midwest Clinic, and was commissioned by a consortium of bands led by Jared Brockmeyer.",
      composerBio: "Tyler S. Grant is an internationally recognized composer, arranger, conductor, and clinician of music for concert bands, orchestras, and chamber ensembles of all levels. His music appears regularly on region and all-state programs and Editor's Choice lists, and has been performed at The Midwest Clinic, Carnegie Hall, and the Macy's Thanksgiving Day Parade. He credits his mentor Brian Balmages as pivotal to his success.",
      why: "[Placeholder] Simple music is never easy. This suite puts our tone, balance and blend on full display.",
      sources: ["https://www.alfred.com/products/simple-suite-for-band-98-tsgb047", "https://www.alfred.com/pages/authors/tyler-grant-a1O6S00000GfjxSUAR"],
    },
    {
      title: "Frequency",
      composer: "Minoo Dixon",
      composerPhoto: "images/composers/minoo-dixon.webp",
      duration: "≈ 4 min",
      description: "Minimalist techniques fuel this engaging work: gradually layered percussion establishes a compelling groove that immediately draws listeners in. Repetition stays purposeful as evolving texture and color keep the music moving forward with momentum, focus, and drive.",
      composerBio: "Minoo Dixon (b. 1999) is an Asian-American composer recognized by ASCAP and the National Federation of Music Clubs, writing exciting music meant to be enjoyed by performers and audience alike. He grew up in Suwanee, Georgia, studied at Berklee College of Music, and earned his composition degree at New England Conservatory under Michael Gandolfi.",
      why: "[Placeholder] Frequency is a masterclass in rhythmic precision — every player has to lock in with the band.",
      sources: ["https://www.jwpepper.com/frequency-11665008/p", "https://www.minoodixon.com/about"],
    },
    {
      title: "Pale Blue Dot",
      composer: "James M. David",
      duration: "≈ 4 min",
      description: "Subtitled “A Song for Carl,” Pale Blue Dot is a tribute to astronomer Carl Sagan and the famous Voyager 1 photograph of Earth. The music follows the spacecraft's journey in two parts: first leaving Earth and breaking beyond the solar system, then looking backward at home in all its fragility. It was commissioned by Dr. Erik Johnson and the Colorado State University Middle School Outreach Ensemble.",
      composerBio: "James M. David (b. 1978) is an American composer and professor of music theory and composition at Colorado State University. His works for winds — including Urban Light, Ghosts of the Old Year, and Two-Lane Blacktop — are performed widely, and he has described Pale Blue Dot as his best work for young band to date.",
      why: "[Placeholder] Pale Blue Dot is the emotional heart of our program.",
      sources: ["https://www.windrep.org/Pale_Blue_Dot"],
    },
    {
      title: "Street Music",
      composer: "Aakash Mittal",
      duration: "",
      placeholder: true,
      description: "Street Music draws on the outdoor ritual and festival music Mittal heard while living in Kolkata, India — the improvised rhythms and sounds of the street woven into a vibrant, rhythmic collage. [Add the composer's program note from the score.]",
      composerBio: "Aakash Mittal is a saxophonist and composer whose music explores the meeting points of jazz, Hindustani classical music, and contemporary composition. His works for winds include Salt March, Three Songs of Bengal, and Poorvi: An Evening Raga, published by Murphy Music Press.",
      why: "[Placeholder] Street Music lets the band groove — it is full of rhythm and personality.",
      sources: ["https://www.windrep.org/Aakash_Mittal"],
    },
    {
      title: "The Way We Do Anything...",
      composer: "Randall Standridge",
      composerPhoto: "images/composers/randall-standridge.jpg",
      duration: "",
      placeholder: true,
      description: "[Placeholder — confirm commission details] Titled after the Walsh Band motto — “The way we do anything is the way we do everything” — this 2026 work celebrates hard work, attention to detail, and pride in doing things the right way. Standridge also wrote “Affirmation,” which the Walsh Honor Band performed at its first Midwest Clinic appearance in 2021.",
      composerBio: "Randall Standridge (b. 1976) earned his bachelor's and master's degrees from Arkansas State University and served as Director of Bands at Harrisburg High School in Arkansas from 2001 to 2013 before becoming a full-time composer and marching arts designer. His music is performed internationally, appears in the Teaching Music Through Performance in Band series, and has been featured many times at The Midwest Clinic. He also leads the unBroken Project, a musical initiative about mental health.",
      why: "[Placeholder] This one is personal — our motto is in the title.",
      sources: ["https://www.randallstandridge.com/about"],
    },
    {
      title: "Dancing in the Sun",
      composer: "Nathan Hervey",
      composerPhoto: "images/composers/nathan-hervey.jpg",
      duration: "",
      description: "Joyful and uplifting, Dancing in the Sun celebrates the shared human experience of dance. Symphonic and pop influences blend as the music shifts between 4/4 and 3/4 to create a buoyant rhythmic flow, full of syncopation, energetic melodies, and colorful scoring.",
      composerBio: "[Add bio] Nathan Hervey is a composer of music for concert band whose works, including Sonic Pathways and Everyday Heroes, are published by Randall Standridge Music and C.L. Barnhouse.",
      why: "[Placeholder] We wanted to end the way we feel about this trip: joyful, bright and grateful.",
      sources: ["https://www.jwpepper.com/dancing-in-the-sun-11684712/p"],
    },
  ],

  // ---- Full band photo --------------------------------------------------
  // Tie & sash colors from the official section photos. Each section wears one.
  tieColors: {
    gold:   "#D2A93A",
    purple: "#6B3FA0",
    blue:   "#2D5BD0",
    green:  "#13804F",
    red:    "#C4153A",
    teal:   "#118A7E",
  },
  sectionColor: {
    "Flute": "gold", "Oboe": "purple", "Bassoon": "blue", "Clarinet": "green",
    "Bass Clarinet": "blue", "Alto Saxophone": "red", "Tenor Saxophone": "red",
    "Baritone Saxophone": "red", "Trumpet": "red", "Horn": "green", "Trombone": "blue",
    "Bass Trombone": "blue", "Euphonium": "gold", "Tuba": "purple", "Percussion": "teal",
  },

  // Official section photos. Each covers one or more roster sections, in roster order.
  sectionPhotos: [
    { id: "flute",         title: "Flutes",                 instruments: ["Flute"],
      rows: [["Front row", ["Hyein Lee", "Laura Zhao", "Joie Park", "Abbie Ding"]], ["Back row", ["Nancy Liu", "Ana Luisa Salcedo", "Amelie Pribadi", "Navni Prasad"]]] },
    { id: "double-reeds",  title: "Oboes & Bassoons",       instruments: ["Oboe", "Bassoon"],
      rows: [["Front row", ["Sofia Russell", "Zlata Karmalitova"]], ["Back row", ["Scarlet Mobley", "Chasity Coburn"]]] },
    { id: "clarinet",      title: "Clarinets",              instruments: ["Clarinet"],
      rows: [["Front row", ["Serena Wang", "Jake Hwang", "Connor Lee"]], ["Middle row", ["Jian Park", "Eshan Nair", "Elisabeth Terry"]], ["Back row", ["Niki Karthikeyan", "Aidan Vu", "Natalia Ybarra"]]] },
    { id: "bass-clarinet", title: "Bass Clarinets",         instruments: ["Bass Clarinet"],
      rows: [[null, ["Abhinav Kankanala", "Asmi Alex Thomas", "Gabriel Zhang"]]] },
    { id: "saxophone",     title: "Saxophones",             instruments: ["Alto Saxophone", "Tenor Saxophone", "Baritone Saxophone"],
      rows: [[null, ["Yuno Mishina", "Elli Hwang", "Vedha Vigneswaran", "Ekagra Saksham", "Hasini Hewa-Kasakarage", "Seungyu Kang"]]] },
    { id: "trumpet",       title: "Trumpets",               instruments: ["Trumpet"],
      rows: [["Front row", ["Zack Bingham", "Everett Platt", "Sunwoo Jung", "Theo Nellans"]], ["Back row", ["Yenny Chae", "Malhar Bagal", "Jude Ferrero"]]] },
    { id: "horn",          title: "Horns",                  instruments: ["Horn"],
      rows: [["Front row", ["SJ Kuk", "Tamanna Narayan", "Thoshika Gali"]], ["Back row", ["Elianna Ma-Zepeta", "Ethan Bergeron", "Neha Murali"]]] },
    { id: "trombone",      title: "Trombones",              instruments: ["Trombone", "Bass Trombone"],
      rows: [[null, ["Aaryesh Dasgupta", "Prisha Gupta", "Eli Shadle", "Sevi Cochran", "Rishi Kotha", "Miles Ledgerwood"]]] },
    { id: "euphonium",     title: "Euphoniums",             instruments: ["Euphonium"],
      rows: [[null, ["Aryav Bheemreddy", "Aiden Kim", "Senuka Abeysinghe"]]] },
    { id: "tuba",          title: "Tubas",                  instruments: ["Tuba"],
      rows: [[null, ["August Power", "Sofia Chaves de Araujo", "Ethan Fisher", "Darius Alagar"]]] },
    { id: "percussion",    title: "Percussion",             instruments: ["Percussion"],
      rows: [["Front row", ["Adam Haas", "Irene Renjith", "Adrian Meono-Monsivais"]], ["Middle row", ["Niyanth Raghuram", "Euisung Jung"]], ["Back row", ["Leo Dumapat", "William Wood", "Avery Tyler"]]] },
  ].map(g => ({ ...g, photo: `images/sections/${g.id}.jpg` })),

  // Second, candid band photo (official Midwest photo shoot)
  bandPhotoCandid: { photo: "images/band-playground.jpg", caption: "“[Placeholder quote — add something meaningful about this group here.]”", captionPlaceholder: true },

  bandPhoto: {
    photo: "images/full-band.jpg",
    caption: "“[Placeholder quote — add something meaningful about the band here.]”",
    captionPlaceholder: true,
  },

  // ---- Roster by instrument (from the Nov 17, 2026 Fall Concert program) --
  sections: [
    { instrument: "Flute", players: ["Abbie Ding", "Hyein Lee", "Nancy Liu", "Joie Park", "Navni Prasad", "Amelie Pribadi", "Ana Luisa Salcedo", "Laura Zhao"] },
    { instrument: "Oboe", players: ["Chasity Coburn", "Scarlet Mobley"] },
    { instrument: "Bassoon", players: ["Zlata Karmalitova", "Sofia Russell"] },
    { instrument: "Clarinet", players: ["Jake Hwang", "Niki Karthikeyan", "Connor Lee", "Eshan Nair", "Jian Park", "Elisabeth Terry", "Aidan Vu", "Serena Wang", "Natalia Ybarra"] },
    { instrument: "Bass Clarinet", players: ["Asmi Alex Thomas", "Abhinav Kankanala", "Gabriel Zhang"] },
    { instrument: "Alto Saxophone", players: ["Elli Hwang", "Yuno Mishina", "Ekagra Saksham", "Vedha Vigneswaran"] },
    { instrument: "Tenor Saxophone", players: ["Hasini Hewa-Kasakarage"] },
    { instrument: "Baritone Saxophone", players: ["Seungyu Kang"] },
    { instrument: "Trumpet", players: ["Malhar Bagal", "Zack Bingham", "Yenny Chae", "Jude Ferrero", "Sunwoo Jung", "Theo Nellans", "Everett Platt"] },
    { instrument: "Horn", players: ["Ethan Bergeron", "Thoshika Gali", "SJ Kuk", "Elianna Ma-Zepeta", "Neha Murali", "Tamanna Narayan"] },
    { instrument: "Trombone", players: ["Sevi Cochran", "Prisha Gupta", "Rishi Kotha", "Miles Ledgerwood", "Eli Shadle"] },
    { instrument: "Bass Trombone", players: ["Aaryesh Dasgupta"] },
    { instrument: "Euphonium", players: ["Senuka Abeysinghe", "Aryav Bheemreddy", "Aiden Kim"] },
    { instrument: "Tuba", players: ["Darius Alagar", "Sofia Chaves de Araujo", "Ethan Fisher", "August Power"] },
    { instrument: "Percussion", players: ["Leo Dumapat", "Adam Haas", "Euisung Jung", "Adrian Meono-Monsivais", "Niyanth Raghuram", "Irene Renjith", "Avery Tyler", "William Wood"] },
  ],

  // Optional per-student details, keyed by name. Anything missing falls back
  // to a placeholder in the drafts. Example:
  // "Abbie Ding": { grade: 8, photo: "images/students/abbie-ding.jpg", quote: "..." }
  students: {},

  // ---- Directors --------------------------------------------------------
  directors: [
    {
      name: "Jennifer Bergeron",
      role: "Director of Bands",
      photo: "images/staff/jennifer-bergeron.jpg",
      teaches: "Honor Band · assists Symphonic & Concert Bands",
      bio: `Jennifer Bergeron is in her twenty-first year of teaching and has been a band director at Walsh Middle School in Round Rock, Texas since 2012.

Ms. Bergeron's bands at Walsh have consistently been awarded unanimous first division ratings, Best in Class, and Overall Outstanding Band honors at festivals around the state. The Walsh Honor Band was selected to perform at The Midwest Clinic in December 2021 in Chicago, IL. The program at Walsh consistently earns the distinction as a National Winner in the Foundation for Music Education's Mark of Excellence Competition. In 2019 and 2025, the Walsh Honor Band was recognized in the top 10 CCC bands in the state of Texas. In 2018, the Walsh percussion ensemble was featured at the Percussive Arts Society International Convention as the middle school division winner of the International Percussion Ensemble Competition. Ms. Bergeron is a frequent guest clinician and lecturer.

Under Ms. Bergeron's direction, the students at Walsh have multiple opportunities each year to participate in solo recitals and a prolific chamber music program, as well as concert bands. She is honored to share her passion for music and learning with the Walsh students each day and has the great pleasure of being supported by an outstanding staff who reflect the same desire to provide quality music education.

Ms. Bergeron received her Bachelor of Music Education degree from Louisiana State University, where she participated in numerous performing groups including the Wind Ensemble under the direction of Frank Wickes.`,
      quote: "[Placeholder quote from Ms. Bergeron]",
      quotePlaceholder: true,
    },
    {
      name: "Stone Wang",
      role: "Assistant Director of Bands",
      photo: "images/staff/stone-wang.jpg",
      teaches: "Symphonic Band · assists Honor & Concert Bands",
      bio: `Stone Wang is a Texas native who grew up in Houston. Mr. Wang attended The University of Texas at Austin, where he studied horn under Pat Hughes and received his Bachelor's degree in Music Studies. During his time at UT, he performed in many ensembles including the UT Wind Ensemble under the direction of Jerry Junkin.

Mr. Wang's teaching experience includes a diverse range of students and ensembles. He has been a part of the Phantom Regiment Drum and Bugle Corps brass education staff since the 2019 Drum Corps International season, and is a regular consultant, choreographer, and adjudicator of the marching arts.

Mr. Wang is grateful to be a part of the Walsh Band family and is excited to share his love for music, learning, and community with the students, parents, and teachers of the Walsh Band. In his spare time, he enjoys learning new recipes, lifting weights, reading, and taking naps under the sun in his backyard.`,
      quote: "[Placeholder quote from Mr. Wang]",
      quotePlaceholder: true,
    },
    {
      name: "Zachary Glaser",
      role: "Assistant Director of Bands",
      photo: "images/staff/zachary-glaser.jpg",
      teaches: "Concert & Intermediate Bands · assists Honor & Symphonic Bands",
      bio: `Zachary Glaser, a native of Salem, Oregon, holds a Bachelor of Music in Trombone Performance from Rice University, where he performed in the Shepherd School Symphony Orchestra under the direction of Larry Rachleff as well as numerous chamber groups in Houston. He earned a Master of Music in Wind Conducting Performance from the University of Oregon.

Mr. Glaser has taught a diverse range of ensembles spanning middle school, high school, and collegiate levels, including concert bands, jazz ensembles, chamber groups, and marching bands, as well as conducting and leadership courses. His musical and educational philosophies have been shaped by mentors including Allen Barnhill, Dr. Dennis Llinás, Jerry Hou, Todd Zimbelman, and Carson Keeble.

At Walsh, Mr. Glaser is excited to inspire and nurture the musical talents of his students, fostering a love of music that will last a lifetime. In his leisure time he enjoys reading, cooking, tending to his house plant collection, and discovering new hiking trails.`,
      quote: "[Placeholder quote from Mr. Glaser]",
      quotePlaceholder: true,
    },
  ],

  // ---- Private lesson staff (from the Fall Concert program) -------------
  lessonStaff: [
    { name: "Beth Behning", instrument: "Flute", photo: "images/staff/beth-behning.jpg" },
    { name: "Ji Soo Yoon", instrument: "Flute", photo: "images/staff/ji-soo-yoon.jpg" },
    { name: "Danny Cruz", instrument: "Oboe", photo: "images/staff/danny-cruz.png" },
    { name: "Daniel Zaldana", instrument: "Bassoon", photo: "images/staff/daniel-zaldana.jpg" },
    { name: "Sam Spidle", instrument: "Clarinet", photo: "images/staff/sam-spidle.jpg" },
    { name: "Kevin Gibbs", instrument: "Saxophone", photo: "images/staff/kevin-gibbs.jpg" },
    { name: "Dustin Hunter", instrument: "Saxophone", photo: "images/staff/dustin-hunter.jpg" },
    { name: "Gilbert Elorreaga", instrument: "Trumpet", photo: "images/staff/gilbert-elorreaga.jpg" },
    { name: "Dr. Emily Tourgeman", instrument: "Trumpet", photo: "images/staff/emily-tourgeman.jpg" },
    { name: "Will Paladino", instrument: "Trumpet" },
    { name: "Eileen Kane", instrument: "Horn", photo: "images/staff/eileen-kane.jpg" },
    { name: "Alex Doolittle", instrument: "Trombone & Low Brass", photo: "images/staff/alex-doolittle.jpg" },
    { name: "Ian Vinciguerra", instrument: "Trombone", photo: "images/staff/ian-vinciguerra.jpg" },
    { name: "Miguel Gonzales", instrument: "Euphonium", photo: "images/staff/miguel-gonzales.png" },
    { name: "Zach Bixler", instrument: "Tuba", photo: "images/staff/zach-bixler.jpg" },
    { name: "Jane Botkin", instrument: "Percussion", photo: "images/staff/jane-botkin.png" },
    { name: "Conor Nolan", instrument: "Percussion", photo: "images/staff/conor-nolan.jpg" },
  ],
  lessonStaffIntro: "Our wonderful team of private lesson teachers hold bachelor's, master's, and doctoral degrees from some of the best music institutions in America, including The Juilliard School, The University of Texas, The University of Michigan, Indiana University, Yale University, Louisiana State University, and more.",
  lessonStaffBioPlaceholder: "[Placeholder bio] A short paragraph about this teacher's background, performing career, and how long they have taught Walsh students.",

  // ---- Administration -------------------------------------------------
  administration: [
    { name: "[Principal Name]", role: "Principal, Walsh Middle School", placeholder: true },
    { name: "Jager Loyde", role: "RRISD Fine Arts Director of Instrumental Music" },
    { name: "Tim Lowke", role: "RRISD Fine Arts Director of Visual & Performing Arts" },
  ],

  thanks: "The driving force behind every successful student is a family who truly values their child's education. The Walsh Band staff extends our heartfelt thanks to all parents for their continued support and commitment to their child's musical journey. We are deeply grateful for everything you do to make the Walsh Band program thrive.",
};

/* ---------- Student headshots ----------
 * Cropped from the official Midwest section photos (images/students/<instrument>-N.jpg,
 * numbered left to right in each section photo). Pairings confirmed by the director.
 */
(function () {
  const P = window.PROGRAM;
  const photos = {
    "Scarlet Mobley": "oboe-1",
    "Chasity Coburn": "oboe-2",
    "Zlata Karmalitova": "bassoon-2",
    "Sofia Russell": "bassoon-1",
    "Amelie Pribadi": "flute-6",
    "Abbie Ding": "flute-7",
    "Hyein Lee": "flute-1",
    "Ana Luisa Salcedo": "flute-4",
    "Nancy Liu": "flute-2",
    "Joie Park": "flute-5",
    "Laura Zhao": "flute-3",
    "Navni Prasad": "flute-8",
    "Serena Wang": "clarinet-3",
    "Niki Karthikeyan": "clarinet-2",
    "Jian Park": "clarinet-1",
    "Eshan Nair": "clarinet-4",
    "Connor Lee": "clarinet-9",
    "Jake Hwang": "clarinet-6",
    "Elisabeth Terry": "clarinet-7",
    "Natalia Ybarra": "clarinet-8",
    "Aidan Vu": "clarinet-5",
    "Zack Bingham": "trumpet-1",
    "Yenny Chae": "trumpet-2",
    "Jude Ferrero": "trumpet-6",
    "Malhar Bagal": "trumpet-4",
    "Sunwoo Jung": "trumpet-5",
    "Theo Nellans": "trumpet-7",
    "Everett Platt": "trumpet-3",
    "Elianna Ma-Zepeta": "horn-1",
    "SJ Kuk": "horn-2",
    "Ethan Bergeron": "horn-3",
    "Thoshika Gali": "horn-6",
    "Neha Murali": "horn-5",
    "Tamanna Narayan": "horn-4",
    "Elli Hwang": "alto-saxophone-2",
    "Yuno Mishina": "alto-saxophone-1",
    "Vedha Vigneswaran": "alto-saxophone-3",
    "Ekagra Saksham": "alto-saxophone-4",
    "Hasini Hewa-Kasakarage": "tenor-saxophone-1",
    "Seungyu Kang": "baritone-saxophone-1",
    "Abhinav Kankanala": "bass-clarinet-1",
    "Asmi Alex Thomas": "bass-clarinet-2",
    "Gabriel Zhang": "bass-clarinet-3",
    "Aaryesh Dasgupta": "bass-trombone-1",
    "Prisha Gupta": "trombone-1",
    "Miles Ledgerwood": "trombone-5",
    "Sevi Cochran": "trombone-3",
    "Rishi Kotha": "trombone-4",
    "Eli Shadle": "trombone-2",
    "Senuka Abeysinghe": "euphonium-3",
    "Aiden Kim": "euphonium-2",
    "Aryav Bheemreddy": "euphonium-1",
    "August Power": "tuba-1",
    "Sofia Chaves de Araujo": "tuba-2",
    "Ethan Fisher": "tuba-3",
    "Darius Alagar": "tuba-4",
    "Leo Dumapat": "percussion-1",
    "William Wood": "percussion-4",
    "Niyanth Raghuram": "percussion-3",
    "Adam Haas": "percussion-2",
    "Irene Renjith": "percussion-5",
    "Euisung Jung": "percussion-6",
    "Avery Tyler": "percussion-7",
    "Adrian Meono-Monsivais": "percussion-8",  };
  Object.keys(photos).forEach(name => {
    P.students[name] = Object.assign({ photo: `images/students/${photos[name]}.jpg`, photoConfirmed: true }, P.students[name] || {});
  });
})();

/* ---------- helpers shared by all drafts ---------- */
window.PROGRAM_UTIL = {
  initials(name) {
    return name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/, "").replace(/\[|\]/g, "")
      .split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  },
  hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  },
  student(name, instrument) {
    const d = (window.PROGRAM.students || {})[name] || {};
    const first = name.split(" ")[0];
    return {
      name, instrument,
      grade: d.grade || null,
      photo: d.photo || "",
      quote: d.quote || `[Placeholder quote — a sentence or two from ${first} about what playing at Midwest means to them.]`,
      quotePlaceholder: !d.quote,
    };
  },
  /** Lesson teacher with mock bio/link fallbacks. */
  staff(t) {
    return {
      ...t,
      role: `${t.instrument} · Private Lesson Teacher`,
      bio: t.bio || `[Placeholder bio] ${t.name} teaches private ${t.instrument.toLowerCase()} lessons for Walsh Band students.\n\n[Add their degrees, performing experience, ensembles, and how many years they have taught at Walsh.]`,
      bioPlaceholder: !t.bio,
      link: t.link || "#",
      linkLabel: t.linkLabel || "Studio website",
      linkPlaceholder: !t.link,
    };
  },
  allStudents() {
    return window.PROGRAM.sections.flatMap(s => s.players.map(p => window.PROGRAM_UTIL.student(p, s.instrument)));
  },
  paras(text) { return String(text).split(/\n\s*\n/).map(t => "<p>" + window.PROGRAM_UTIL.esc(t) + "</p>").join(""); },
  /** Tie/sash color (hex) worn by an instrument section. */
  color(instrument) {
    const P = window.PROGRAM;
    return P.tieColors[P.sectionColor[instrument]] || P.tieColors.gold;
  },
  /** CSS gradient of all six tie colors as hard-edged bands (a "sash stripe"). */
  stripe(dir = "90deg") {
    const c = Object.values(window.PROGRAM.tieColors), n = c.length;
    return `linear-gradient(${dir}, ${c.map((x, i) => `${x} ${(i / n * 100).toFixed(2)}% ${((i + 1) / n * 100).toFixed(2)}%`).join(", ")})`;
  },
  /** Section photo group containing an instrument. */
  sectionPhoto(instrument) {
    return window.PROGRAM.sectionPhotos.find(g => g.instruments.includes(instrument));
  },
  /** The section photo group, but only for the FIRST instrument in it (so each photo shows once). */
  sectionPhotoStart(instrument) {
    const g = this.sectionPhoto(instrument);
    return g && g.instruments[0] === instrument ? g : null;
  },
  /** Names in a section photo, in display order (front row first, each row left to right). */
  photoOrder(g) { return g.rows.flatMap(r => r[1]); },
  /** Instrument a student plays (from the roster). */
  instrumentOf(name) {
    const s = window.PROGRAM.sections.find(s => s.players.includes(name));
    return s ? s.instrument : "";
  },
  /** Plain-text caption: "Front row: A, B · Back row: C" (or just the names for a single row). */
  rowsText(g, fmt = n => n) {
    return g.rows.map(([row, names]) => (row ? row + ": " : "") + names.map(fmt).join(", ")).join(" · ");
  },
  /** Names in a section photo group, for captions. */
  sectionPlayers(g) {
    return window.PROGRAM.sections.filter(s => g.instruments.includes(s.instrument)).flatMap(s => s.players);
  },
  slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); },
  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
};
