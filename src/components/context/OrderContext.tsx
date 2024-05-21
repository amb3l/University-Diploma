import React, { createContext, useState } from 'react'

interface OrderContextProps {
  senderCity: string
  senderPlatform: string
  senderPhone: string
  senderName: string

  receiverCity: string
  receiverPlatform: string
  receiverPhone: string
  receiverName: string

  detailsSize: string
  detailsType: string
}

export const OrderContext = createContext<OrderContextProps>({
  senderCity: '',
  senderPlatform: '',
  senderPhone: '',
  senderName: '',

  receiverCity: '',
  receiverPlatform: '',
  receiverPhone: '',
  receiverName: '',

  detailsSize: '',
  detailsType: ''
})

export const OrderState = ({ children }: { children: React.ReactNode }) => {
  const [senderCity, setSenderCity] = useState('')
  const [senderPlatform, setSenderPlatform] = useState('')
  const [senderPhone, setSenderPhone] = useState('')
  const [senderName, setSenderName] = useState('')

  const [receiverCity, setReceiverCity] = useState('')
  const [receiverPlatform, setReceiverPlatform] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [receiverName, setReceiverName] = useState('')

  const [detailsSize, setDetailsSize] = useState('')
  const [detailsType, setDetailsType] = useState('')

  const contextValue = {
    senderCity, setSenderCity,
    senderPlatform, setSenderPlatform,
    senderPhone, setSenderPhone,
    senderName, setSenderName,

    receiverCity, setReceiverCity,
    receiverPlatform, setReceiverPlatform,
    receiverPhone, setReceiverPhone,
    receiverName, setReceiverName,

    detailsSize, setDetailsSize,
    detailsType, setDetailsType
  }

  return(
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  )
}