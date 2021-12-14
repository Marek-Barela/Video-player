import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import uniqid from 'uniqid';

const SplashView = () => {
  const router = useRouter();

  const handleAnonymousUser = () => {
    const anonymousUserID = uniqid() + uniqid() + uniqid();

    axios({
      method: 'post',
      url: 'https://thebetter.bsgroup.eu/Authorization/SignIn',
      headers: { 'Content-Type': 'application/json' },
      data: {
        Device: {
          PlatformCode: 'WEB',
          Name: anonymousUserID,
        },
      },
    })
      .then((res) => {
        localStorage.setItem(
          'Token',
          JSON.stringify(res.data.AuthorizationToken.Token)
        );
        localStorage.setItem(
          'TokenExpiresDate',
          JSON.stringify(res.data.AuthorizationToken.TokenExpires)
        );
      })
      .then(() => router.push('/'))
      .catch((err) => console.error(err));
  };

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
          <Button
            variant={'solid'}
            colorScheme={'blue'}
            fontSize={'0.8em'}
            onClick={() => handleAnonymousUser()}
          >
            Login Anonymously
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

export default SplashView;
