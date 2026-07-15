import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

import typography from './typography'
import paletteBase from './palette-base'
import paletteLight from './palette-light'
import paletteDark from './palette-dark'
import shadows from './shadows'

const createTheme = (darkMode?: boolean): Theme => {
  const palette = darkMode ? { ...paletteBase, ...paletteDark } : { ...paletteBase, ...paletteLight }
  return createMuiTheme({
    palette,
    typography,
    shadows,
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              'radial-gradient(1200px 600px at 10% -10%, rgba(11, 61, 145, 0.08), transparent 55%), radial-gradient(900px 500px at 100% 0%, rgba(79, 140, 255, 0.1), transparent 50%), linear-gradient(180deg, #F7F9FD 0%, #F3F6FC 40%, #EEF2F9 100%)',
            backgroundAttachment: 'fixed',
            minHeight: '100%',
          },
          '::selection': {
            backgroundColor: 'rgba(11, 61, 145, 0.18)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.02em',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
          rounded: {
            borderRadius: 18,
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  })
}

const theme = createTheme(false)

export { paletteBase, paletteLight, paletteDark, typography, shadows }
export default theme
