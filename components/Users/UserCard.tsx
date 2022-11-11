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
import { UserCardDetail } from './UserCardDetail';
import { useState } from 'react';

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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const userCardDetailProps = { street: props.street, city: props.city, state: props.state, zip: props.zip, phone: props.phone, createdAt: props.createdAt, lastLoggedIn: props.lastLoggedIn };

  return (
    <Card elevation={3} sx={{ ml: 2, mr: 2, mt: 2, '&:last-child': { mb: 2 } }}>
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
        <UserCardDetail {...userCardDetailProps} />
      </Collapse>
    </Card>
  );
};
