import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import styles from '../../styles/mypage/mymain.module.css';
import pro from '../../styles/mypage/mypromain.module.css';
import UserProfile from '../../components/UserProfile';

function MyProMain(props) {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
   // 스크롤 이벤트 핸들러
   const handleScroll = () => {
      if (window.scrollY > 0) {
         setIsScrolled(true);
      } else {
         setIsScrolled(false);
      }
   };

   // 윈도우 크기가 0보다 클 때 스크롤 이벤트 등록
   if (window.innerWidth > 0) {
      window.addEventListener("scroll", handleScroll);
   }

   // 컴포넌트 언마운트 시 이벤트 제거
   return () => {
      window.removeEventListener("scroll", handleScroll);
   };
   }, []); // 빈 배열로 한 번만 실행

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>마이페이지</h2>
            <p className={commons.sub_title}>약지기에서의 나의 기록들을 확인하세요</p>
         </div>

         <nav className={`${styles.mypage_nav} ${isScrolled ? styles.bg_on : ""}`}>
            <ul>
               <li className={styles.home}>
                  <Link to="/mypromain">
                     <span class="material-symbols-outlined">home</span>
                  </Link>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>회원정보</div>
                  <div className={styles.dropdownContent}>
                     <p>캘린더</p>
                     <p>스크랩</p>
                     <p>내가 쓴 리뷰</p>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>상담내역</div>
                  <div className={styles.dropdownContent}>
                     <p>내 프로필</p>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>문의내역</div>
                  <div className={styles.dropdownContent}>
                     <p>1 : 1 문의 내역</p>
                     <p>불편사항 신고 내역</p>
                  </div>
               </li>
            </ul>
         </nav>

         {/* User Profile */}
         <div className={mycommons.my__profile__container}>
            <UserProfile />
         </div>

         

         <div className={mycommons.my__container}>
            <ul className={pro.my__container}>
               {/* 처방 내역 */}
               <li>
                  
               </li>
               {/* 복약 일지 */}
               <li>

               </li>
               {/* 상담 내역 */}
               <li>

               </li>
               {/* 문의 내역 */}
               <li>

               </li>
            </ul>
         </div>
      </>
   );
}

export default MyProMain;