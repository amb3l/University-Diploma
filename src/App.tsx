import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { MainPage } from './pages/MainPage';
import { OrderState } from './components/context/OrderContext';



function App() {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <OrderState>
          <MainPage />
        </OrderState>
      </ThemeProvider>
    </>
  )
}

export default App;
