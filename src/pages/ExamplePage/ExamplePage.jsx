import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function ExamplePage() {
    return (
        <>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 1</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 2</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 3</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 4</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 5</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 6</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 7</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 8</SwiperSlide>
            <SwiperSlide style={{height: '250px'}}>Slide lorem ipsom shit dollar... 9</SwiperSlide>
          </Swiper>
        </>
      );
}

export default ExamplePage;