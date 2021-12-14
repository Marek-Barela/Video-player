import { Box, Flex, Spinner, Text, Button } from '@chakra-ui/react';
import Navigation from 'components/Navigation';
import type { EntityItem } from 'components/Swiper';
import Swiper from 'components/Swiper';
import { useState } from 'react';
import { useRouter } from 'next/router';

const HomeView = () => {
  const [heroData, setHeroData] = useState<EntityItem>();
  const router = useRouter();

  return (
    <Box minH={'100vh'}>
      <Navigation />
      {heroData ? (
        <Flex
          minH={'500px'}
          bgImage={
            heroData?.Images[0]?.Url || 'https://via.placeholder.com/400'
          }
          backgroundSize={'cover'}
        >
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            width={'50%'}
            background="linear-gradient(90deg, rgba(0,0,0,0.9598214285714286) 0%, rgba(0,0,0,0.8085609243697479) 70%, rgba(255,255,255,0) 100%)"
            flexDirection={'column'}
          >
            <Text
              as="h2"
              fontSize={'2em'}
              fontWeight={'bold'}
              color={'white'}
              textAlign={'justify'}
              maxW={'400px'}
              lineHeight={'35px'}
              mb="20px"
            >
              {heroData.Title}
            </Text>
            <Text
              fontSize={'1em'}
              color={'white'}
              textAlign={'justify'}
              maxW={'400px'}
            >
              {heroData.Description}
            </Text>
            <Button
              fontSize={'0.8em'}
              width={150}
              mt="20px"
              colorScheme={'blue'}
              onClick={() => router.push('/player')}
            >
              Watch
            </Button>
          </Flex>
          <Flex width={'50%'}></Flex>
        </Flex>
      ) : (
        <Flex justifyContent={'center'} alignItems={'center'} minH={'500px'}>
          <Spinner />
        </Flex>
      )}
      <Swiper id={2} setHeroData={setHeroData} initialInstance />
      <Swiper id={3} setHeroData={setHeroData} />
      <Swiper id={4} setHeroData={setHeroData} />
      <Swiper id={5} setHeroData={setHeroData} />
      <Swiper id={6} setHeroData={setHeroData} />
    </Box>
  );
};

export default HomeView;
