import { Button, Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useUserIsAuthenticated } from 'common/hooks/userIsAuthenticated';
import { useRouter } from 'next/router';
import uniqid from 'uniqid';

const Navigation = () => {
  const router = useRouter();
  const { isAuthenticated } = useUserIsAuthenticated();

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

  const handleLogoutCLick = () => {
    Promise.all([])
      .then(() => {
        localStorage.removeItem('Token');
        localStorage.removeItem('TokenExpiresDate');
      })
      .then(() => router.push('/'));
  };

  return (
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
        {!isAuthenticated ? (
          <>
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
          </>
        ) : (
          <>
            <Button
              variant={'solid'}
              colorScheme={'blue'}
              fontSize={'0.8em'}
              onClick={() => handleLogoutCLick()}
            >
              Log out
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navigation;
