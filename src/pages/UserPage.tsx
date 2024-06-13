import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, Avatar, Tabs, Tab, Paper, IconButton, Divider } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Delete, TrackChanges, Repeat, ThumbUp, Check, Cancel } from '@mui/icons-material';
import { MainHeader } from '../components/headers/MainHeader';
//import LogoutIcon from '@mui/icons-material/Logout'
//import { theme } from '../themes/theme';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import { EditUserModal } from '../components/user_page/modal/EditUserModal';
import { ModalContext } from '../context/ModalContext';
import { OrderItem, ORDER_STATUSES, IOrderItem } from '../components/order_item/OrderItem'
import { OrderContext } from '../context/OrderContext';
import { IOrder } from '../types/OrderType';
import { queryCancelOrder, queryGetOrdersList, queryGetUserById, queryGetUsersList, queryReceiveOrder } from '../services/backend/queries/userData';
import { AxiosError } from 'axios';
import { theme } from '../themes/theme';


const SOFT_BG = '#F0F1F5'

interface IOrdersByTypesToDisplay {
  allOrders: Array<IOrderItem>;
  activeOrders: Array <IOrderItem>;
  canceledOrders: Array<IOrderItem>;
  deliveredOrders: Array<IOrderItem>;
}

const TAB_VALUES = {
  ALL: 0,
  ACTIVE: 1,
  CANCELED: 2,
  DELIVERED: 3,
};

