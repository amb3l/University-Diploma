import { PasspWrapper } from '../components/auth/PasspWrapper'
import { PasspContent } from '../components/auth/PasspContent'
import { DetailsBlock } from '../components/details_block/DetailsBlock'
import { LogIn } from '../components/auth/LogIn'
import React from 'react'

export const AuthPage = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    
      <div className='auth-bg' />  
        
      <PasspWrapper>
        <PasspContent>
          
          { children }

        </PasspContent>
      </PasspWrapper>

    </>
  )
}