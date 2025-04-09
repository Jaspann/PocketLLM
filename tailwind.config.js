/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
  presets: [require('@lynx-js/tailwind-preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
