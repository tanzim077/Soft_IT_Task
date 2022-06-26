import { Swiper, SwiperSlide } from "swiper/react";
import audioJungle from "../../assets/images/audiojunglepng.png";
import codeCanyon from "../../assets/images/codecanyon.png";
import graphicRiver from "../../assets/images/graphicriver.png";
import themeForest from "../../assets/images/themeforest.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Box } from "@mui/material";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";

const images = [
  themeForest,
  graphicRiver,
  audioJungle,
  codeCanyon,
  themeForest,
  graphicRiver,
  audioJungle,
  codeCanyon,
  themeForest,
  graphicRiver,
  audioJungle,
  codeCanyon,
];
const BoxArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #222222;
  color: white;
`;

const AdBanner = () => {
  return (
    <Box container sx={{ px: 12, py : 4  }}>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <BoxArea>
                <img src={image} alt="" />
              </BoxArea>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default AdBanner;
