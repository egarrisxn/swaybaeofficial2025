const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector'],
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        display: ['var(--font-display)'],
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
        accordionDown: {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        accordionUp: {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        appear: {from: {opacity: '0'}, to: {opacity: '1'}},
        cloud: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(calc(-100% - 4rem))'},
        },
        fade: {
          from: {opacity: '0'},
          to: {opacity: '1'},
        },
        fizzle: {
          '0%': {opacity: 0, transform: 'translateY(8px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        marquee: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(calc(-100% - var(--gap)))'},
        },
        marqueeVertical: {
          from: {transform: 'translateY(0)'},
          to: {transform: 'translateY(calc(-100% - var(--gap)))'},
        },

        slideDownAndFade: {
          from: {opacity: '0', transform: 'translateY(-2px)'},
          to: {opacity: '1', transform: 'translateY(0)'},
        },
        slideLeftAndFade: {
          from: {opacity: '0', transform: 'translateX(2px)'},
          to: {opacity: '1', transform: 'translateX(0)'},
        },
        slideUpAndFade: {
          from: {opacity: '0', transform: 'translateY(2px)'},
          to: {opacity: '1', transform: 'translateY(0)'},
        },
        slideRightAndFade: {
          from: {opacity: '0', transform: 'translateX(-2px)'},
          to: {opacity: '1', transform: 'translateX(0)'},
        },
      },
      animation: {
        accordionDown: 'accordionDown0.2s ease-out',
        accordionUp: 'accordionUp 0.2s ease-out',
        appear: 'appear 1s ease-in-out',
        cloud: 'cloud 30s linear infinite',
        fade: 'fade 0.5s ease-in',
        fizzle: 'fizzle 0.3s ease-in-out forwards',
        marquee: 'marquee var(--duration) linear infinite',
        marqueeVertical: 'marqueeVertical var(--duration) linear infinite',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
