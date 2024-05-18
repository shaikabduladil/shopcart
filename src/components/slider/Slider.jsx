import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import sliderImage1 from "../../assets/images/sliderImage01.png";
import sliderImage2 from "../../assets/images/sliderImage02.png";
import sliderImage3 from "../../assets/images/sliderImage03.png";
import sliderImage4 from "../../assets/images/sliderImage04.png";
import './slider.css';

const Slider = () => {
  const sliderImages = [
    { img: sliderImage1, id: 1 },
    { img: sliderImage2, id: 2 },
    { img: sliderImage3, id: 3 },
    { img: sliderImage4, id: 4 },
  ];
  return (
    <div id="image-slider" className="mb-4">
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        allowTouchMove={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination  ={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
      >
        {sliderImages?.map((image,index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slider-image-container">
              <img src={image.img} />
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <img src={sliderImage1} />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
    </div>
  );
};

export default Slider;
