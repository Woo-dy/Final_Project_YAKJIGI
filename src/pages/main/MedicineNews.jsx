import { Swiper, SwiperSlide } from 'swiper/react'; // React용 Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // 모듈 경로 수정
import { Link } from 'react-router-dom';

function MedicineNews(props) {
   return (
      <>
         <div className='Medicinenews__title'>
            <h2 className='main__title'>
               보도자료
            </h2>
            <h3 className='main__description'>
            새로운 소식을 만나보세요.
            </h3>
         </div>
         <div className='Medicinenews__slide'>
            <div className='inner'>
               <Swiper Autoplay
                  modules={[Autoplay, Pagination, Navigation]} // 사용하는 모듈

                  autoplay={{
                     delay: 3000, // 3초마다 슬라이드 변경
                     disableOnInteraction: false, // 사용자 조작 시 자동 재생 유지
                  }}
                  loop={true} // 무한 반복 추가src/pages/main/SwiperSlider.jsx
                  spaceBetween={30} // 슬라이드 간 간격
                  slidesPerView={5} // 한 화면에 보여줄 슬라이드 개
                  navigation={{
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                  }} // 네비게이션 화살표 추가
                  breakpoints={{ 
                     360: { slidesPerView: 1, spaceBetween: 30 },
                     480: { slidesPerView: 2, spaceBetween: 30 },
                     768: { slidesPerView: 3, spaceBetween: 30 },
                     1200: { slidesPerView: 5, spaceBetween: 30 },
                  }} // 반응형
               >
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                     <Link>
                        <img src="/images/main/medicinenews_1.jpg" alt="이미지" style={{width: "100%"}} />
                        <div className='Medicinenews__box'>
                           <h2>‘비타그란 비타민C 팝핑스틱 샤인머스캣 맛’ 출시</h2>
                           <p>‘비타그란 비타민C 팝핑스틱 
                           샤인머스캣 맛’ 출시</p>
                           <em>2024.00.00</em>
                        </div>
                     </Link>
                  </SwiperSlide>
               </Swiper>

               {/* 사용자 정의 버튼 */}
               <div class="swiper-button-prev">
                  <div class="material-icons">arrow_back</div>
               </div>
               <div class="swiper-button-next">
                  <div class="material-icons">arrow_forward</div>
               </div>
            </div>
         </div>
      </>
   );
}

export default MedicineNews;