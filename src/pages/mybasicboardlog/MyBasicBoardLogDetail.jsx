
import commons from '../../styles/common.module.css';
import board from '../../styles/boardcommon.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import boardlog from '../../styles/mypage/mybasicboardlogcommon.module.css';
import styles from '../../styles/mypage/mybasicboardlogdetaile.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function MyBasicBoardLogDetail(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const BasicBoardLogListBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardlog'; // 클릭 시에만 이동
   };

   const BasicBoardLogUpdateBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardlogupdate'; // 클릭 시에만 이동
   };

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />

         <div className={boardlog.boardlog__container}>
            <ul>
               <li className={boardlog.boardlog__title}>
                  복용일자
               </li>
               <li className={boardlog.boardlog__contents}>
                  <em>2004-12-16</em>
               </li>
               <li className={boardlog.boardlog__title}>
                  <p>복용 내용</p>
               </li>
               <li className={boardlog.boardlog__contents}>
                  <div className={styles.table}>
                     <table className={styles.status__table}>
                        <thead>
                           <tr>
                              <th>약 이름</th>
                              <th>복용 방법</th>
                              <th>사용 목적</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>안녕하세요 감사해요 잘 있어요 다시 만나요</td>
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
               <li className={boardlog.boardlog__title}>
                  사진 추가
               </li>
               <li className={boardlog.boardlog__contents}>
                  
               <div className={styles.detaile__img__box2}>
                  <div className={styles.detaile__img__item}>
                     <img src="/images/main_slide_1.jpg" alt="사진"
                        className={styles.detail__img}
                     />
                  </div>
                  <div className={styles.detaile__img__item}>
                     <img src="/images/main_slide_1.jpg" alt="사진"
                        className={styles.detail__img}
                     />
                  </div>
                  <div className={styles.detaile__img__item}>
                     <img src="/images/main_slide_1.jpg" alt="사진"
                        className={styles.detail__img}
                     />
                  </div>
                  <div className={styles.detaile__img__item}>
                     <img src="/images/main_slide_1.jpg" alt="사진"
                        className={styles.detail__img}
                     />
                  </div>
                  <div className={styles.detaile__img__item}>
                     <img src="/images/main_slide_1.jpg" alt="사진"
                        className={styles.detail__img}
                     />
                  </div>
               </div>
               </li>
            </ul>
         </div>

         <div className={board.board_container}>
            <div className={board.detail_button_box}>
               <button className={board.cancle} onClick={BasicBoardLogListBtn}>목록</button>  

               <span>
                  <button className={board.detail_write} onClick={BasicBoardLogUpdateBtn}>수정</button>   
                  <button className={board.detail_delete}>삭제</button>     
               </span>
            </div>
         </div>
         
      </>
   );
}

export default MyBasicBoardLogDetail;