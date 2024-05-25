import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, useTheme } from '@mui/material';
import droneImage from '../data/drone.jpg';
import trackingImage from '../data/tracking.jpg';
import supportImage from '../data/support.jpg';
import easyImage from '../data/easy.jpg';
import { MainHeader } from '../components/headers/MainHeader';
import { useNavigate } from 'react-router';

export const ServicesPage = () => {
  const theme = useTheme();
  const navigate = useNavigate()

  return (
    <>
      <MainHeader />
      <Container maxWidth="xl" sx={{ py: 18 }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h1" gutterBottom>
            Сервис доставки дронами
          </Typography>
          <Typography variant="h5" gutterBottom>
            Принисите посылку в пункт приёма, а дрон её доставит.
          </Typography>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3}>
              <CardContent>
                <img src={droneImage} alt="Доставка дронами" width="100%" />
                <Typography variant="h5" gutterBottom>
                  Доставка дронами
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Наши дроны доставят ваш груз в любую точку России на следующий день.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3}>
              <CardContent>
                <img src={trackingImage} alt="Отслеживание доставки" width="100%" />
                <Typography variant="h5" gutterBottom>
                  Отслеживание доставки
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Вы можете отслеживать статус доставки в нашем приложении в режиме реального времени.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3}>
              <CardContent>
                <img src={supportImage} alt="Поддержка клиентов" width="100%" />
                <Typography variant="h5" gutterBottom>
                  Поддержка клиентов
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Наша служба поддержки всегда на связи и готова ответить на ваши вопросы в течение 5 минут.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3}>
              <CardContent>
                <img src={easyImage} alt="Простая работа" width="100%" />
                <Typography variant="h5" gutterBottom>
                  Простая работа
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Для курьеров работа с нами максимально проста, даже если у них всего одна посылка.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Как это работает
                  </Typography>
                  <Box component="ol" pl={2}>
                    <Typography variant="body1" component="li" gutterBottom>
                      Создайте заказ в личном кабинете.
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Выберите тип доставки: "Курьером до двери" или "До пункта выдачи заказов".
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Укажите вес и габариты посылки (до 200 кг).
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Получите точную стоимость доставки.
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Передайте посылку курьеру или привезите в пункт выдачи.
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Получатель забирает посылку на следующий день.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Подключение
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Подключиться к нашему сервису могут ИП и юрлица. Для этого:
                  </Typography>
                  <Box component="ol" pl={2}>
                    <Typography variant="body1" component="li" gutterBottom>
                      Создайте личный кабинет.
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Передайте документацию разработчикам для API-интеграции.
                    </Typography>
                    <Typography variant="body1" component="li" gutterBottom>
                      Начинайте отправлять посылки на следующий день по всей России.
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Button 
                      onClick={() => navigate('auth')}
                      variant="contained" color="primary"
                    >
                      Подключиться
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box mt={6}>
          <Typography variant="caption" color={theme.palette.grey[500]}>
            Учебный проект Коваля Максима Олеговича, КТбо4-8
          </Typography>
        </Box>
      </Container>
    </>
  )
}
