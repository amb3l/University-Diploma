import Header from '../components/Header'
import { MainMapContainer } from '../components/MainMapContainer'
import { ServicePanelWrapper } from '../components/ServicePanelWrapper'
import { ServiceList } from '../components/ServiceList'
import { ServicePanel } from '../components/ServicePanel'

export const MainPage = () => {
  return (
    <>
      <Header />      

      <ServicePanelWrapper>
        <ServicePanel />
      </ServicePanelWrapper>

      <MainMapContainer />
    </>
  )
}