export const UserPage = () => {
  const { currentUserData } = useContext(AuthContext)
  const [activeTab, setActiveTab] = React.useState(TAB_VALUES.ALL)
  const { modal, open, close } = useContext(ModalContext)
  const [orders, setOrders] = useState<Array<IOrderItem>>([])

  const handleReceiveOrder = async (id: string) => {
    await queryReceiveOrder(id)
    window.location.reload()
  }

  const handleCancelOrder = async (id: string) => {
    await queryCancelOrder(id)
    window.location.reload()
  }

  function formatDateFromSQL(sqlDateTime: string): string {
    const date = new Date(sqlDateTime);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'UTC'
    };
  
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  }

  const mapOrderStatusToOrderStatus = (status: string): ORDER_STATUSES => {
    switch (status) {
      case 'Активный':
        return ORDER_STATUSES.ACTIVE
      case 'Отменён':
        return ORDER_STATUSES.CANCELED
      case 'Доставлен':
        return ORDER_STATUSES.DELIVERED
    }
  }

  const convertOrdersToOrderItems = async (orders: IOrder[]): Promise<IOrderItem[]> => {
    const orderItems = await Promise.all(orders.map(async (order) => {
      const _sender = await queryGetUserById(order.sender_id)
      const _receiver = await queryGetUserById(order.receiver_id)
      const sender = `${_sender.name}, ${_sender.email}`;
      const receiver = `${_receiver.name}, ${_receiver.email}`;
      const orderNumber = `#${order.id}`;
      const status = mapOrderStatusToOrderStatus(order.status);
      const dateCreated = formatDateFromSQL(order.date_created);

      let dateReceived;
      let dateCanceled;
      if (order.date_received) {
        dateReceived = formatDateFromSQL(order.date_received);
      }
      if (order.date_canceled) {
        dateCanceled = formatDateFromSQL(order.date_canceled);
      }
      
      let actions = []

      if (status != ORDER_STATUSES.ACTIVE) {
        actions = [
          <IconButton><ThumbUp /></IconButton>,
        ]
      }
      if (currentUserData.id === order.sender_id && status === ORDER_STATUSES.ACTIVE) {
        actions = [
          <IconButton><ThumbUp /></IconButton>,
          <IconButton sx={{ color: theme.palette.error.main }} onClick={() => handleCancelOrder(order.id.toString())}><Cancel /></IconButton>
        ]
      }
      if (currentUserData.id === order.receiver_id && status === ORDER_STATUSES.ACTIVE) {
        actions = [
          <IconButton><ThumbUp /></IconButton>, 
          <Box>
            <IconButton onClick={() => handleReceiveOrder(order.id.toString())}><Check /></IconButton>
            <IconButton sx={{ color: theme.palette.error.main }} onClick={() => handleCancelOrder(order.id.toString())}><Cancel /></IconButton>
          </Box>
        ]
      }
  
      return {
        orderNumber,
        status,
        dateCreated,
        dateReceived,
        dateCanceled,
        sender,
        receiver,
        actions,
      };
    }));
  
    return orderItems;
  }


  useEffect(() => {
    const getOrderList = async() => {
      try {
        const l = await queryGetOrdersList()
        console.log(l)
        setOrders(await convertOrdersToOrderItems(l))
        
      } catch (e: unknown) {
        const error = e as AxiosError
        setError(error.message)
        console.log(error)
      }
    }
    
    getOrderList()
  }, [])

  // const orders: Array<IOrderItem> = useMemo(() => {
  //   return [
  //     {
  //       orderNumber: "#7896",
  //       status: ORDER_STATUSES.DELIVERED,
  //       date: "5 мая 2023",
  //       receiverName: "Максимов Максим",
  //       actions: ORDER_ACTIONS_SET.DELIVERED,
  //     }, {
  //       orderNumber: "#9514",
  //       status: ORDER_STATUSES.DELIVERED,
  //       date: "27 июня 2023",
  //       receiverName: "Станиславов Станислав",
  //       actions: ORDER_ACTIONS_SET.DELIVERED,
  //     }, {
  //       orderNumber: "#9775",
  //       status: ORDER_STATUSES.DELIVERED,
  //       date: "7 сентября 2023",
  //       receiverName: "Олегов Олег",
  //       actions: ORDER_ACTIONS_SET.DELIVERED,
  //     }, {
  //       orderNumber: "#8544",
  //       status: ORDER_STATUSES.DELIVERED,
  //       date: "8 сентября 2023",
  //       receiverName: "Сергеев Сергей",
  //       actions: ORDER_ACTIONS_SET.DELIVERED,
  //     },

  //     {
  //       orderNumber: "#7364",
  //       status: ORDER_STATUSES.CANCELED,
  //       date: "21 марта 2023",
  //       receiverName: "Даниилов Даниил",
  //       actions: ORDER_ACTIONS_SET.CANCELED,
  //     }, {
  //       orderNumber: "#9784",
  //       status: ORDER_STATUSES.CANCELED,
  //       date: "16 декабря 2023",
  //       receiverName: "Александров Александр",
  //       actions: ORDER_ACTIONS_SET.CANCELED,
  //     }, {
  //       orderNumber: "#8465",
  //       status: ORDER_STATUSES.CANCELED,
  //       date: "5 мая 2024",
  //       receiverName: "Васильев Василий",
  //       actions: ORDER_ACTIONS_SET.CANCELED,
  //     }, {
  //       orderNumber: "#7646",
  //       status: ORDER_STATUSES.CANCELED,
  //       date: "17 апреля 2024",
  //       receiverName: "Петров Пётр",
  //       actions: ORDER_ACTIONS_SET.CANCELED,
  //     },
  //   ]
  // }, []);

  const {
    allOrders,
    activeOrders,
    canceledOrders,
    deliveredOrders,
  }: IOrdersByTypesToDisplay = useMemo(() => {
    const allOrders = orders;
    const activeOrders = allOrders.filter((order) => order.status === ORDER_STATUSES.ACTIVE);
    const canceledOrders = allOrders.filter((order) => order.status === ORDER_STATUSES.CANCELED);
    const deliveredOrders = allOrders.filter((order) => order.status === ORDER_STATUSES.DELIVERED);

    return {
      allOrders,
      activeOrders,
      canceledOrders,
      deliveredOrders,
    };
  }, [orders])

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  }

  const handleEditClick = () => {
    open()
  }


  useEffect(() => {
    if (modal) {
      document.body.classList.add('modal-open');
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '0';
    }
  }, [modal])

  const getScrollbarWidth = (): number => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);
    return scrollbarWidth;
  }


  return (
    <>
      <MainHeader/>

      { modal &&  <EditUserModal handleClose={close} /> }

      <Box sx={{  
             maxWidth: '560px',
             display: 'flex',
             flexDirection: 'column',
             gap: 2,
             mt: 10,
             pt: 2,
             ml: 'auto',
             mr: 'auto'
           }}>
             <Box>
               <Card sx={{ boxShadow: 'none' }} >
                 <CardContent>

                   <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          gap: 1
                        }}>
                          <Box
                            sx={{
                              ml: 'auto',
                              mr: 'auto'
                            }}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            gap={2}
                          >
                            <div onClick={handleEditClick}>
                              <Avatar
                                alt={currentUserData.name}
                                src={`https://avatar.iran.liara.run/public/boy`}
                                sx={{ width: 120, height: 120, cursor: 'pointer' }}
                              />
                            </div>
                            <div onClick={handleEditClick}>
                              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <Typography variant="h5" fontWeight={500}>
                                  {currentUserData.name}
                                </Typography>
                                <DriveFileRenameOutlineRoundedIcon
                                  fontSize='small'
                                  sx={{ ml: 1, color: 'grey'}}
                                />
                              </Box>
                            </div>
                          </Box>

                          <Box>
                            <Typography variant="body1" gutterBottom>
                              {currentUserData.email}
                            </Typography>
                          </Box>

                        </Box>
                 </CardContent>
               </Card>
             </Box>

             <Box>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                 <Tabs
                   value={activeTab}
                   onChange={handleTabChange}
                   indicatorColor='primary'
                   sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     backgroundColor: '#F0F1F5',
                     borderRadius: 5
                   }}
                   centered
                 >
                   <Tab label="Все заказы" />
                   <Tab label="Активные" />
                   <Tab label="Отмененные" />
                   <Tab label="Доставленные" />
                 </Tabs>

                 <Box sx={{ mb: 4 }}>
                   <>
                     {
                       activeTab === TAB_VALUES.ALL && allOrders
                       .map((order) =>
                         <OrderItem
                             orderNumber={order.orderNumber}
                              status={order.status}
                              dateCreated={order.dateCreated}
                              dateReceived={order.dateReceived}
                              dateCanceled={order.dateCanceled}
                              sender={order.sender}
                              receiver={order.receiver}
                              actions={order.actions}
                              key={order.orderNumber}
                          />
                       )
                     }
                     {
                       activeTab === TAB_VALUES.ACTIVE && activeOrders
                         .map((order) =>
                           <OrderItem
                              orderNumber={order.orderNumber}
                                status={order.status}
                                dateCreated={order.dateCreated}
                                dateReceived={order.dateReceived}
                                dateCanceled={order.dateCanceled}
                                sender={order.sender}
                                receiver={order.receiver}
                                actions={order.actions}
                                key={order.orderNumber}
                            />
                      )
                     }
                     {
                       activeTab === TAB_VALUES.CANCELED && canceledOrders
                         .map((order) =>
                           <OrderItem
                              orderNumber={order.orderNumber}
                                status={order.status}
                                dateCreated={order.dateCreated}
                                dateReceived={order.dateReceived}
                                dateCanceled={order.dateCanceled}
                                sender={order.sender}
                                receiver={order.receiver}
                                actions={order.actions}
                                key={order.orderNumber}
                            />
                      )
                     }
                     {
                       activeTab === TAB_VALUES.DELIVERED && deliveredOrders
                         .map((order) =>
                           <OrderItem
                              orderNumber={order.orderNumber}
                                status={order.status}
                                dateCreated={order.dateCreated}
                                dateReceived={order.dateReceived}
                                dateCanceled={order.dateCanceled}
                                sender={order.sender}
                                receiver={order.receiver}
                                actions={order.actions}
                                key={order.orderNumber}
                            />
                      )
                     }
                   </>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
function setError(message: string) {
  throw new Error('Function not implemented.');
}

