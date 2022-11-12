import * as React from 'react';
import { Box } from '@mui/material';
import { Text } from '../Theme/Theme';

interface UserCardBodyProps {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
}

export const UserCardBody: React.FC<UserCardBodyProps> = ({ ...props }) => {
  return (
    <Box sx={{ ml: 1, mr: 1, display: 'flex', flexDirection: 'column' }}>
      <Text variant="UserName">
        {props.firstName} {props.lastName}
      </Text>
      <Text variant="UserRole">{props.role}</Text>
      <Text variant="Email">{props.email}</Text>
    </Box>
  );
};
