/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        50: '54%'
      },
      margin: {
        14: '3.2rem',
        15: '3.8rem'
      },
      spacing: {
        36: '9rem',
        128: '32rem'
      },
      screens: {
        xxl: '1366px'
        // xxxl: '1920px',
        // xlsc: '2560px'
      }
    }
  },
  variants: {},
  plugins: []
}
