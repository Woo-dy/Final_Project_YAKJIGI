import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/mypage/mymain.module.css';

function MyBasicMenu(props) {
   const location = useLocation();
   const [isScrolled, setIsScrolled] = useState(false);
   
   // 한 페이지 내에 페이지가 여러개 추가될 시 버튼 활성화 
   const activeClass = ['/mybasicboardcounsel', 
                        '/mybasicboardinquiry', 
                        '/mybasicboardlog', 
                        '/mybasicboardlogwrite', 
                        '/mybasicboardlogdetail', 
                        '/mybasicboardlogedit', 
                        '/mybasicboardrecords', 
                        '/mybasicboardrecordswrite', 
                        '/mybasicboardrecordsdetail' ].includes(location.pathname) ? 
                           styles.activate : '';

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
         <nav className={`${styles.mypage_nav} ${isScrolled ? styles.bg_on : ""}`}>
            <ul>
               <li className={styles.home}>
                  <Link to="/mybasicmain" className={`${styles.link} ${location.pathname === '/mybasicmain' ? styles.active : ''}`}>
                     <span class="material-symbols-outlined">home</span>
                  </Link>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/mybasicuserinfo" className={`${styles.link} ${location.pathname === '/mybasicuserinfo' ? styles.textActive : ''}`}>
                        회원정보
                     </Link>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/mybasicboardcounsel" className={['/mybasicboardcounsel', '/mybasicboardinquiry'].includes(location.pathname) ? activeClass : ''}>
                        게시판
                     </Link>
                  </div>
                  <div className={styles.dropdownContent}>
                     <p>
                        <Link to="/mybasicboardcounsel" className={['/mybasicboardcounsel', '/mybasicboardinquiry'].includes(location.pathname) ? activeClass : ''}>
                           전문가와의 상담
                        </Link>
                     </p>
                     <p>
                        <Link to="/mybasicboardinquiry" className={['/mybasicboardcounsel', '/mybasicboardinquiry'].includes(location.pathname) ? activeClass : ''}>
                           운영진에게 문의
                        </Link>
                     </p>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/mybasicboardlog" className={['/mybasicboardlog', '/mybasicboardlogwrite', '/mybasicboardlogdetail', '/mybasicboardlogedit'].includes(location.pathname) ? activeClass : ''}>
                        복약일지
                     </Link>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/mybasicboardrecords"  className={['/mybasicboardrecords', '/mybasicboardrecordswrite', '/mybasicboardrecordsdetail'].includes(location.pathname) ? activeClass : ''}>
                        진료기록
                     </Link>
                  </div>
               </li>
            </ul>
         </nav>
      </>
   );
}

export default MyBasicMenu;