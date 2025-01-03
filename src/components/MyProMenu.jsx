import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/mypage/mymain.module.css';

function MyProMenu(props) {
   const location = useLocation();
   const [isScrolled, setIsScrolled] = useState(false);
   
   // 한 페이지 내에 페이지가 여러개 추가될 시 버튼 활성화  
   const activeClass = ['/myproboardcounsel',
                        '/myprouserinfo', 
                        '/myprouserinfopwchange', 
                        '/myproboardcounselwrite',
                        '/myproboardcounselupdate',
                        '/myproboardcounseldetail',
                        '/myproboardcounselmy',
                        '/myproboardcounselmywrite',
                        '/myproboardcounselmydetail',
                        '/myproboardcounselmyupdate',
                        '/myproboardinquiry',
                        '/myproboardinquirywrite',
                        '/myproboardinquiryupdate',
                        '/myproboardinquirydetail' ].includes(location.pathname) ? 
                           styles.activate : '';

   useEffect(() => {
   // 스크롤 이벤트 핸들러
   const handleScroll = () => {
      if (window.scrollY > 60) {
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
                  <Link to="/mypromain" className={`${styles.link} ${location.pathname === '/mypromain' ? styles.active : ''}`}>
                     <span class="material-symbols-outlined">home</span>
                  </Link>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link to="/myprouserinfo" className={['/myprouserinfo', '/myprouserinfopwchange'].includes(location.pathname) ? activeClass : ''}>
                        회원정보
                     </Link>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link 
                        to="/myproboardcounsel" 
                        className={['/myproboardcounsel', 
                                    '/myproboardcounselwrite',
                                    '/myproboardcounselupdate',
                                    '/myproboardcounseldetail',
                                    '/myproboardcounselmy',
                                    '/myproboardcounselmywrite',
                                    '/myproboardcounselmydetail',
                                    '/myproboardcounselmyupdate'
                        ].includes(location.pathname) ? activeClass : ''}>
                        상담내역
                     </Link>

                  </div>
                  <div className={styles.dropdownContent}>
                     <p>
                        <Link to="/myproboardcounsel" className={['/myproboardcounsel', '/myproboardcounselmy'].includes(location.pathname) ? activeClass : ''}>
                           전문가와의 상담
                        </Link>
                     </p>
                     <p>
                        <Link to="/myproboardcounselmy" className={['/myproboardcounsel', '/myproboardcounselmy'].includes(location.pathname) ? activeClass : ''}>
                           내 상담내역
                        </Link>
                     </p>
                  </div>
               </li>
               <li className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                     <Link 
                        to="/myproboardinquiry" 
                        className={['/myproboardinquiry', 
                                    '/myproboardinquirywrite',
                                    '/myproboardinquiryupdate',
                                    '/myproboardinquirydetail'
                        ].includes(location.pathname) ? activeClass : ''}>
                        운영진에게 문의
                     </Link>
                  </div>
               </li>
            </ul>
         </nav>
      </>
   );
}

export default MyProMenu;