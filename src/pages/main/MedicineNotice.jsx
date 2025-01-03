import React from 'react';
import { Link } from 'react-router-dom';

function MedicineNotice(props) {
   return (
      <div className='main__notice__container'>
         <ul>
            <li>
               <h2 className='main__title' >공지사항</h2>
               <h3 className='main__description'>새로운 소식을 만나보세요.</h3>
               <Link to="/notice" className='main__btn'>VIEW MORE</Link>
            </li>
            <li>
               <ul className='main__notice__list'>
                  <li>
                     <Link to="/noticelist">
                        <div>
                           <p className='main__Days'>08</p>
                           <em className='main__Year'>2024.12</em>
                        </div>
                        <div>
                           <p className='main__title'>U2CLab 홈페이지가 오픈하였습니다.</p>
                           <em className='main__descriptions'>체외진단 의료기기 임상시험 분야 대한민국 No.1 U2CLab의 홈페이지가 새롭게 오픈하였습니다. 많은 관심...</em>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/noticelist">
                        <div>
                           <p className='main__Days'>08</p>
                           <em className='main__Year'>2024.12</em>
                        </div>
                        <div>
                           <p className='main__title'>U2CLab 홈페이지가 오픈하였습니다.</p>
                           <em className='main__descriptions'>체외진단 의료기기 임상시험 분야 대한민국 No.1 U2CLab의 홈페이지가 새롭게 오픈하였습니다. 많은 관심...</em>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/noticelist">
                        <div>
                           <p className='main__Days'>08</p>
                           <em className='main__Year'>2024.12</em>
                        </div>
                        <div>
                           <p className='main__title'>U2CLab 홈페이지가 오픈하였습니다.</p>
                           <em className='main__descriptions'>체외진단 의료기기 임상시험 분야 대한민국 No.1 U2CLab의 홈페이지가 새롭게 오픈하였습니다. 많은 관심...</em>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/noticelist">
                        <div>
                           <p className='main__Days'>08</p>
                           <em className='main__Year'>2024.12</em>
                        </div>
                        <div>
                           <p className='main__title'>U2CLab 홈페이지가 오픈하였습니다.</p>
                           <em className='main__descriptions'>체외진단 의료기기 임상시험 분야 대한민국 No.1 U2CLab의 홈페이지가 새롭게 오픈하였습니다. 많은 관심...</em>
                        </div>
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   );
}

export default MedicineNotice;
