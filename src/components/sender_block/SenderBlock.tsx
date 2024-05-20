import { ServiceItemWrapper } from '../ServiceItemWrapper'
import UnarchiveRoundedIcon from '@mui/icons-material/UnarchiveRounded';
import { SenderPhone } from './sender_phone/SenderPhone';
import { SenderCity } from './sender_city/SenderCity';
import { SenderPlatform } from './sender_platform/SenderPlatform';

export const SenderBlock = () => {
  return (
    <ServiceItemWrapper 
      title='Откуда' 
      icon={
        <UnarchiveRoundedIcon />
      }
      firstContent={ <SenderCity /> }
      secondContent={ <SenderPlatform /> }
      thirdContent={ <SenderPhone /> }
    />
  )
}