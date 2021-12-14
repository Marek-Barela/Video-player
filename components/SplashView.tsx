import { Box, Flex, Heading } from '@chakra-ui/react';
import Navigation from 'components/Navigation';

const SplashView = () => {
  return (
    <Box height={'100vh'} minW={'450px'}>
      <Navigation />
      <Flex
        height={'calc(100vh - 60px)'}
        minH={'500px'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2em', md: '3em', lg: '3.5em' }}
          width={{ base: '400px', md: '600px', lg: '800px' }}
          textAlign={'center'}
        >
          Great standard for online video hosting
        </Heading>
      </Flex>
    </Box>
  );
};

export default SplashView;
