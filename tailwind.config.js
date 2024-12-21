/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector'],
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        appear: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        cloud: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(calc(-100% - 4rem))'},
        },
        marquee: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(calc(-100% - var(--gap)))'},
        },
        marqueevertical: {
          from: {transform: 'translateY(0)'},
          to: {transform: 'translateY(calc(-100% - var(--gap)))'},
        },
        fade: {
          from: {opacity: '0'},
          to: {opacity: '1'},
        },
        fizzle: {
          '0%': {opacity: 0, transform: 'translateY(8px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
      animation: {
        appear: 'appear 1s ease-in-out',
        cloud: 'cloud 30s linear infinite',
        marquee: 'marquee var(--duration) linear infinite',
        marqueevertical: 'marqueevertical var(--duration) linear infinite',
        fade: 'fade 0.5s ease-in',
        fizzle: 'fizzle 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
