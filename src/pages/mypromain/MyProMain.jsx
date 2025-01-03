import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import pro from '../../styles/mypage/mypromain.module.css';
import MyProMenu from '../../components/MyProMenu';
import { Link } from 'react-router-dom';
import UserProProfile from '../../components/UserProProfile';

function MyProMain(props) {

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>마이페이지</h2>
            <p className={commons.sub_title}>약지기에서의 나의 기록들을 확인하세요</p>
         </div>

         <MyProMenu />

         {/* User Profile */}
         <div className={mycommons.my__profile__container}>
            <UserProProfile />
         </div>

         

         <div className={mycommons.my__container}>
            <ul className={pro.my__container__list}>
               {/* 상담 내역 */}
               <li>
                  <div className={pro.my__list__title}>
                     <p>상담 내역</p>
                     <button>
                        <Link to="/myproboardcounsel">
                           더보기
                           <span class="material-symbols-outlined">
                              chevron_right
                           </span>
                        </Link>
                     </button>
                  </div>
                  <div className={pro.my__consultation}>
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
                                 <span className={pro.my__wait}>상담대기</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>상담완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>상담완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>상담완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>상담완료</span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </li>
               {/* 문의 내역 */}
               <li>
                  <div className={pro.my__list__title}>
                     <p>문의 내역</p>
                     <button>
                        <Link to="/myproboardinquiry">
                           더보기
                           <span class="material-symbols-outlined">
                              chevron_right
                           </span>
                        </Link>
                     </button>
                  </div>
                  <div className={pro.my__consultation}>
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
                                 <span className={pro.my__wait}>답변대기</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>답변완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>답변완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>답변완료</span>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>타이틀입니다.</p>
                              </td>
                              <td>
                                 <span className={pro.my__complete}>답변완료</span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </li>
            </ul>
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