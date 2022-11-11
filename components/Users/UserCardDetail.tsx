import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Text } from '../Theme/Theme';
import { formatPhoneNumber } from '../Format/formatPhoneNumber';
import { formatDate } from '../Format/formatDate';

interface UserCardDetailProps {
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  createdAt: string;
  lastLoggedIn: string;
}

export const UserCardDetail: React.FC<UserCardDetailProps> = ({ ...props }) => {
  return (
    <CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7, mb: 2 }}>
        <Text variant="DetailHeader">Address</Text>
        <Text variant="DetailItem">
          {props.street}, {props.city}, {props.state} {props.zip}
        </Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7, mb: 2 }}>
        <Text variant="DetailHeader">Phone</Text>
        <Text variant="DetailItem">{formatPhoneNumber(props.phone)}</Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7, mb: 2 }}>
        <Text variant="DetailHeader">Created At</Text>
        <Text variant="DetailItem">{formatDate(props.createdAt)}</Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7 }}>
        <Text variant="DetailHeader">Last Logged In</Text>
        <Text variant="DetailItem">{formatDate(props.lastLoggedIn)}</Text>
      </Box>
    </CardContent>
  );
};
