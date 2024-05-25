import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'
import { AuthPage } from '../../pages/AuthPage'
import { ServicesPage } from '../../pages/ServicesPage'
import { LogIn } from '../auth/LogIn'
import { Registraion } from '../auth/Registration'
import { UserPage } from '../../pages/UserPage'
import { PrivateRoute } from './PrivateRoute'


export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <ServicesPage /> } />
      <Route path="/auth" element={ <AuthPage children={ <LogIn/> } /> } />
      <Route path="/auth/reg" element={ <AuthPage children={ <Registraion/>  } /> } />
      <Route path="/services" element={ <ServicesPage /> } />

      <Route element={ <PrivateRoute/> } >
        <Route path="/order" element={ <MainPage /> } />
        <Route path="/me" element={ <UserPage /> } />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  )
}
