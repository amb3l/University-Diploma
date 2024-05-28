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
import { AuthContext, AuthProvider } from './context/AuthContext';
import { EditUserModal } from './components/user_page/modal/EditUserModal';
import { ModalState } from './context/ModalContext';



function App() {

  return (
    <>
      <AuthProvider>
        <ModalState>
          <ThemeProvider theme={ theme }>
            <OrderStateContext>
              <CustomRouter />
            </OrderStateContext>
          </ThemeProvider>
        </ModalState>
      </AuthProvider>
    </>
  )
}

export default App;
