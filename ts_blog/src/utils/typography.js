import Typography from "typography"

const typography = new Typography({
    baseFontSize: "10px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Montserrat"
    ],
    bodyFontFamily: ["Raleway", "sans-serif"],
    googleFonts: [{
        name: 'Montserrat',
        styles: [
            '600',
            '700',
        ],
    },
    {
        name: "Raleway",
        styles: [
            "500"
        ]
    }

    ],
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        h3: {
            fontSize: "1.8rem"
        },

    })
})
export default typography