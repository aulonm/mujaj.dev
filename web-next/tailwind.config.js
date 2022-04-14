module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        // Override Tailwinds default prose width of 60 chars to 48. Roughly 590 pixels
        prose: '48ch',
      },
      screens: {
        // replicate the smaller than breakpoint from Windi. Even though we are mobile first, it is really nice with an escape hatch sometimes
        '<md': { max: '767.9px' },
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
