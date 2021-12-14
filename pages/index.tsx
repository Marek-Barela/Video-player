import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import SplashScreenView from '../components/SplashScreenView';

const SplashScreenPage: NextPage = () => {
  return (
    <Box>
      <SplashScreenView />
    </Box>
  );
};

export default SplashScreenPage;
