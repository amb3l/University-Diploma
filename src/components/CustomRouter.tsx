import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { AuthPage } from '../pages/AuthPage'
import { ServicesPage } from '../pages/ServicesPage'


export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/order" element={ <MainPage/> } />
      <Route path="/auth" element={ <AuthPage /> } />
      <Route path="/services" element={ <ServicesPage /> } />
    </Routes>
  )
}
