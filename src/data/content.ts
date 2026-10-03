export const imagePath = (filename: string) => new URL(`../../image/${filename}`, import.meta.url).href;

export const navItems = ['HOME', 'CREW', 'STORY', 'DEVIL FRUITS', 'BOUNTIES', 'WORLD'] as const;

export const toSectionId = (label: string) => `#${label.toLowerCase().replace(/\s+/g, '-')}`;

export type CrewMember = {
  name: string;
  role: string;
  bounty: string;
  description: string;
  quote: string;
  src: string;
};

export type StoryArc = {
  title: string;
  years: string;
  description: string;
  image: string;
};

export type DevilFruit = {
  name: string;
  type: string;
  description: string;
  accent: string;
  image: string;
};

export type WorldStop = {
  name: string;
  x: string;
  y: string;
};

export const crew: CrewMember[] = [
  {
    name: 'Monkey D. Luffy',
    role: 'Captain',
    bounty: '฿ 3,000,000,000',
    description: 'A dreamer who sets sail for freedom and the title of Pirate King.',
    quote: 'A pirate is someone who frees themselves from the world and chases their own dream.',
    src: imagePath('MONKEY D. LUFFY.jpg'),
  },
  {
    name: 'Roronoa Zoro',
    role: 'Swordsman',
    bounty: '฿ 1,111,000,000',
    description: 'A relentless swordsman sworn to become the world’s greatest blade master.',
    quote: 'I’m going to become the strongest swordsman in the world.',
    src: imagePath('RORONOA ZORO.jpg'),
  },
  {
    name: 'Nami',
    role: 'Navigator',
    bounty: '฿ 366,000,000',
    description: 'A brilliant cartographer chasing a map of the world and her own freedom.',
    quote: 'I won’t let anyone turn this sea into a prison.',
    src: imagePath('NAMI.jpeg'),
  },
  {
    name: 'Usopp',
    role: 'Sniper',
    bounty: '฿ 500,000,000',
    description: 'A fearless storyteller who turns courage into the bravest kind of strength.',
    quote: 'I can do anything as long as I believe in myself.',
    src: imagePath('USOPP.jpg'),
  },
  {
    name: 'Sanji',
    role: 'Cook',
    bounty: '฿ 1,032,000,000',
    description: 'A master chef with a vow to protect everyone he loves on the sea.',
    quote: 'No one will ever touch my crew while I can still move.',
    src: imagePath('SANJI.jpg'),
  },
  {
    name: 'Tony Tony Chopper',
    role: 'Doctor',
    bounty: '฿ 1000',
    description: 'A reindeer doctor whose heart and resolve are as big as the ocean itself.',
    quote: 'The sea is full of miracles and I want to help as many people as I can.',
    src: imagePath('TONY TONY CHOPPER.jpg'),
  },
  {
    name: 'Nico Robin',
    role: 'Archaeologist',
    bounty: '฿ 790,000,000',
    description: 'A historian of forgotten truths who walks the world seeking what answers remain.',
    quote: 'History is written by those who survive and remember.',
    src: imagePath('NICO ROBIN.jpg'),
  },
  {
    name: 'Franky',
    role: 'Shipwright',
    bounty: '฿ 394,000,000',
    description: 'A powerhouse craftswoman whose brilliance keeps the crew sailing onward.',
    quote: 'This ship is our home—and we’ll make it stronger than ever.',
    src: imagePath('FRANKY.jpg'),
  },
  {
    name: 'Brook',
    role: 'Musician',
    bounty: '฿ 383,000,000',
    description: 'A soul-powered swordsman whose music keeps the crew smiling through every storm.',
    quote: 'Even after death, I can still keep dancing through the night.',
    src: imagePath('BROOK.jpg'),
  },
  {
    name: 'Jinbe',
    role: 'Helmsman',
    bounty: '฿ 1,100,000,000',
    description: 'A noble warrior whose strength and calm guide the crew through the roughest seas.',
    quote: 'A pirate’s true strength is measured by the bonds he protects.',
    src: imagePath('JINBE.jpg'),
  },
];

