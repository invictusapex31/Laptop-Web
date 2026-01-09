/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        deepBlack: '#0a0a0a',
        charcoal: '#1f1f1f',
        aluminumGray: '#4a4a4a',
        warningAmber: '#ffa726',
        successGreen: '#4caf50',
        infoBlue: '#2196f3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': '72px',
        'section': '48px',
      },
      boxShadow: {
        'elevated': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
