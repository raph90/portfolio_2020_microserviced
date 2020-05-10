import Typography from "typography"

export const colors = {
  mainGrey: "#707070",
}

const raphTypography = {
  baseFontSize: "10px",
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  overrideStyles: () => ({
    h1: {
      fontSize: "3.2rem",
      color: colors.mainGrey,
      fontWeight: 300,
      lineHeight: 1.6,
    },
  }),
}

const typography = new Typography(raphTypography)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
