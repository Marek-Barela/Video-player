import { Box } from '@chakra-ui/react';
import LandingPageView from 'components/LandingPageView';
import type { NextPage } from 'next';

const LandingPage: NextPage = () => {
  return (
    <Box>
      <LandingPageView />
    </Box>
  );
};

export default LandingPage;
