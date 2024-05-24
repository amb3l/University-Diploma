import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { AuthPage } from '../pages/AuthPage'
import { ServicesPage } from '../pages/ServicesPage'
import { LogIn } from './auth/LogIn'
import { Registraion } from './auth/Registration'


export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/order" element={ <MainPage /> } />
      <Route path="/auth" element={ <AuthPage children={ <LogIn/> } /> } />
      <Route path="/auth/reg" element={ <AuthPage children={ <Registraion/>  } /> } />
      <Route path="/services" element={ <ServicesPage /> } />
    </Routes>
  )
}
