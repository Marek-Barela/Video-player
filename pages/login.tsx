import { Box, Flex, Input, Button, Text } from '@chakra-ui/react';
import Navigation from 'components/Navigation';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useContext, FormEvent } from 'react';
import AuthContext from 'context/AuthContext';

const LandingPage: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <Box minH={'100vh'}>
      <Navigation />
      <Flex minH={'600px'} justifyContent={'center'} alignItems={'center'}>
        <Flex
          as="form"
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          width={'300px'}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Text>test@bsgroup.eu</Text>
          <Text>Test12!@</Text>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            mb="10px"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type={'password'}
            mb="10px"
          />
          <Button type="submit" colorScheme={'blue'} width={'100%'}>
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
