import * as React from 'react';
import { Paper, ThemeProvider } from '@mui/material';
import { UserCard } from './UserCard';
import { theme } from '../Theme/Theme';
import users from '../../users.json';
import { UserHeader } from './UserHeader';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function UserContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ height: '100%', width: { xs: '300px', sm: '400px' }, background: '#f1f5f8', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <UserHeader header="Users" />
        {isLoading ? <CircularProgress sx={{ margin: '20px auto' }} /> : Array.from(users).map((user, index) => <UserCard key={index} {...user} />)}
      </Paper>
    </ThemeProvider>
  );
}
