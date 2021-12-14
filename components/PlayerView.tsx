import { Box, Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import Navigation from 'components/Navigation';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import React from 'react';
import ReactPlayer from 'react-player';

interface PlayerDataResponse {
  ContentUrl: string;
  Description: string;
  MediaId: number;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  Provider: string;
  StreamId: number;
  Title: string;
}

const PlayerView = () => {
  const [playerData, setPlayerData] = useState<PlayerDataResponse>();
  const router = useRouter();

  useLayoutEffect(() => {
    const token = localStorage.getItem('Token') as string;
    const tokenAsString = JSON.parse(token);
    const ID = parseInt(router.query.id as string);

    if (!router.query.id) return;

    axios({
      method: 'post',
      url: 'https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenAsString}`,
      },
      data: {
        MediaId: ID,
        StreamType: 'TRIAL',
      },
    })
      .then((res) => setPlayerData(res.data))
      .catch((err) => console.error(err));
  }, [router]);

  return (
    <Box height={'100vh'} minW={'450px'}>
      <Navigation />
      <Flex mt="40px" justifyContent={'center'}>
        <Flex
          width={'700px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Flex mb="30px" width={'100%'}>
            <Button onClick={() => router.back()} colorScheme={'blue'}>
              Back
            </Button>
          </Flex>
          {playerData?.ContentUrl ? (
            <ReactPlayer
              url={playerData?.ContentUrl}
              width={'100%'}
              height={'100%'}
              controls={true}
            />
          ) : (
            <Flex>
              <Text>This resource do not contain a video try others</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PlayerView;
