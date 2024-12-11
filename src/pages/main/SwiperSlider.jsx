import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'; // React용 Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // 모듈 경로 수정
import { Link } from 'react-router-dom';

function SwiperSlider(props) {
   return (
      <>
         <section className='main__Slider'>
            <Swiper
               modules={[Autoplay, Pagination, Navigation]} // 사용하는 모듈 추가
               autoplay={{
                  delay: 3000, // 3초마다 슬라이드 변경
                  disableOnInteraction: false, // 사용자 조작 시 자동 재생 유지
               }}
               loop={true} // 무한 반복 추가src/pages/main/SwiperSlider.jsx
               spaceBetween={0} // 슬라이드 간 간격
               slidesPerView={1} // 한 화면에 보여줄 슬라이드 개수
               pagination={{ clickable: true }} // 페이지네이션 옵션
               navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
               }} // 네비게이션 화살표 추가
               breakpoints={{ 
                  640: { slidesPerView: 1, spaceBetween: 0 },
                  768: { slidesPerView: 1, spaceBetween: 0 },
                  1024: { slidesPerView: 1, spaceBetween: 0 },
               }} // 반응형
            >
               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_1.jpg)"}}>
                  <div>
                     <h2 data-duration="1">개미는~ 뚠뚠~ 오늘도~ 뚠뚠~ 열심히 일을 하네 
                     개미는~ 뚠뚠~ 언제나~ 뚠뚠~ 열심히 일을 하네</h2>
                     <p data-duration="2">개미는 아무 말도 하지 않지만 땀을 뻘뻘 흘리면서 
                     매일 매일의 살 길 위해서 열심히 일하네</p>
                     <button data-duration="3">바로가기</button>
                  </div>
               </SwiperSlide>

               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_2.jpg)"}}>
                  <div>
                     <h2 data-duration="1">개미는~ 뚠뚠~ 오늘도~ 뚠뚠~ 열심히 일을 하네 
                     개미는~ 뚠뚠~ 언제나~ 뚠뚠~ 열심히 일을 하네</h2>
                     <p data-duration="2">개미는 아무 말도 하지 않지만 땀을 뻘뻘 흘리면서 
                     매일 매일의 살 길 위해서 열심히 일하네</p>
                     <button data-duration="3">바로가기</button>
                  </div>
               </SwiperSlide>


               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_3.jpg)"}}>
                  <div>
                     <h2 data-duration="1">개미는~ 뚠뚠~ 오늘도~ 뚠뚠~ 열심히 일을 하네 
                     개미는~ 뚠뚠~ 언제나~ 뚠뚠~ 열심히 일을 하네</h2>
                     <p data-duration="2">개미는 아무 말도 하지 않지만 땀을 뻘뻘 흘리면서 
                     매일 매일의 살 길 위해서 열심히 일하네</p>
                     <button data-duration="3">바로가기</button>
                  </div>
               </SwiperSlide>


               {/* 사용자 정의 버튼 */}
               <div class="swiper-button-prev">
                  <div class="material-icons">arrow_back</div>
               </div>
               <div class="swiper-button-next">
                  <div class="material-icons">arrow_forward</div>
               </div>
            </Swiper>
         </section>

         


         <section className='main__Realtime__searchterms'>
            <Swiper
               modules={[Autoplay]} // 사용하는 모듈 추가
               direction="vertical"
               autoplay={true}
               loop={true} // 무한 반복
            >
               <SwiperSlide>
                  <Link to='/sub201'>
                     크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내
                  </Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to='/sub201'>
                     [당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트
                  </Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to='/sub201'>
                     스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
                  </Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to='/sub201'>
                     [당첨자 발표] 뉴이어 전자영수증 이벤트
                  </Link>
               </SwiperSlide>
            </Swiper>
               
            <Link to='/sub201' class="main__Realtime__search__icon">
               <div class="material-icons">search</div>
            </Link>
         </section>
      </>
   );
}

export default SwiperSlider;