import React, { createContext, useState, useContext } from 'react';

interface OrderContext {
  senderCity: string;
  senderPlatform: string;
  senderEmail: string;
  senderName: string;
  setSenderCity: (value: string) => void;
  setSenderPlatform: (value: string) => void;
  setSenderEmail: (value: string) => void;
  setSenderName: (value: string) => void;

  receiverCity: string;
  receiverPlatform: string;
  receiverEmail: string;
  receiverName: string;
  setReceiverCity: (value: string) => void;
  setReceiverPlatform: (value: string) => void;
  setReceiverEmail: (value: string) => void;
  setReceiverName: (value: string) => void;

  detailsSize: string;
  detailsType: string;
  setDetailsSize: (value: string) => void;
  setDetailsType: (value: string) => void;
}

const initialContext: OrderContext = {
  senderCity: '',
  senderPlatform: '',
  senderEmail: '',
  senderName: '',
  setSenderCity: () => {},
  setSenderPlatform: () => {},
  setSenderEmail: () => {},
  setSenderName: () => {},

  receiverCity: '',
  receiverPlatform: '',
  receiverEmail: '',
  receiverName: '',
  setReceiverCity: () => {},
  setReceiverPlatform: () => {},
  setReceiverEmail: () => {},
  setReceiverName: () => {},

  detailsSize: '',
  detailsType: '',
  setDetailsSize: () => {},
  setDetailsType: () => {},
}

export const OrderContext = createContext<OrderContext>(initialContext)

export const OrderStateContext = ({ children }: {children: React.ReactNode}) => {
  // Sender states
  const [senderCity, setSenderCity] = useState('')
  const [senderPlatform, setSenderPlatform] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderName, setSenderName] = useState('')
  // Receiver states
  const [receiverCity, setReceiverCity] = useState('')
  const [receiverPlatform, setReceiverPlatform] = useState('')
  const [receiverEmail, setReceiverEmail] = useState('')
  const [receiverName, setReceiverName] = useState('')
  // Details states
  const [detailsSize, setDetailsSize] = useState('')
  const [detailsType, setDetailsType] = useState('')

  return (
    <OrderContext.Provider value={{
      senderCity, setSenderCity,
      senderPlatform, setSenderPlatform,
      senderEmail, setSenderEmail,
      senderName, setSenderName,

      receiverCity, setReceiverCity,
      receiverPlatform, setReceiverPlatform,
      receiverEmail, setReceiverEmail,
      receiverName, setReceiverName,

      detailsSize, setDetailsSize,
      detailsType, setDetailsType,
    }}>
      {children}
    </OrderContext.Provider>
  )
}