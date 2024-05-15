import React from 'react';
import MenuBar from './layouts/MenuBar';
import Body from './layouts/Body';
import { Stack } from '@mui/material';

const App: React.FC = () => {
  return (
    <Stack>
      <MenuBar />
      <Body />
    </Stack>
  );
}

export default App;