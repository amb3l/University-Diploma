import React, { createContext, useState, useContext } from 'react';

interface OrderContext {
  senderCity: string;
  senderPlatform: string;
  senderPhone: string;
  senderName: string;
  setSenderCity: (value: string) => void;
  setSenderPlatform: (value: string) => void;
  setSenderPhone: (value: string) => void;
  setSenderName: (value: string) => void;

  receiverCity: string;
  receiverPlatform: string;
  receiverPhone: string;
  receiverName: string;
  setReceiverCity: (value: string) => void;
  setReceiverPlatform: (value: string) => void;
  setReceiverPhone: (value: string) => void;
  setReceiverName: (value: string) => void;

  detailsSize: string;
  detailsType: string;
  setDetailsSize: (value: string) => void;
  setDetailsType: (value: string) => void;
}

const initialContext: OrderContext = {
  senderCity: '',
  senderPlatform: '',
  senderPhone: '',
  senderName: '',
  setSenderCity: () => {},
  setSenderPlatform: () => {},
  setSenderPhone: () => {},
  setSenderName: () => {},

  receiverCity: '',
  receiverPlatform: '',
  receiverPhone: '',
  receiverName: '',
  setReceiverCity: () => {},
  setReceiverPlatform: () => {},
  setReceiverPhone: () => {},
  setReceiverName: () => {},

  detailsSize: '',
  detailsType: '',
  setDetailsSize: () => {},
  setDetailsType: () => {},
}

export const OrderContext = createContext<OrderContext>(initialContext)

export const OrderState = ({ children }: {children: React.ReactNode}) => {
  // Sender states
  const [senderCity, setSenderCity] = useState('')
  const [senderPlatform, setSenderPlatform] = useState('')
  const [senderPhone, setSenderPhone] = useState('')
  const [senderName, setSenderName] = useState('')
  // Receiver states
  const [receiverCity, setReceiverCity] = useState('')
  const [receiverPlatform, setReceiverPlatform] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [receiverName, setReceiverName] = useState('')
  // Details states
  const [detailsSize, setDetailsSize] = useState('')
  const [detailsType, setDetailsType] = useState('')

  return (
    <OrderContext.Provider value={{
      senderCity, setSenderCity,
      senderPlatform, setSenderPlatform,
      senderPhone, setSenderPhone,
      senderName, setSenderName,

      receiverCity, setReceiverCity,
      receiverPlatform, setReceiverPlatform,
      receiverPhone, setReceiverPhone,
      receiverName, setReceiverName,

      detailsSize, setDetailsSize,
      detailsType, setDetailsType,
    }}>
      {children}
    </OrderContext.Provider>
  )
}