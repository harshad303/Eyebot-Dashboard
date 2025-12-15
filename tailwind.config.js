/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Eyebot Brand Colors (from design system document)
        'eyebot-purple': '#3C23E1',        // Primary brand - footer, key actions
        'eyebot-purple-light': '#8686F9',  // Secondary - hover on dark backgrounds
        'eyebot-dark': '#261E36',          // Mission statement sections

        // Eyebot Backgrounds
        'eyebot-white': '#FFFFFF',         // Cards, hero sections
        'eyebot-warm': '#F7F2EE',          // Content sections, warm neutral

        // Status Colors (adapted from their system)
        'success': '#00E5A0',
        'warning': '#FFB800',
        'danger': '#FF4757',
        'info': '#2E5BFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

