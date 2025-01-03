import { Link, useLocation } from 'react-router-dom';
import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import board from '../../styles/boardcommon.module.css';
import styles from '../../styles/mypage/mymain.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import myprostyles from '../../styles/mypage/myproboardcounsel.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// import info from '../../styles/mypage/mybasicboardcounsel.module.css';

function MyBasicBoardCounsel(props) {
   const location = useLocation();

   const { mainTitle, subTitle } = useDocumentTitle();

   const proCounselDetailBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardcounseldetail'; // 클릭 시에만 이동
   };

   const proCounselWriteBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardcounselwrite'; // 클릭 시에만 이동
   };
   
   // 한 페이지 내에 페이지가 여러개 추가될 시 버튼 활성화  
   const activeClass = ['/mybasicboardcounsel',
                        '/mybasicboardcounselwrite',
                        '/mybasicboardcounselupdate',
                        '/mybasicboardcounseldetail' ].includes(location.pathname) ? 
                        styles.boardActive : '';

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />

         <div className={styles.my__board__tabmenu}>
            <ul>
               <li className={['/mybasicboardcounsel', 
                              '/mybasicboardcounselwrite',
                              '/mybasicboardcounselupdate',
                              '/mybasicboardcounseldetail'
                  ].includes(location.pathname) ? activeClass : ''}
               >
                  <Link to="/mybasicboardcounsel">
                     전문가와의 상담
                  </Link>
               </li>
               <li className={`${styles.link} ${location.pathname === '/mybasicboardinquiry' ? styles.boardActive : ''}`}>
                  <Link to="/mybasicboardinquiry">운영진에게 문의</Link>
               </li>
            </ul>
         </div>

         <div className={mycommons.my__container} style={{margin:"60px auto 120px"}}>
            <div>
               <ul className={myprostyles.myprocounsel__inquiry__number}>
                  <li>총 <span>16</span>건</li>
                  <li className={myprostyles.myprocounsel__search}>
                     <div className={myprostyles.myprocounsel__search__box}>
                        <form action="">
                           <div className={commons.common__searchbar__box}>
                              <input type="text" className={commons.common__search__input} placeholder="검색어를 입력해주세요" />
                              <span className="material-icons">search</span>
                           </div>
                        </form>
                     </div>
                  </li>
               </ul>
            </div>

            <div className={myprostyles.myprocounsel__container__list__table}>
               <table className={myprostyles.myprocounsel__list_table}>
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>처리상태</th>
                        <th>등록일</th>
                     </tr>
                  </thead>
                  <tbody>
                  <tr onClick={proCounselDetailBtn}>
                        <td>10</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>9</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>8</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>7</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>6</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>5</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>4</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>3</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                              상담대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>2</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_completed}>
                              상담완료
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={proCounselDetailBtn}>
                        <td>1</td>
                        <td><p>약은 약사에게 진료는 의사에게</p></td>
                        <td>
                           <div className={myprostyles.myprocounsel__status_completed}>
                              상담완료
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            

            <div className={board.board_button_box}>
               <ul className={board.two}>
                  <li>
                  </li>
                  <li>
                     <Link onClick={proCounselWriteBtn}>글쓰기</Link>
                  </li>
               </ul>
            </div>

            {/* paging 영역 start */}
            <div>
               <ul className={myprostyles.paging_num_ul}>
                  <li className="material-icons prev">keyboard_double_arrow_left</li>
                  <li className="material-icons prev">chevron_left</li>
                  <li className={myprostyles.active}>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li className="material-icons next">chevron_right</li>
                  <li className="material-icons next">keyboard_double_arrow_right</li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default MyBasicBoardCounsel;