export const storyArcs: StoryArc[] = [
  { title: 'East Blue', years: '1st Saga', description: 'A young Luffy begins his voyage, gathering a crew and chasing a life beyond the ordinary.', image: imagePath('EAST BLUE.jpg') },
  { title: 'Alabasta', years: 'Alabasta Arc', description: 'The crew faces a kingdom in crisis and learns the cost of standing for justice.', image: imagePath('ALABASTA.jpg') },
  { title: 'Skypiea', years: 'Sky Island', description: 'The clouds open into a new world of gods, myths, and impossible truths.', image: imagePath('SKYPIEA.jpg') },
  { title: 'Enies Lobby', years: 'Water 7', description: 'Friendship is tested as the crew confronts a battle for home and belonging.', image: imagePath('ENIES LOBBY.jpg') },
  { title: 'Thriller Bark', years: 'Mystic Island', description: 'The crew crosses a haunted island where shadows and dead dreams linger.', image: imagePath('THRILLER BARK.jpg') },
  { title: 'Marineford', years: 'War at Sea', description: 'The world trembles as loyalties, justice, and sacrifice collide on the battlefield.', image: imagePath('MARINEFORD.jpg') },
  { title: 'Fish-Man Island', years: 'Ancient Depths', description: 'Beneath the surface, the dreams of an entire world rise toward the surface.', image: imagePath('FISH-MAN ISLAND.jpg') },
  { title: 'Dressrosa', years: 'Kingdom of Smiles', description: 'A kingdom of masks and power reveals the price of freedom and hope.', image: imagePath('DRESSROSA.jpg') },
  { title: 'Wano', years: 'Land of Samurai', description: 'A legendary battle expands the crew’s journey into a war for history itself.', image: imagePath('WANO.jpg') },
  { title: 'Egghead', years: 'Future of Science', description: 'The voyage enters the frontier of intellect, fate, and the unknown world ahead.', image: imagePath('EGGHEAD.jpg') },
];

export const devilFruits: DevilFruit[] = [
  { name: 'Gomu Gomu no Mi', type: 'Paramecia', description: 'A rubber body that turns the user into an invincible force of motion and impact.', accent: 'from-rose-400 to-orange-500', image: imagePath('GOMU GOMU NO MI.jpg') },
  { name: 'Mera Mera no Mi', type: 'Logia', description: 'A blazing power that lets the user become living flame and rewrite the battlefield.', accent: 'from-orange-400 to-red-600', image: imagePath('MERA MERA NO MI.jpg') },
  { name: 'Hito Hito no Mi', type: 'Zoan', description: 'A transformative beast form with enhanced power, scale, and fierce control.', accent: 'from-amber-300 to-yellow-500', image: imagePath('HITO HITO NO MI.jpg') },
  { name: 'Kilo Kilo no Mi', type: 'Paramecia', description: 'A density-shifting fruit that can become devastatingly heavy or eerily light.', accent: 'from-sky-400 to-cyan-500', image: imagePath('KILO KILO NO MI.jpg') },
  { name: 'Yami Yami no Mi', type: 'Logia', description: 'Darkness itself becomes a weapon, swallowing light, power, and possibility.', accent: 'from-slate-500 to-indigo-600', image: imagePath('YAMI YAMI NO MI.jpg') },
  { name: 'Suke Suke no Mi', type: 'Logia', description: 'An elusive fruit that bends the laws of visibility and stealth to impossible ends.', accent: 'from-violet-500 to-fuchsia-500', image: imagePath('Suke_Suke_no_Mi_.webp') },
];

export const worldStops: WorldStop[] = [
  { name: 'East Blue', x: '18%', y: '72%' },
  { name: 'Alabasta', x: '38%', y: '48%' },
  { name: 'Skypiea', x: '52%', y: '22%' },
  { name: 'Water 7', x: '46%', y: '54%' },
  { name: 'Sabaody', x: '58%', y: '60%' },
  { name: 'Marineford', x: '72%', y: '52%' },
  { name: 'Fish-Man Island', x: '70%', y: '70%' },
  { name: 'Dressrosa', x: '78%', y: '42%' },
  { name: 'Wano', x: '88%', y: '28%' },
  { name: 'Egghead', x: '90%', y: '14%' },
];

export const quoteWords = ['DREAMS', 'FREEDOM', 'FRIENDSHIP', 'ADVENTURE'];
