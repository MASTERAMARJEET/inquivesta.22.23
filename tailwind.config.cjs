const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'red-brand': '#DB1F26',
        'yellow-brand': '#F6841F',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })
    }),
  ],
}
