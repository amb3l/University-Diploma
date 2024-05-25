import React, { useContext } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, Avatar, Tabs, Tab, Paper, IconButton, Divider } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Edit, Delete, TrackChanges, Repeat, ThumbUp } from '@mui/icons-material';
import { MainHeader } from '../components/headers/MainHeader';

export const UserPage = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <MainHeader/>
      <Container maxWidth="lg" sx={{ py: 8, mt: 8 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
          <Typography variant="h2">Личный кабинет</Typography>
          <Button variant="contained" color="primary" >
            Выйти
          </Button>
        </Box>

        {user ? (
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Card elevation={3}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                    <Avatar
                      alt={user.name}
                      src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
                      sx={{ width: 120, height: 120 }}
                    />
                    <Typography variant="h5" mt={2}>
                      {user.name}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box mt={2}>
                    <Typography variant="body1" gutterBottom>
                      Email: {user.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Телефон: +7 (123) 456-78-90
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Paper elevation={3}>
                <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary">
                  <Tab label="Все заказы" />
                  <Tab label="Активные" />
                  <Tab label="Доставленные" />
                  <Tab label="Отмененные" />
                </Tabs>
                <Box p={3}>
                  {activeTab === 0 && (
                    <OrderItem
                      orderNumber="#1234"
                      status="Доставлен"
                      date="15 мая 2023"
                      actions={[<IconButton><ThumbUp /></IconButton>, <IconButton><Repeat /></IconButton>]}
                    />
                  )}
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
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="body1">Вы не авторизованы.</Typography>
        )}
      </Container>
    </>
  );
};

const OrderItem: React.FC<{
  orderNumber: string;
  status: string;
  date: string;
  actions: React.ReactNode[];
}> = ({ orderNumber, status, date, actions }) => {
  return (
    <Box mb={4}>
      <Card elevation={2}>
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
          <Divider />
          <Box mt={2} display="flex" justifyContent="space-between">
            {actions.map((action, index) => (
              <Box key={index}>{action}</Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
