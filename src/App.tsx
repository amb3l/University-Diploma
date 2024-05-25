import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import OrderPageHeader from './components/headers/OrderPageHeader';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { MainPage } from './pages/MainPage';
import { OrderStateContext } from './context/OrderContext';
import { AuthPage } from './pages/AuthPage';
import { CustomRouter } from './components/router/CustomRouter';
import { useAuth } from './hooks/useAuth';
import { AuthContext, UserData } from './context/AuthContext';



function App() {

  return (
    <>
      <UserData>
        <ThemeProvider theme={ theme }>
          <OrderStateContext>
            <CustomRouter />
          </OrderStateContext>
        </ThemeProvider>
      </UserData>
    </>
  )
}

export default App;
