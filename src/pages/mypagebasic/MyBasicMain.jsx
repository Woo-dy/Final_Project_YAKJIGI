import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import styles from '../../styles/mypage/mymain.module.css';
import basic from '../../styles/mypage/mybasicmain.module.css';
import UserProfile from '../../components/UserProfile';

function MyBasicMain(props) {
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
                  <Link to="/mybasicmain" className={`${styles.link} ${location.pathname === '/mybasicmain' ? styles.active : ''}`}>
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

         {/* User Profile */}
         <div className={mycommons.my__profile__container}>
            <UserProfile />
         </div>

         <div className={mycommons.my__container}>
            <ul className={basic.my__container__list}>
               {/* 처방 내역 */}
               <li>
                  <div className={basic.my__list__title}>
                     <p>처방 내역</p>
                     <button>
                        더보기
                        <span class="material-symbols-outlined">
                           chevron_right
                        </span>
                     </button>
                  </div>
                  <div>
                     <ul className={basic.my__prescription}>
                        <li>
                           <figure>
                              <img src='/images/length1.jpg' alt='length1' />
                           </figure>
                        </li>
                        <li>
                           <figure>
                              <img src='/images/length2.jpg' alt='length2' />
                           </figure>
                        </li>
                        <li>
                           <figure>
                              <img src='/images/length3.jpg' alt='length3' />
                           </figure>
                        </li>
                     </ul>
                  </div>
               </li>
               {/* 복약 일지 */}
               <li>
                  <div className={basic.my__list__title}>
                     <p>복약 일지</p>
                     <button>
                        더보기
                        <span class="material-symbols-outlined">
                           chevron_right
                        </span>
                     </button>
                  </div>
                  <div className={basic.my__medication__log}>
                     API 영역
                  </div>
               </li>
               {/* 상담 내역 */}
               <li>
                  <div className={basic.my__list__title}>
                     <p>상담 내역</p>
                     <button>
                        더보기
                        <span class="material-symbols-outlined">
                           chevron_right
                        </span>
                     </button>
                  </div>
                  <div className={basic.my__consultation}>
                     <table>
                        <colgroup>
                           <col width="calc(100% - 130px)"/>
                           <col width="130px"/>
                        </colgroup>
                        <thead>
                           <tr>
                              <th>제목</th>
                              <th>답변여부</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__wait}>답변대기</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>답변완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>답변완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>답변완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>답변완료</span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </li>
               {/* 문의 내역 */}
               <li>
                  <div className={basic.my__list__title}>
                     <p>문의 내역</p>
                     <button>
                        더보기
                        <span class="material-symbols-outlined">
                           chevron_right
                        </span>
                     </button>
                  </div>
                  <div className={basic.my__consultation}>
                     <table>
                        <colgroup>
                           <col width="calc(100% - 130px)"/>
                           <col width="130px"/>
                        </colgroup>
                        <thead>
                           <tr>
                              <th>제목</th>
                              <th>답변여부</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__wait}>상담대기</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>상담완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>상담완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>상담완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={basic.my__complete}>상담완료</span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </li>
            </ul>
         </div>
      </>
   );
}

export default MyBasicMain;