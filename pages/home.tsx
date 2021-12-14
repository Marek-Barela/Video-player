import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import HomeScreenView from '../components/HomeScreenView';

const HomeScreenPage: NextPage = () => {
  return (
    <Box>
      <HomeScreenView />
    </Box>
  );
};

export default HomeScreenPage;
