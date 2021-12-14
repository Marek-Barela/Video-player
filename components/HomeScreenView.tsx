import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const HomeScreenView = () => {
  const router = useRouter();

  const handleLogoutCLick = () => {
    Promise.all([])
      .then(() => {
        localStorage.removeItem('Token');
        localStorage.removeItem('TokenExpiresDate');
      })
      .then(() => router.push('/'));
  };

  return (
    <Box minH={'100vh'}>
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
            variant={'solid'}
            colorScheme={'blue'}
            fontSize={'0.8em'}
            onClick={() => handleLogoutCLick()}
          >
            Log out
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeScreenView;
