export interface IOrder {
  id: number
  delivery_cost: number
  payment_method?: string
  status: string

  date_created: string
  date_canceled?: string
  date_received?: string

  receiver_id: string
  receiver_platform_id: string

  sender_id: string
  sender_platform_id: string
}