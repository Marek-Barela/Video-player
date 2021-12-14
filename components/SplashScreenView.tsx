import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const SplashScreenView = () => {
  return (
    <Box height={'100vh'} minW={'450px'}>
      <Flex
        as={'nav'}
        height={'60px'}
        borderBottom={'1px solid rgba(0,0,0,0.1)'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'0 20px'}
      >
        <Heading fontSize={'2.5em'} fontFamily={'Gwendolyn'}>
          Videovio
        </Heading>
        <Flex>
          <Button
            mr="10px"
            variant={'outline'}
            colorScheme={'blue'}
            fontSize={'0.8em'}
          >
            Login
          </Button>
          <Button variant={'solid'} colorScheme={'blue'} fontSize={'0.8em'}>
            Check Anonymously
          </Button>
        </Flex>
      </Flex>
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
          Greaat standard for online video hosting
        </Heading>
      </Flex>
    </Box>
  );
};

export default SplashScreenView;
