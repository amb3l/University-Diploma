import React, { useContext, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, Avatar, Tabs, Tab, Paper, IconButton, Divider } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Edit, Delete, TrackChanges, Repeat, ThumbUp } from '@mui/icons-material';
import { MainHeader } from '../components/headers/MainHeader';
import LogoutIcon from '@mui/icons-material/Logout'
import { theme } from '../themes/theme';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import { EditUserModal } from '../components/user_page/modal/EditUserModal';
import { ModalContext } from '../context/ModalContext';


const SOFT_BG = '#F0F1F5'


export const UserPage = () => {
  const { currentUserData } = useContext(AuthContext)
  const [activeTab, setActiveTab] = React.useState(0)
  const { modal, open, close } = useContext(ModalContext)

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
              <Tab label="Доставленные" />
              <Tab label="Отмененные" />
            </Tabs>

            <Box sx={{ mb: 4 }}>
              {activeTab === 0 && [
                <OrderItem
                orderNumber="#1234"
                status="Доставлен"
                date="15 мая 2023"
                actions={[<IconButton><ThumbUp /></IconButton>, <IconButton><Repeat /></IconButton>]}
              />,
              <OrderItem
                  orderNumber="#1234"
                  status="Доставлен"
                  date="15 мая 2023"
                  actions={[<IconButton><ThumbUp /></IconButton>, <IconButton><Repeat /></IconButton>]}
              />,
              <OrderItem
                  orderNumber="#1234"
                  status="Доставлен"
                  date="15 мая 2023"
                  actions={[<IconButton><ThumbUp /></IconButton>, <IconButton><Repeat /></IconButton>]}
              />,
              <OrderItem
                  orderNumber="#1234"
                  status="Доставлен"
                  date="15 мая 2023"
                  actions={[<IconButton><ThumbUp /></IconButton>, <IconButton><Repeat /></IconButton>]}
              />,
              <OrderItem
                  orderNumber="#1234"
                  status="Доставлен"
                  date="15 мая 2023"
                  actions={[<IconButton><ThumbUp /></IconButton>, <IconButton><Repeat /></IconButton>]}
              />
              
              ]}
              {activeTab === 1 && (
                <OrderItem
                  orderNumber="#5678"
                  status="В пути"
                  date="10 мая 2023"
                  actions={[<IconButton><TrackChanges /></IconButton>, <IconButton><Delete /></IconButton>]}
                />
              )}
              {activeTab === 2 && (
                <OrderItem
                  orderNumber="#9012"
                  status="Отменен"
                  date="5 мая 2023"
                  actions={[<IconButton><Repeat /></IconButton>]}
                />
              )}
            </Box>

          </Box>
        </Box>

      </Box>
    </>
  )
}

const OrderItem: React.FC<{
  orderNumber: string;
  status: string;
  date: string;
  actions: React.ReactNode[];
}> = ({ orderNumber, status, date, actions }) => {

  return (
    <Box sx={{
    }}>
      <Card sx={{
        boxShadow: 'none',
        borderRadius: 5 
      }}>
        <Divider/>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {orderNumber}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Статус: {status}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Дата: {date}
          </Typography>
          <Box mt={2} display="flex" justifyContent="space-between">
            {actions.map((action, index) => (
              <Box key={index}>{action}</Box>
            ))}
          </Box>
        </CardContent>
        <Divider/>
      </Card>
    </Box>
  );
};
