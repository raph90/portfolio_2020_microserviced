import Typography from "typography"

export const colors = {
  mainGrey: "#707070",
  lightGrey: "#E0E0E0",
  color1: " #355070ff",
  color2: "#6d597aff",
  color3: "#b56576ff",
  color4: "#e56b6fff",
  color5: "#eaac8bff",
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
      lineHeight: 1.4,
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
