import Typography from "typography"

const typography = new Typography({
  title: "jasonTheme",
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Lora',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],  
  headerFontFamily: ["Lora", "serif"],
  bodyFontFamily: ["Lora", "serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    'h1,h2,h3,a,p': {
      marginBottom: rhythm(1/2),
    },
    a: {
      color: '#FD5825',
      textDecoration: 'none',
      transition: 'color 600ms ease',
    },
    'a:hover': {
      color: '#B0340D',
    },
    blockquote: {
      ...adjustFontSizeTo('19px'),
      fontStyle: 'italic',
    },
  })
})

export default typography