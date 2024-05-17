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



function App() {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <Header />
          <MainPage />
      </ThemeProvider>
    </>
  )
}

export default App;
