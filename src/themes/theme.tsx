import { createTheme } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c1814',
    },
    secondary: {
      main: '#dcbd00',
    },
    info: {
      main: '#02a2d1',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: '0px 0px 15px 15px',
          opacity: 0.95,
          background: 'linear-gradient(90deg, #312d28 60%, #534F47 90%)'
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