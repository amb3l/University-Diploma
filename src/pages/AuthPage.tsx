import Header from '../components/Header'
import { MainMapContainer } from '../components/MainMapContainer(legacy)'
import { ServicePanelWrapper } from '../components/ServicePanelWrapper'
import { ServicePanel } from '../components/ServicePanel'
import { Box, Typography } from '@mui/material'
import { PasspWrapper } from '../components/auth/PasspWrapper'
import { PasspContent } from '../components/auth/PasspContent'
import { DetailsBlock } from '../components/details_block/DetailsBlock'
import { LogIn } from '../components/auth/LogIn'

export const AuthPage = () => {

  const handleSubmitForm = () => {
    // проверить, заполнены ли поля, собрать объект, отправить запрос

    console.log('submitted')
    return ''
  }

  return (
    <div className='auth-bg'>
      
        
        <PasspWrapper>
          <PasspContent>
            
            <LogIn />

          </PasspContent>
        </PasspWrapper>


    </div>
  )
}