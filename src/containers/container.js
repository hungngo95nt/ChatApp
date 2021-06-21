import React from 'react';
import { Box } from '~/theme';

export default function Container({ children }) {
  return (
    <Box
      flex={1}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center">
      
      {children}
    </Box>
  );
}
