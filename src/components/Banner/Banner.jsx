// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';

import shop from '../../assets/images/shop.jpg';
import shop1 from '../../assets/images/shop1.jpg';
import shopping from '../../assets/images/shopping.jpg';

import style from './Banner.module.css';
import { Container } from 'react-bootstrap';

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
            <h3>Support Your Local / Local With International Quality</h3>
            <p>Localla offering local brand with international quality</p>
            <button
              className={style['banner-btn']}
              onClick={() => {
                if (localStorage.getItem('access_token')) {
                  return navigate('/mystore');
                }
                return navigate('/register');
              }}
            >
              {localStorage.getItem('access_token') ? 'Buka toko' : 'Daftar Sekarang'}
            </button>
          </div>
          <img className={style['swiper-img']} alt="" src={shop} />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%' }}>
        <Container>
          <div className={style['left-item']}>
            <h3>Think Globally Act Locally</h3>
            <p>Globalization must be grow up with localization</p>
            <button
              className={style['banner-btn']}
              onClick={() => {
                if (localStorage.getItem('access_token')) {
                  return navigate('/mystore');
                }
                return navigate('/register');
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
            <h3>Kembangkan Bisnis Fashion Mu</h3>
            <p>Lebarkan pasar bisnis mu agar semakin berkembang</p>
            <button
              className={style['banner-btn']}
              onClick={() => {
                if (localStorage.getItem('access_token')) {
                  return navigate('/product/addproduct');
                }
                return navigate('/search/asd');
              }}
            >
              {localStorage.getItem('access_token') ? 'Jual sekarang' : 'Cari produk'}
            </button>
          </div>
          <img className={style['swiper-img']} alt="" src={shopping} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
