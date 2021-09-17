import {createTheme} from '@mui/material'

export const defaultTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {}
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#f0f0f0'
        }
      }
    }
  }
})
