import { Box } from '@chakra-ui/react';
import Navigation from 'components/Navigation';
import Swiper from 'components/Swiper';

const HomeView = () => {
  return (
    <Box minH={'100vh'}>
      <Navigation />
      <Swiper id={2} />
      <Swiper id={4} />
      <Swiper id={5} />
    </Box>
  );
};

export default HomeView;
