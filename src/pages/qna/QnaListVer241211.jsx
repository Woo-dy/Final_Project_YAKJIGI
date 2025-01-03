import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import commons from '../../styles/common.module.css';
import swipernavi from '../../styles/qna/Navigation.module.css';

function QnaList(props) {

   return (
      <>
         <div className={`${commons.sub101__container} ${commons.container__box}`}>
            <h2>전문가와의 상담</h2>
            <p>도심 공원에서 만나는  자연과 지속가능성</p>
         </div>

         <div className={swipernavi.Qna__slide}>
            <Swiper Autoplay
               modules={[Autoplay, Pagination, Navigation]} // 사용하는 모듈
               spaceBetween={30} // 슬라이드 간 간격
               loop={true} // 무한 반복 추가src/pages/main/SwiperSlider.jsx
               slidesPerView={5} // 한 화면에 보여줄 슬라이드 개
               navigation={{
                  nextEl: `.${swipernavi.next}`,
                  prevEl: `.${swipernavi.prev}`,
               }} // 네비게이션 화살표 추가
            >
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>
               <SwiperSlide style={{background:"#ddd"}}>
                  이미지<br />
                  텍스트
               </SwiperSlide>

               {/* 사용자 정의 버튼 (넘기는 버튼) */}
               <div className={swipernavi.prev}>
                  <div className="material-icons">arrow_back</div>
               </div>
               <div className={swipernavi.next}>
                  <div className="material-icons">arrow_forward</div>
               </div>	
            </Swiper>
         </div>
      </>
   );
}

export default QnaList;