import Typography from 'typography'
import { theme } from './theme'

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['100', '300', '600', '700'],
    },
    {
      name: 'Raleway',
      styles: ['500'],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      color: 'white',
      backgroundColor: '#465F6A',
      paddingTop: '4rem',
    },
    h3: {
      fontSize: '1.8rem',
      marginBottom: '.8rem',
    },
    h2: {
      fontSize: '2.4rem',
    },
    h1: {
      fontSize: '2.8rem',
      color: 'white',
      marginBottom: '1rem',
    },
    h4: {
      fontSize: '1.6rem',
      marginBottom: 0,
      fontWeight: 600,
    },
    ul: {
      margin: 0,
    },
  }),
})
export default typography
