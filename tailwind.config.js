/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#166534',
          hover: '#14532D',
          950: '#0a2e1a',
        },
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        industrial: {
          orange: '#F97316',
        },
        warm: {
          white: '#FAFAF8',
        },
        border: {
          DEFAULT: '#E5E7EB',
        },
        ink: {
          DEFAULT: '#1F2937',
          sub: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.03), 0 4px 12px rgba(15, 23, 42, 0.04)',
        card: '0 1px 2px rgba(15, 23, 42, 0.03), 0 6px 16px rgba(15, 23, 42, 0.05)',
        lift: '0 8px 24px -8px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        xl2: '12px',
      },
      backgroundImage: {
        'steel-diagonal': 'linear-gradient(135deg, #0F172A 0%, #16213a 100%)',
      },
    },
  },
  plugins: [],
};
