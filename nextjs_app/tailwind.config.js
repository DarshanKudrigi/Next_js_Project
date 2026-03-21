/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        quicksale: {
          bg: '#FAFAF8',
          card: '#FFFFFF',
          brand: '#E8441A',
          'brand-hover': '#C73A15',
          primary: '#1A1A1A',
          muted: '#6B7280',
          'input-border': '#E0DDD8',
          error: '#DC2626',
          divider: '#EEEBE6',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.35s ease',
        spin: 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}
