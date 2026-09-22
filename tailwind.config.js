/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#565254',
          dark: '#3f3c3e',
          light: '#656163',
          surface: '#484446',
          deep: '#363335',
        },
        snow: {
          DEFAULT: '#FFFBFE',
          dim: '#e8e4e7',
          subtle: '#c7c3c6',
        },
        golden: {
          DEFAULT: '#EB9C00',
          hover: '#f5a60a',
          dark: '#b37700',
          glow: 'rgba(235, 156, 0, 0.25)',
        },
        grey: {
          DEFAULT: '#7A7D7D',
          light: '#9da0a0',
          dark: '#636666',
          border: 'rgba(122, 125, 125, 0.35)',
          line: 'rgba(122, 125, 125, 0.25)',
        },
        ember: {
          DEFAULT: '#C90101',
          node: '#ff2a2a',
          glow: 'rgba(201, 1, 1, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'technical': '0 0 0 1px rgba(122, 125, 125, 0.3), 0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'technical-glow': '0 0 0 1px #EB9C00, 0 12px 30px -4px rgba(235, 156, 0, 0.25)',
        'node-glow': '0 0 10px #C90101',
      },
    },
  },
  plugins: [],
}
