import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

export enum ORDER_STATUSES {
  ACTIVE = 'Активный',
  CANCELED = 'Отменён',
  DELIVERED = 'Доставлен',
};

export interface IOrderItem {
  orderNumber?: string;
  status?: ORDER_STATUSES;
  dateCreated: string;
  dateCanceled: string;
  dateReceived: string;
  sender: string;
  receiver: string;
  actions?: Array<React.ReactNode>;
}

export const OrderItem: React.FC<IOrderItem> = ({
  orderNumber,
  status,
  dateCreated,
  dateReceived,
  dateCanceled,
  receiver,
  sender,
  actions
}) => {
  return (
    <Box sx={{
    }}>
      <Card sx={{
        boxShadow: 'none',
        borderRadius: 5 
      }}>
        <Divider/>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Заказ {orderNumber}
          </Typography>
          <Box>
            <Typography variant="body1" gutterBottom>
              Статус: {status}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Дата создания: {dateCreated}
            </Typography>
            <br></br>
            <Typography variant="body1" gutterBottom>
              Отправитель: {sender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Получатель: {receiver}
            </Typography>
            {dateReceived ? 
              <Typography variant="body1" gutterBottom>
                Дата получения: {dateReceived}
              </Typography>
            : null}
            {dateCanceled ? 
              <Typography variant="body1" gutterBottom>
                Дата отмены: {dateCanceled}
              </Typography>
            : null}
            
          </Box>
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
    