import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './Banner.module.css';

import shop1 from '../../assets/images/shop1.jpg';
import shopping from '../../assets/images/shopping.jpg';
import Banner1_Image from '../../assets/images/Banner1_Image.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

const Banner = () => {
  const navigate = useNavigate();

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
            <h3 style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
              Dukung Usaha Fashion Local Agar Bisa Berkembang
            </h3>
            <p style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.2)' }}>#BanggaBuatanIndonesia</p>
            <button
              className={style['banner-btn']}
              onClick={() => {
                return navigate('/search/baju');
              }}
            >
              Belanja sekarang
            </button>
          </div>
          <img className={style['swiper-img']} alt="" src={Banner1_Image} />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%' }}>
        <Container>
          <div className={style['left-item']}>
            <h3 style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>Kembangkan Bisnis Fashion Mu</h3>
            <p style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.2)' }}>
              Lebarkan pasar bisnis mu agar semakin berkembang
            </p>
            <button
              className={style['banner-btn']}
              onClick={() => {
                if (localStorage.getItem('access_token')) {
                  return navigate('/mystore');
                }
                return navigate('/login');
              }}
            >
              {localStorage.getItem('access_token') ? 'Buka toko' : 'Daftar Sekarang'}
            </button>
          </div>
        </Container>
        <img className={style['swiper-img']} alt="" src={shop1} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%' }}>
        <div>
          <div className={style['center-item']}>
            <h3 style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>Temukan Harga Terbaik</h3>
            <p style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.2)' }}>
              Bebas nego harga produk yang kamu inginkan dengan penjual
            </p>
            <button
              className={style['banner-btn']}
              onClick={() => {
                return navigate('/search/tas');
              }}
            >
              Nego Sekarang
            </button>
          </div>
          <img className={style['swiper-img']} alt="" src={shopping} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
