import { ServiceItemWrapper } from '../ServiceItemWrapper'
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import { ReceiverPhone } from './receiver_phone/ReceiverPhone';
import { ReceiverCity } from './receiver_city/ReceiverCity';
import { ReceiverPlatform } from './receiver_platform/ReceiverPlatform';

export const ReceiverBlock = () => {
  return (
    <ServiceItemWrapper 
      title='Куда' 
      icon={
        <ArchiveRoundedIcon />
      }
      firstContent={ <ReceiverCity /> }
      secondContent={ <ReceiverPlatform /> }
      thirdContent={ <ReceiverPhone /> }
    />
  )
}