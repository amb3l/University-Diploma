import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/OrderPageHeader';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { MainPage } from './pages/MainPage';
import { OrderStateContext } from './context/OrderContext';
import { AuthPage } from './pages/AuthPage';
import { CustomRouter } from './components/CustomRouter';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/AuthContext';



function App() {
  const { user, login, logout, setUser } = useAuth();

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <ThemeProvider theme={ theme }>
          <OrderStateContext>
            <CustomRouter />
          </OrderStateContext>
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  )
}

export default App;
