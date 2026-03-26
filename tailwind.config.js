/* eslint-disable object-curly-spacing */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  darkMode: 'class', // enables dark mode via a 'dark' class on html/body
  theme: {
    extend: {
      colors: { "tertiary-fixed": "#79f7ea", "on-tertiary-container": "#85fff2", "background": "#0d131f", "on-tertiary": "#003733", "tertiary-container": "#00776f", "on-secondary-container": "#302a00", "primary-container": "#2b6cb0", "surface-container": "#1a202c", "secondary": "#dcc748", "primary": "#a2c9ff", "tertiary-fixed-dim": "#5adace", "on-tertiary-fixed": "#00201d", "on-secondary-fixed-variant": "#514700", "surface-bright": "#333946", "surface-container-low": "#161c27", "surface-dim": "#0d131f", "surface-container-lowest": "#080e1a", "secondary-fixed": "#fae361", "inverse-on-surface": "#2a303d", "surface-variant": "#2f3542", "primary-fixed": "#d3e4ff", "surface-container-high": "#242a36", "outline-variant": "#414750", "inverse-primary": "#1960a3", "on-error-container": "#ffdad6", "tertiary": "#5adace", "on-primary-fixed-variant": "#004881", "on-tertiary-fixed-variant": "#00504a", "on-primary-container": "#e1ecff", "on-primary-fixed": "#001c38", "on-secondary-fixed": "#201c00", "on-surface-variant": "#c1c7d2", "on-error": "#690005", "error-container": "#93000a", "surface": "#0d131f", "primary-fixed-dim": "#a2c9ff", "on-background": "#dde2f3", "outline": "#8b919c", "on-surface": "#dde2f3", "secondary-container": "#a3910d", "on-primary": "#00315c", "secondary-fixed-dim": "#dcc748", "surface-container-highest": "#2f3542", "error": "#ffb4ab", "inverse-surface": "#dde2f3", "on-secondary": "#383000", "surface-tint": "#a2c9ff" },
      fontFamily: { "headline": ["Space Grotesk"], "body": ["Inter"], "label": ["Work Sans"] }, 
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
