import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import styles from '../../styles/mypage/mymain.module.css';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicUserInfo(props) {
   const location = useLocation();
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
                  <Link to="/mybasicmain" className={`${styles.link} ${location.pathname === '/mybasicmain' ? styles.text_active : ''}`}>
                     <span class="material-symbols-outlined">home</span>
                  </Link>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/mybasicinfo" className={`${styles.link} ${location.pathname === '/mybasicinfo' ? styles.textActive : ''}`}>
                        회원정보
                     </Link>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/mybasicboardcounsel" className={`${styles.link} ${location.pathname === '/mybasicboardcounsel' ? styles.textActive : ''}`}>
                        게시판
                     </Link>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>복약일지</div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>진료기록</div>
               </li>
            </ul>
         </nav>

         <div className={mycommons.my__container} style={{margin:"60px auto 120px"}}>
            <div style={{width:"100%", height:"3000px", backgroundColor:"#ddd"}}>
               내용입니다.
            </div>
         </div>
      </>
   );
}

export default MyBasicUserInfo;