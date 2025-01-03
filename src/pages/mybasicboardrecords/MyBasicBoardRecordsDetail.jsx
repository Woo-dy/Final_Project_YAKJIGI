import commons from '../../styles/common.module.css';
import board from '../../styles/boardcommon.module.css';
import styles from '../../styles/mypage/mybasicboardrecordsdetail.module.css';
import boardlog from '../../styles/mypage/mybasicboardlogcommon.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicBoardRecordsDetail(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const BasicBoardCordsListBtn = (event) => {
         event.preventDefault(); // 기본 동작 방지
         window.location.href = '/mybasicboardrecords'; // 클릭 시에만 이동
   };

   const BasicBoardCordsUpdateBtn = (event) => {
         event.preventDefault(); // 기본 동작 방지
         window.location.href = '/mybasicboardrecordsupdate'; // 클릭 시에만 이동
   };

   return (
         <>
         <div className={commons.container__box__title}>
               <h2 className={commons.main_title}>{mainTitle}</h2>
               <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />
         
         <div className={styles.mybasicboardrecordsdetail_container}>
            {/* 좌우 섹션 */}
            <div className={styles.left_right_section}>
               {/* 좌측 : 처방전 이미지 영역 */}
               <div className={styles.image_section}>
                  <img src="/images/mybasicboardrecords/records_1.jpg" alt="진료 기록 이미지입니다" className={styles.image} />
               </div>

               {/* 우측 : 정보 텍스트 영역 */}
               <div className={styles.form_section}>
                  <ul className={boardlog.boardlog__ul}>
                     <li className={boardlog.boardlog__title}>
                        처방 일자
                     </li>
                     <li className={boardlog.boardlog__contents}>
                        <p>내용 입니다. 내용 입니다. 내용 입니다.</p>
                     </li>
                     <li className={boardlog.boardlog__title}>
                        약국명
                     </li>
                     <li className={boardlog.boardlog__contents}>
                        <p>내용 입니다. 내용 입니다. 내용 입니다.</p>
                     </li>
                     <li className={boardlog.boardlog__title}>
                        약사명
                     </li>
                     <li className={boardlog.boardlog__contents}>
                        <p>내용 입니다. 내용 입니다. 내용 입니다.</p>
                     </li>
                     <li className={boardlog.boardlog__title__wide}>
                        처방내역
                     </li>
                     <li className={boardlog.boardlog__contents__wide}>
                        {/* 처방 테이블 영역 */}
                        <div className={styles.form_table_container}>
                           <table className={styles.rx_table}>
                              <thead>
                                    <tr>
                                          <th>약 이름</th>
                                          <th>복용 방법</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                                    <tr>
                                          <td>카페실텐플러스</td>
                                          <td>하루 1번</td>
                                    </tr>
                              </tbody>
                           </table>
                        </div>
                     </li>
                     <li className={boardlog.boardlog__title}>
                        기타 내용
                     </li>
                     <li className={boardlog.boardlog__contents}>
                        <p>내용 입니다. 내용 입니다. 내용 입니다.</p>
                     </li>
                  </ul>
               </div>
            </div>

            <div className={board.board_container}>
               <div className={board.detail_button_box}>
                     <button className={board.cancle} onClick={BasicBoardCordsListBtn}>목록</button>  

                     <span>
                     <button className={board.detail_write} onClick={BasicBoardCordsUpdateBtn}>수정</button>   
                     <button className={board.detail_delete}>삭제</button>     
                     </span>
               </div>
               </div>
         </div>
         </>
   );
}

export default MyBasicBoardRecordsDetail;