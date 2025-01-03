import React from 'react';
import { Link } from 'react-router-dom';

function MedicineDefault(props) {
   return (
      <>
         <div className='Main__stickycontainer'>

            <div className="Main__textcontents">
               <h2>올바른 의약 지식의 시작</h2>
               <span>의약품에 대한 궁금증, 여기서 해결하세요</span>
            </div>

            <div className="Main__image__contents">
               <div className='Main__imgbox01 Main__imgbox_contents' data-aos="fade-up">
                  <Link to="/sub101">
                     <div class="info">
                        <h3>의약품의 정의</h3>
                        <span>의약품이란 무엇인가? 건강을 위한 필수 지식</span>
                     </div>
                     <img src="./images/main/medicine01.jpg" alt="이미지" />
                  </Link>
               </div>
               <div className='Main__imgbox02 Main__imgbox_contents' data-aos="fade-up" data-aos-delay="200">
                  <Link to="/sub102">
                     <div class="info">
                        <h3>의약품의 종류</h3>
                        <span>일반의약품, 전문의약품, 건강기능식품의 차이점 알아보기</span>
                     </div>
                     <img src="./images/main/medicine02.jpg" alt="이미지" />
                  </Link>
               </div>
               <div className='Main__imgbox03 Main__imgbox_contents' data-aos="fade-up" data-aos-delay="200">
                  <Link to="/sub103">
                     <div class="info">
                        <h3>의약품의 허가과정</h3>
                        <span>안전한 약물이 탄생하기까지의 여정</span>
                     </div>
                     <img src="./images/main/medicine03.jpg" alt="이미지" />
                  </Link>
               </div>
               <div className='Main__imgbox04 Main__imgbox_contents' data-aos="fade-up" data-aos-delay="200">
                  <Link to="/sub104">
                     <div class="info">
                        <h3>신약과 제네릭</h3>
                        <span>혁신적인 신약과 경제적인 제네릭의 이해</span>
                     </div>
                     <img src="./images/main/medicine04.jpg" alt="이미지" />
                  </Link>
               </div>
               <div className='Main__imgbox05 Main__imgbox_contents' data-aos="fade-up" data-aos-delay="400">
                  <Link to="/sub105">
                     <div class="info">
                        <h3>의약품 관련 법령</h3>
                        <span>약사법부터 고시까지, 의약품을 둘러싼 법적 정보</span>
                     </div>
                     <img src="./images/main/medicine05.jpg" alt="이미지" />
                  </Link>
               </div>
            </div>

            
         </div>
      </>
   );
}

export default MedicineDefault;