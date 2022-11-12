import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import GroupSVG from '../../images/icons/group.svg';
import Image from 'next/image';
import { Text } from '../Theme/Theme';

interface UserHeaderProps {
  header: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ header }) => {
  return (
    <AppBar position="static" style={{ background: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0px' }}>
      <Toolbar>
        <Stack direction="row" justifyContent="center" alignItems="center">
          {header.toLowerCase() === 'users' && <Image src={GroupSVG} alt="group" />}
          <Text variant="NavHeader" sx={{ ml: 1 }}>
            {header}
          </Text>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
