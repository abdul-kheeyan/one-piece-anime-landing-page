/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        pirate: '0 30px 80px rgba(6, 13, 23, 0.7)',
      },
      colors: {
        ocean: '#071b2a',
        marine: '#0b2d42',
        ember: '#d6452d',
        parchment: '#e9dcc1',
        gold: '#e2bf74',
      },
      backgroundImage: {
        ocean: 'radial-gradient(circle at top, rgba(40,122,180,0.22), transparent 35%), linear-gradient(180deg, #04131d 0%, #061c29 25%, #091e2a 100%)',
      },
    },
  },
  plugins: [],
}

