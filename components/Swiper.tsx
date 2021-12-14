import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css';

interface SwiperBoxProps {
  id: number;
}

const SwiperBox = ({ id }: SwiperBoxProps) => {
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
        MediaListId: id,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: true,
        PageNumber: 1,
        PageSize: 30,
      },
    })
      .then((res) => setVideoData(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(videoData);

  return (
    <Box margin={'30px'}>
      <Swiper spaceBetween={30} slidesPerView={3}>
        {videoData?.Entities?.map((item) => (
          <SwiperSlide key={item.Guid}>
            {item?.Images[0]?.Url ? (
              <Box
                bgImage={item.Images[0].Url}
                minH={'300px'}
                bgSize={'cover'}
                borderRadius={'10px'}
              />
            ) : (
              <Text>No Image</Text>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperBox;
