module.exports = {
  // mode: "jit",
  purge: {
    content: ['./**/*.html', './src/**/*.md', './src/**/*.js', './**/*.aspx'],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      primary: {
        light: 'var(--color-primary-light)',
        DEFAULT: 'var(--color-primary)',
        dark: 'var(--color-primary-dark)',
      },
      secondary: 'var(--color-secondary)',
      accent: {
        DEFAULT: 'var(--color-accent)',
        light: 'var(--color-accent-light)',
      },
      text: 'var(--color-text)',
      links: 'var(--color-links)',
      ocean: 'var(--color-ocean)',
      orange: 'var(--color-orange)',
      yellow: 'var(--color-yellow)',
      green: 'var(--color-green)',
      dark: 'var(--color-dark-gray)',
      light: 'var(--color-light-gray)',
      gray: 'var(--color-gray)',
      error: 'var(--color-error)',
      white: 'var(--color-white)',
      'real-white': 'var(--color-real-white)',
      black: 'var(--color-black)',
      transparent: 'transparent',
    },
    fontFamily: {
      headers: ['Usual', 'sans-serif'],
      smallHeaders: ['Open Sans', 'sans-serif'],
      copy: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fill: (theme) => ({
        current: 'currentColor',
        primary: theme('colors.primary'),
        secondary: theme('colors.secondary'),
        accent: theme('colors.accent'),
        text: theme('colors.text'),
        links: theme('colors.links'),
        gold: theme('colors.gold'),
        dark: theme('colors.dark'),
        light: theme('colors.light'),
        gray: theme('colors.gray'),
        white: theme('colors.white'),
      }),
      gridTemplateColumns: {
        header: '1fr 1fr',
      },
      gridTemplateRows: {
        header: '6rem auto',
        card: '4.5rem 1fr',
      },
      minHeight: {
        card: '19.875rem',
      },
      height: {
        '90p': '90%',
      },
      maxWidth: {
        800: '50rem',
      },
      transitionProperty: {
        top: 'top',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        bigger: '120%',
      },
      borderWidth: {
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
      },
      listStyle: {
        'lower-alpha': 'lower-alpha'
      }
    },
    animation: {
      moveup: 'moveUp 0.25s ease-in-out',
      movedown: 'moveDown 0.25s ease-in-out',
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      backgroundSize: ['hover', 'focus'],
      position: ['group-hover'],
      fill: ['group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
