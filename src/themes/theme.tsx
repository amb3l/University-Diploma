import { createTheme } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#292528',
    },
    secondary: {
      main: '#ffd300',
    },
    error: {
      main: '#e7133f',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: '0px 0px 15px 15px',
        }
      }
    },
    MuiAutocomplete : {
      styleOverrides: {
        paper: {
          borderRadius: '1rem',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .MuiOutlinedInput-notchedOutline`]: {
            borderWidth: 0
          }
        }
      }
    }
  }
}) 