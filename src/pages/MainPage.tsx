import Header from '../components/Header'
import { MainMapContainer } from '../components/MainMapContainer(legacy)'
import { ServicePanelWrapper } from '../components/ServicePanelWrapper'
import { ServicePanel } from '../components/ServicePanel'

export const MainPage = () => {

  const handleSubmitForm = () => {
    // проверить, заполнены ли поля, собрать объект, отправить запрос

    console.log('submitted')
    return ''
  }

  return (
    <>

      <Header />      

      <ServicePanelWrapper>
        <ServicePanel onSubmit={handleSubmitForm}/>
      </ServicePanelWrapper>

      <MainMapContainer />

    </>
  )
}