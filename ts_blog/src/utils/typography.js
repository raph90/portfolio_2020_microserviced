import Typography from 'typography'
import { theme } from './theme'

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: ['DM Serif Display', 'serif'],
  bodyFontFamily: ['Poppins', 'sans-serif'],
  googleFonts: [
    {
      name: 'DM Serif Display',
      styles: ['400'],
    },
    {
      name: 'Poppins',
      styles: ['400'],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      color: '#525252',
    },
    h1: {
      fontSize: '3.2rem',
      color: '#525252',
    },
    p: {
      fontFamily: 'Poppins',
      fontSize: '1.6rem',
      lineHeight: '2.5rem',
    },
    h3: {
      fontSize: '1.8rem',
      marginBottom: '.8rem',
      color: '#525252',
    },
    h2: {
      fontSize: '2.4rem',
    },
    h5: {
      fontSize: '1.2rem',
      color: '#525252',
    },
    a: {
      fontSize: '1.6rem',
      color: 'inherit',
    },
    h4: {
      fontSize: '1.6rem',
      marginBottom: 0,
    },
    ul: {
      margin: 0,
    },
  }),
})
export default typography
