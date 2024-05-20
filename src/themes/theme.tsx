import { createTheme } from '@mui/material/styles';

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
          boxShadow: 'none',
          background: 'linear-gradient(90deg, #29231A 57%, #534F47 90%)'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingTop: '12px',
          paddingBottom: '12px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }
      }
    },
  }
}) 