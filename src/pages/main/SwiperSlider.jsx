import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'; // React용 Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // 모듈 경로 수정
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import AOS from 'aos';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';

function SwiperSlider(props) {
   useEffect(() => {
      const swiperContainer = document.querySelector(".swiper");
      if (!swiperContainer) return;
      const swiperInstance = swiperContainer.swiper;

      const animateActiveSlide = () => {
         const activeSlide = document.querySelector(".swiper-slide-active");
         if (!activeSlide) return;

         gsap.fromTo(
            activeSlide.querySelector("h2.swiper_title"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
         );

         gsap.fromTo(
            activeSlide.querySelector("p.swiper_contents"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5 }
         );

         gsap.fromTo(
            activeSlide.querySelector("button"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.0 }
         );
      };

      swiperInstance.on("slideChangeTransitionStart", animateActiveSlide);
      animateActiveSlide();

      AOS.init({ duration: 1000 });

      return () => {
         AOS.refresh();
         swiperInstance.off("slideChangeTransitionStart", animateActiveSlide);
      };
   }, []);

   return (
      <>
         <section className='main__Slider'>
            <Swiper
               modules={[Autoplay, Pagination, Navigation]} // 사용하는 모듈 추가
               autoplay={{
                  delay: 8000, // 3초마다 슬라이드 변경
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
                     <h2 className='swiper_title' data-duration="1">안전한 복약, 간편한 검색!</h2>
                     <p className='swiper_contents' data-duration="2">의약품 정보를 빠르고 정확하게 검색하세요</p>
                     <button data-duration="3">
                        <Link to="/sub201">바로가기</Link>
                     </button>
                  </div>
               </SwiperSlide>

               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_2.jpg)"}}>
                  <div>
                     <h2 className='swiper_title' data-duration="1">부작용과 병용금기, 미리 체크!</h2>
                     <p className='swiper_contents' data-duration="2">부작용과 병용금기 정보를 쉽게 검색하고 미리 준비하세요</p>
                     <button data-duration="3">
                        <Link to="/sub202">바로가기</Link>
                     </button>
                  </div>
               </SwiperSlide>


               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_3.jpg)"}}>
                  <div>
                     <h2 className='swiper_title' data-duration="1">편리한 약국 찾기</h2>
                     <p className='swiper_contents' data-duration="2">근처 약국을 쉽게 찾고, 정보를 바로 확인하세요</p>
                     <button data-duration="3">
                        <Link to="/sub301">바로가기</Link>
                     </button>
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
                     BEST 검색어1
                  </Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to='/sub201'>
                     BEST 검색어2
                  </Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to='/sub201'>
                     BEST 검색어3
                  </Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to='/sub201'>
                     BEST 검색어4
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