/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'rootstock-headline': ['Rootstock Sans Headline', 'system-ui', 'sans-serif'],
        'rootstock-body':    ['Rootstock Sans Body',    'system-ui', 'sans-serif'],
        'rootstock-tags':    ['Rootstock Sans Tags',    'system-ui', 'sans-serif'],
        // Convenience aliases
        sans:     ['Rootstock Sans Body',    'system-ui', 'sans-serif'],
        display:  ['Rootstock Sans Headline','system-ui', 'sans-serif'],
      },
      colors: {
        rootstock: {
          orange: '#FF9100',
          pink:   '#FF71E1',
          green:  '#79C600',
          purple: '#9E76FF',
          cyan:   '#08FFD0',
          lime:   '#DEFF1A',
          white:  '#FAF9F5',
          black:  '#000000',
        },
      },
      fontSize: {
        'rsk-h1':   ['3rem',    { lineHeight: '1.1' }],
        'rsk-h2':   ['2.25rem', { lineHeight: '1.2' }],
        'rsk-h3':   ['1.75rem', { lineHeight: '1.25' }],
        'rsk-body': ['1rem',    { lineHeight: '1.6' }],
        'rsk-tag':  ['0.75rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
