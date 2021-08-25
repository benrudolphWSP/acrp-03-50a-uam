module.exports = {
  // mode: "jit",
  purge: {
    content: ['./**/*.html', './src/**/*.md', './**/*.aspx'],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      text: 'var(--color-text)',
      links: 'var(--color-links)',
      dark: 'var(--color-dark-gray)',
      light: 'var(--color-light-gray)',
      gray: 'var(--color-gray)',
      white: 'var(--color-white)',
      transparent: 'transparent',
    },
    fontFamily: {
      headers: ['Source Sans Pro', 'sans-serif'],
      copy: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      fill: (theme) => ({
        current: 'currentColor',
        primary: theme('colors.primary'),
        secondary: theme('colors.secondary'),
        accent: theme('colors.accent'),
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
  ],
};
