import { Link } from 'react-router-dom';
import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import basic from '../../styles/mypage/mybasicmain.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import UserBasicProfile from '../../components/UserBasicProfile';


function MyBasicMain(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />

         {/* User Profile */}
         <div className={mycommons.my__profile__container}>
            <UserBasicProfile />
         </div>

         <div className={mycommons.my__container}>
            <ul className={basic.my__container__list}>
               {/* 처방 내역 */}
               <li>
                  <div className={basic.my__list__title}>
                     <p>처방 내역</p>
                     <button>
                        <Link to="/mybasicboardrecords">
                           더보기
                           <span class="material-symbols-outlined">
                              chevron_right
                           </span>
                        </Link>
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
                        <Link to="/mybasicboardlog">
                           더보기
                           <span class="material-symbols-outlined">
                              chevron_right
                           </span>
                        </Link>
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
                        <Link to="/mybasicboardcounsel">
                           더보기
                           <span class="material-symbols-outlined">
                              chevron_right
                           </span>
                        </Link>
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
               {/* 문의 내역 */}
               <li>
                  <div className={basic.my__list__title}>
                     <p>문의 내역</p>
                     <button>
                        <Link to="/mybasicboardinquiry">
                           더보기
                           <span class="material-symbols-outlined">
                              chevron_right
                           </span>
                        </Link>
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
            </ul>
         </div>
      </>
   );
}

export default MyBasicMain;