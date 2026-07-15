import { TypographyOptions } from '@mui/material/styles/createTypography'

export const fontFamily = ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'].join(',')

export const headingFontFamily = ['"Cormorant Garamond"', 'Georgia', 'serif'].join(',')

const headingLineHeight = 1.25

const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: headingFontFamily,
    fontSize: 40,
    lineHeight: headingLineHeight,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: headingFontFamily,
    fontSize: 34,
    lineHeight: headingLineHeight,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: headingFontFamily,
    fontSize: 28,
    lineHeight: headingLineHeight,
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: headingFontFamily,
    fontSize: 24,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  h5: {
    fontFamily,
    fontSize: 17,
    lineHeight: 1.4,
    fontWeight: 600,
  },
  h6: {
    fontFamily,
    fontSize: 15,
    lineHeight: 1.4,
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.925rem',
    lineHeight: 1.65,
  },
  subtitle1: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: '0.825rem',
    lineHeight: 1.55,
  },
  button: {
    fontFamily,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'none',
  },
}

export default typography
