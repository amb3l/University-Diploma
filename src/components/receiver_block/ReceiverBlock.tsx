import { ServiceItemWrapper } from '../ServiceItemWrapper'
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import { ReceiverPhone } from './receiver_phone/ReceiverPhone';
import { ReceiverCity } from './receiver_city/ReceiverCity';
import { ReceiverPlatform } from './receiver_platform/ReceiverPlatform';
import { Box } from '@mui/material';
import { ReceiverName } from './receiver_name/ReceiverName';
import { theme } from '../../themes/theme';
import { ReceiverEmail } from './receiver_email/ReceiverEmail';

export const ReceiverBlock = () => {
  return (
    <ServiceItemWrapper 
      title='Куда' 
      icon={
        <ArchiveRoundedIcon sx={{ color: theme.palette.primary.main }}/>
      }
      firstContent={ <ReceiverCity /> }
      secondContent={ <ReceiverPlatform /> }
      thirdContent={ 
        <ReceiverEmail />
      }
      fourthContent={ 
        <Box>
          <ReceiverPhone /> 
        { <ReceiverName /> }
        </Box> 
      }
    />
  )
}