/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        accent: '#64ffda',
        heading: '#ccd6f6',
        subheading: '#8892b0',
        body: '#a8b2d1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'var(--font-inter)'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}