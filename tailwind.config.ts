import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bkg: '#150E28',
        gradientx: '#FE34B9',
        gradienty: '#903AFF',
        cpurple: '#903AFF',
        cpink: '#D434FE',
        white: '#FFFFFF',
        gray: '#1E1E1E'
      },
    },
  },
  plugins: [],
}
export default config
