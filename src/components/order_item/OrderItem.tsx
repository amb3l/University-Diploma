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
    date?: string;
    receiverName?: string;
    actions?: Array<React.ReactNode>;
}

export const OrderItem: React.FC<IOrderItem> = ({
        orderNumber,
        status,
        date,
        receiverName,
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
                        <Typography variant="h5" gutterBottom>
                            {orderNumber}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Статус: {status}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Дата: {date}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {receiverName}
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
    