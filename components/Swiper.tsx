import 'swiper/css';
import 'swiper/css/pagination';

import { Box, Flex, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Products {
  Id: number;
}

interface Image {
  Height: number;
  Id: number;
  ImageTypeCode: string;
  MediaId: number;
  PlatformCode: string;
  Url: string;
  Width: number;
}

export interface EntityItem {
  AvailableFrom: string;
  Description: string;
  Guid: string;
  Id: number;
  Images: Image[];
  IsTrialContentAvailable: boolean;
  MediaAgeRestrictionImageUrl: string;
  MediaAgeRestrictionValueMin: number;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  OrderInParent: number;
  ParentMediaId: number;
  ParentMediaTitle: string;
  ParentOrderInParent: number;
  Products: Products[];
  Title: string;
}

type MediaData = {
  CacheDataValidTo: string;
  Entities: EntityItem[];
  PageNumber: number;
  PageSize: number;
  SourceType: string;
  TotalCount: number;
};

interface SwiperBoxProps {
  id: number;
  setHeroData: (item: EntityItem) => void;
  initialInstance?: boolean;
}

const SwiperBox = ({
  id,
  setHeroData,
  initialInstance = false,
}: SwiperBoxProps) => {
  const [videoData, setVideoData] = useState<MediaData>();

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
        IncludeCategories: true,
        IncludeImages: true,
        IncludeMedia: true,
        PageNumber: 1,
        PageSize: 30,
      },
    })
      .then((res) => setVideoData(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (videoData && initialInstance) {
      setHeroData(videoData?.Entities[0]);
    }
  }, [videoData]);

  return (
    <Box margin={'30px'}>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {videoData ? (
          videoData?.Entities?.map((item) => (
            <SwiperSlide key={item.Guid}>
              <Box
                bgImage={
                  item?.Images[0]?.Url || 'https://via.placeholder.com/400'
                }
                minH={'300px'}
                bgSize={'cover'}
                borderRadius={'10px'}
                onClick={() => setHeroData(item)}
                _hover={{ opacity: 0.8, cursor: 'pointer' }}
              />
            </SwiperSlide>
          ))
        ) : (
          <Flex justifyContent={'center'} alignItems={'center'} minH={'200px'}>
            <Spinner />
          </Flex>
        )}
      </Swiper>
    </Box>
  );
};

export default SwiperBox;
