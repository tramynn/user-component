import * as React from 'react';
import { Paper, ThemeProvider } from '@mui/material';
import { UserCard } from './UserCard';
import { theme } from '../Theme/Theme';
import users from '../../users.json';
import UserHeader from './UserHeader';

export default function UserContainer() {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ height: '100%', width: { xs: '300px', sm: '400px' }, background: '#dbe4f1' }}>
        <UserHeader />
        {Array.from(users).map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </Paper>
    </ThemeProvider>
  );
}
