import { ServiceItemWrapper } from '../ServiceItemWrapper'
import UnarchiveRoundedIcon from '@mui/icons-material/UnarchiveRounded';
import { SenderPhone } from './sender_phone/SenderPhone';
import { SenderCity } from './sender_city/SenderCity';
import { SenderPlatform } from './sender_platform/SenderPlatform';
import { theme } from '../../themes/theme';
import { SenderEmail } from './sender_email/SenderEmail';

export const SenderBlock = () => {
  return (
    <ServiceItemWrapper 
      title='Откуда' 
      icon={
        <UnarchiveRoundedIcon sx={{color: theme.palette.primary.main}}/>
      }
      firstContent={ <SenderCity /> }
      secondContent={ <SenderPlatform /> }
      thirdContent={ <SenderEmail /> }
      fourthContent={ <SenderPhone /> }
    />
  )
}