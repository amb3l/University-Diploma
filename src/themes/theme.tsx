import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c1814',
    },
    secondary: {
      main: '#4db6ac',
    },
    info: {
      main: '#02a2d1',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: '0px 0px 16px 16px',
          opacity: 0.95,
          background: 'linear-gradient(90deg, #100B02 40%, #2F2921 80%)'
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
    }
  }
  
}) 