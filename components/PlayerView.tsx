import { Box } from '@chakra-ui/react';
import Navigation from 'components/Navigation';
import { useRouter } from 'next/router';

const PlayerView = () => {
  const { query } = useRouter();

  return (
    <Box height={'100vh'} minW={'450px'}>
      <Navigation />
    </Box>
  );
};

export default PlayerView;
