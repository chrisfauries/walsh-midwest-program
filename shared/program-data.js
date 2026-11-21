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
    date: "Thursday, December 17, 2026", // placeholder — confirm performance date
    time: "TBD",                         // placeholder — confirm performance time
    venue: "McCormick Place West",       // placeholder — confirm hall/room
    room: "Ballroom W375",               // placeholder
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
    body: "[Placeholder welcome letter from the directors] Thank you for joining us for this once-in-a-lifetime performance. Being invited to perform at The Midwest Clinic is one of the highest honors a school band can receive, and these students have earned every moment on this stage through thousands of hours of practice, sectionals, and Friday rehearsals. We are so proud of them — and so grateful to the families, teachers, and community who made this trip possible.",
    signedBy: "Jennifer Bergeron, Stone Wang & Zachary Glaser",
  },

  // ---- Program order (10 pieces) ----------------------------------------
  pieces: [
    {
      title: "Crosswalk",
      composer: "Dennis Llinás",
      duration: "≈ 4 min",
      placeholder: true,
      description: "A bright, kinetic opener that captures the rush of a busy city intersection — overlapping rhythms, honking brass, and a melody that keeps darting through the traffic.",
      composerBio: "Dennis Llinás is a Cuban-American composer, conductor and music educator whose works for winds blend Latin rhythms with a contemporary American band sound. His music is performed by school and community ensembles across the country.",
      why: "We open with Crosswalk because it is pure energy — every section of the band gets a moment in the spotlight, and it sets the tone for the city that is hosting us.",
    },
    {
      title: "Dystopia",
      composer: "Jay Coles",
      duration: "≈ 5 min",
      placeholder: true,
      description: "A dark, driving work that imagines a world gone wrong. Relentless percussion and biting brass give way to moments of eerie stillness before a fierce finish.",
      composerBio: "Jay Coles is an American composer and educator originally from Detroit, Michigan. His concert band music is known for its cinematic colors, rhythmic drive and strong emotional storytelling.",
      why: "Dystopia challenges our students to play with intensity and control at the same time — a huge step up in maturity of sound.",
    },
    {
      title: "Rozana",
      composer: "Reena Esmail",
      duration: "≈ 5 min",
      placeholder: true,
      description: "Rozana — \"daily\" in Hindi/Urdu — is a lyrical, meditative piece built on a melody that returns again and again, like a daily ritual. It draws on the sound world of Hindustani music.",
      composerBio: "Reena Esmail is an Indian-American composer based in Los Angeles whose work brings together Hindustani and Western classical music. Her music has been commissioned and performed by leading orchestras, choirs and ensembles worldwide.",
      why: "Rozana teaches us to listen. It asks for beautiful, connected phrasing and gives many of our students their first experience with music rooted in a raga.",
    },
    {
      title: "Ogres and Goblins and Trolls, Oh My!",
      composer: "Julie Giroux",
      duration: "≈ 4 min",
      placeholder: true,
      description: "A mischievous romp through a fairy-tale forest full of lumbering ogres, sneaky goblins and grumpy trolls. Expect growling low brass, scurrying woodwinds and plenty of humor.",
      composerBio: "Julie Giroux is an American composer and orchestrator who has worked extensively in film and television and has written well over a hundred works for wind band. Her music is played by ensembles of every level around the world.",
      why: "Because band should be fun! This piece lets the students show off character, color and a little bit of theatre.",
    },
    {
      title: "Simple Suite",
      composer: "Tyler S. Grant",
      duration: "≈ 6 min",
      placeholder: true,
      description: "A suite of short contrasting movements that celebrate the beauty of simple ideas — a folk-like tune, a gentle chorale and a playful dance.",
      composerBio: "[Placeholder bio] Tyler S. Grant is a composer and music educator whose works for young bands are performed across the United States.",
      why: "Simple music is never easy. This suite puts our tone, balance and blend on full display.",
    },
    {
      title: "Frequency",
      composer: "Minoo Dixon",
      duration: "≈ 4 min",
      placeholder: true,
      description: "Inspired by sound waves and signals, Frequency pulses with layered ostinatos that tune in and out of focus before locking into a powerful, unified groove.",
      composerBio: "[Placeholder bio] Minoo Dixon is a composer and educator writing music for school and professional wind ensembles.",
      why: "Frequency is a masterclass in rhythmic precision — every player has to be locked in with the rest of the band.",
    },
    {
      title: "Pale Blue Dot",
      composer: "James M. David",
      duration: "≈ 6 min",
      placeholder: true,
      description: "Named for the famous 1990 Voyager 1 photograph of Earth taken from nearly four billion miles away, this piece reflects on how small — and how precious — our home really is.",
      composerBio: "James M. David is an American composer and professor of composition at Colorado State University. His wind music is widely performed and frequently explores science, nature and history.",
      why: "Pale Blue Dot is the emotional heart of our program. It gives the students a chance to play with real depth and perspective.",
    },
    {
      title: "Street Music",
      composer: "Aakash Mittal",
      duration: "≈ 5 min",
      placeholder: true,
      description: "A vibrant portrait of the sounds of the street — vendors, buskers, traffic and conversation — woven into a joyful, rhythmic collage.",
      composerBio: "Aakash Mittal is a saxophonist and composer whose music draws from jazz, Hindustani music and contemporary classical traditions.",
      why: "Street Music lets the band groove. It is full of rhythm and personality, and the students love playing it.",
    },
    {
      title: "The Way We Do Anything...",
      composer: "Randall Standridge",
      duration: "≈ 5 min",
      placeholder: true,
      description: "Titled after the Walsh Band motto — \"The way we do anything is the way we do everything\" — this piece celebrates hard work, attention to detail and pride in doing things the right way.",
      composerBio: "Randall Standridge is an American composer, arranger and band director from Arkansas whose energetic works for concert band are performed worldwide.",
      why: "This one is personal. Our motto is in the title, and it reminds every student why the small details matter.",
    },
    {
      title: "Dancing in the Sun",
      composer: "Nathan Hervey",
      duration: "≈ 4 min",
      placeholder: true,
      description: "A radiant, celebratory closer full of syncopated rhythms and soaring melodies — a musical burst of sunshine to end the program.",
      composerBio: "[Placeholder bio] Nathan Hervey is a composer whose music for wind band is known for its warmth and rhythmic energy.",
      why: "We wanted to end the way we feel about this trip: joyful, bright and grateful.",
    },
  ],

  // ---- Full band photo --------------------------------------------------
  bandPhoto: {
    photo: "", // e.g. "images/full-band.jpg"
    caption: "The 2026–2027 Walsh Middle School Honor Band",
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
  allStudents() {
    return window.PROGRAM.sections.flatMap(s => s.players.map(p => window.PROGRAM_UTIL.student(p, s.instrument)));
  },
  paras(text) { return String(text).split(/\n\s*\n/).map(t => "<p>" + window.PROGRAM_UTIL.esc(t) + "</p>").join(""); },
  slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); },
  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
};
