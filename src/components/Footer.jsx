import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'; // React용 Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // 모듈 경로 수정
import { Link } from 'react-router-dom';

function Footer(props) {
   return (
      <>
         <footer>
            <div className='logos'>
               <div className='inner'>
                  <Swiper 
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
                        1000: { slidesPerView: 5, spaceBetween: 30 },
                     }} // 반응형
                  >
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon1.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon2.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon3.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon4.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon5.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon6.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon7.png" alt="이미지" style={{width: "100%"}} />
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Link>
                           <img src="./images/main/f_icon8.png" alt="이미지" style={{width: "100%"}} />
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
            <div className='footer__content'>
               <ul class="btn-group">
                  <Link class="btn btn__white" to="/privacy">개인정보처리방침</Link>
                  <Link class="btn btn__white" to="/termsofuse">이용약관</Link>
                  <Link class="btn btn__white" to="/minquirylist">운영진에게 문의</Link>
                  <Link class="btn btn__white" to="/noticelist">공지사항</Link>
               </ul>
               <p>TEL : 031-1234-5678 Email : official@naver.com <br />
               주소 : 경기도 고양시 덕양구 행신동 000길 00 ○○빌딩 ○○○호 </p>
               <p className='copyright'>© YAKJIGI. All Rights Reserved.</p>
            </div>
         </footer>
      </>
   );
}

export default Footer;