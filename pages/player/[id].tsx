import { Box } from '@chakra-ui/react';
import PlayerPageView from 'components/PlayerPageView';
import type { NextPage } from 'next';

const PlayerPage: NextPage = () => {
  return (
    <Box>
      <PlayerPageView />
    </Box>
  );
};

export default PlayerPage;
