import OrderPageHeader from '../components/headers/OrderPageHeader'
import { MainMapContainer } from '../components/MainMapContainer(legacy)'
import { ServicePanelWrapper } from '../components/ServicePanelWrapper'
import { ServicePanel } from '../components/ServicePanel'
import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { queryGetUsersList, queryMakeOrder } from '../services/backend/queries/userData'

export const MainPage = () => {
  const {  } = useContext(OrderContext)
  const {  } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmitForm = async () => {
    // проверить, заполнены ли поля, собрать объект, отправить запрос
    
    try {
      //const userList = await queryGetUsersList()

      
      const data = {
        sender_platform_id: 1,

        receiver_id: 10,
        receiver_platform_id: 2,

        delivery_cost: 395,
        payment_method: "some payment method"
      }

      await queryMakeOrder(data)
      navigate('/me')
    } catch (error: unknown) {
      console.log(error)
    }
    
    console.log('submitted')
  }

  return (
    <>

      <OrderPageHeader />      

      <ServicePanelWrapper>
        <ServicePanel onSubmit={handleSubmitForm}/>
      </ServicePanelWrapper>

      <MainMapContainer />

    </>
  )
}