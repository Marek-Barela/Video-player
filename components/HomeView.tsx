import { Box } from '@chakra-ui/react';
import Navigation from 'components/Navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeView = () => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('Token') as string;
    const tokenAsString = JSON.parse(token);

    axios({
      method: 'post',
      url: 'https://thebetter.bsgroup.eu/Media/GetMediaList',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenAsString}`,
      },
      data: {
        MediaListId: 3,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 30,
      },
    })
      .then((res) => setVideoData(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(videoData);

  return (
    <Box minH={'100vh'}>
      <Navigation />
    </Box>
  );
};

export default HomeView;
