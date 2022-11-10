import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministratorSVG from '../../images/icons/administratorRole.svg';
import UserSVG from '../../images/icons/userRole.svg';
import ViewerSVG from '../../images/icons/viewerRole.svg';
import Image from 'next/image';
import { Box } from '@mui/material';
import { Text } from '../Theme/Theme';
import { formatPhoneNumber } from '../Format/formatPhoneNumber';
import { formatDate } from '../Format/formatDate';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface UserCardProps {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  createdAt: string;
  lastLoggedIn: string;
}

export const UserCard: React.FC<UserCardProps> = ({ ...props }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={3} sx={{ m: 2 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {props.role === 'Administrator' && <Image src={AdministratorSVG} alt="user" height={50} />}
        {props.role === 'User' && <Image src={UserSVG} alt="user" height={50} />}
        {props.role === 'Viewer' && <Image src={ViewerSVG} alt="user" height={50} />}
        <Box sx={{ ml: 1, mr: 1, display: 'flex', flexDirection: 'column' }}>
          <Text variant="UserName">
            {props.firstName} {props.lastName}
          </Text>
          <Text variant="UserRole">{props.role}</Text>
          <Text variant="Email">{props.email}</Text>
        </Box>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{}}>
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
      </Collapse>
    </Card>
  );
};
