// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper';

import shop from '../../assets/images/shop.jpg';
import shop1 from '../../assets/images/shop1.jpg';
import shopping from '../../assets/images/shopping.jpg';

import style from './Banner.module.css';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <Swiper
      mousewheel={{
        invert: true,
      }}
      rewind={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className={`${style['swipper']}`}
    >
      <SwiperSlide style={{ width: '100%' }}>
        <div>
          <div className={style['center-item']}>
            <h3>Local With International Quality</h3>
            <p>Localla offering local brand with international quality</p>
            <button className={style['banner-btn']}>Shopping Now</button>
          </div>
          <img className={style['swiper-img']} alt="" src={shop} />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%' }}>
        <Container>
          <div className={style['left-item']}>
            <h3>Think Globally Act Locally</h3>
            <p>Globalization must be grow up with localization</p>
            <button className={style['banner-btn']}>Shopping Now</button>
          </div>
        </Container>
        <img className={style['swiper-img']} alt="" src={shop1} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%' }}>
        <div>
          <div className={style['center-item']}>
            <h3>Support Your Local</h3>
            <p>Put your money where your house is</p>
            <button className={style['banner-btn']}>Shopping Now</button>
          </div>
          <img className={style['swiper-img']} alt="" src={shopping} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
