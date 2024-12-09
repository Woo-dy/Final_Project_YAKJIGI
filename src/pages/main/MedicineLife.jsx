import React from 'react';
import { Link } from 'react-router-dom';


function MedicineLife(props) {

   return (
      <div className="main__medicine__Life">
         <h2 data-aos="fade-up" className='main__title'>
            안전한 의약 생활을 위한<br />당신의 동반자, 약지기
         </h2>
         <h3 data-aos="fade-up" className='main__description'>
            모두가 안심하고 사용할 수 있는 의약 정보를 제공합니다.
         </h3>

         <ul className="main__medicine__Life__contents">
            <li data-aos="fade-up" data-aos-delay="0">
               <Link to="/test">
                  <img src="./images/main_slide_1.jpg" alt="이미지" />
                  <div className='icon'></div>
                  <p>의약품 검색하기</p>
                  <em>의약품 정보를 쉽고 빠르게 찾아보세요</em>
               </Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
               <Link to="/test">
                  <img src="./images/main_slide_2.jpg" alt="이미지" />
                  <div className='icon'></div>
                  <p>부작용 검색하기</p>
                  <em>의약품을 안전하게 사용하세요</em>
               </Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
               <Link to="/test">
                  <img src="./images/main_slide_3.jpg" alt="이미지" />
                  <div className='icon'></div>
                  <p>병용금기 검색하기</p>
                  <em>약물 간의 상호작용을 놓치지 마세요</em>
               </Link>
            </li>
         </ul>
      </div>
   );
}

export default MedicineLife;