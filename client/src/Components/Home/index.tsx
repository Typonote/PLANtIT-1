import Navigation from 'Components/Common/Navigation';
import First from 'Components/Home/First';
import Second from 'Components/Home/Second';
import Third from 'Components/Home/Third';
import Fourth from 'Components/Home/Fourth';
import Fifth from 'Components/Home/Fifth';
import Sixth from 'Components/Home/Sixth';
import SwiperCore, { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'Components/Home/scss/Home.scss';
import 'swiper/components/pagination/pagination.scss';
import Dummy from 'Assets/Dummy/Thrid.js';

SwiperCore.use([Mousewheel, Pagination]);

const bullet = [
  '- 소개',
  '- 영상',
  '- 질병도감',
  '- 인공지능',
  '- 커뮤니티',
  '- 메세지',
];

export default function Home(): JSX.Element {
  return (
    <div className="Home__Container">
      <Navigation />
      <Swiper
        style={{ height: '100vh' }}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        speed={1000}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<div class="' +
              className +
              '"><span>' +
              bullet[index] +
              '</span></div>'
            );
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <First />
        </SwiperSlide>
        <SwiperSlide>
          <Second />
        </SwiperSlide>
        <SwiperSlide>
          <Third data={Dummy} />
        </SwiperSlide>
        <SwiperSlide>
          <Fourth />
        </SwiperSlide>
        <SwiperSlide>
          <Fifth />
        </SwiperSlide>
        <SwiperSlide>
          <Sixth />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
