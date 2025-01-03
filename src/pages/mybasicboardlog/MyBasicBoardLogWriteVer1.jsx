import commons from '../../styles/common.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import boardlog from '../../styles/mypage/mybasicboardlogcommon.module.css';
import styles from '../../styles/mypage/mybasicboardlogupdate.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicBoardLogWriteVer1(props) {
   const { mainTitle, subTitle } = useDocumentTitle();
   const [startDate, setStartDate] = useState(null);
   const [fileName, setFileName] = useState('');
   const [searchModalOpen, setSearchModalOpen] = useState(false);
   const modalBackground = useRef(null);


   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         setFileName(file.name);
      }
   };

   const BasicBoardLogListBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardlog'; // 클릭 시에만 이동
   };


   return (
      <>
         <div>
            {/* 검색 모달 */}
            {searchModalOpen && (
               <div
                  className={`${boardlog.write__modalContainer} ${searchModalOpen ? 'show' : ''}`}
                  ref={modalBackground}
                  onClick={(e) => {
                     if (e.target === modalBackground.current) {
                           setSearchModalOpen(false);
                     }
                  }}
               >
                  <div className={boardlog.write__modalContent__box}>
                     <ul className={boardlog.write__modal__search}>
                        <li>
                           약품명으로 검색하기
                        </li>
                        <li>
                           <button
                           className="material-icons"
                           onClick={() => setSearchModalOpen(false)}
                           >
                           close
                           </button>
                        </li>
                     </ul>
                     <ul className={boardlog.write__search}>
                        <li>
                           <input
                              type="text"
                              placeholder="약품명(품목명)을 입력하세요."
                           />
                           
                           <button className={boardlog.write__search__modalbtn}>
                              검색
                           </button>
                        </li>
                     </ul>
                     <div className={boardlog.write__table}>
                        <table>
                           <thead>
                              <tr>
                                    <th>
                                       <input type="text" />
                                    </th>
                                    <th>No</th>
                                    <th>약품명 (품목명)</th>
                                    <th>업체명</th>
                                    <th>제품일련번호</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                              <tr>
                                 <td>번호</td>
                                 <td>리피논정80밀리그램(아토르바스타틴칼슘삼수화물)</td>
                                 <td>주식회사제뉴원사이언스</td>
                                 <td>200810125</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                  </div>
               </div>
            )}
         </div>

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
                  <div className={boardlog.boardlog__date__calendar}>
                     <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="YYYY-MM-DD"
                        onChangeRaw={(e) => e.preventDefault()}
                        className={boardlog.boardlog__date__calendar__input}
                     />
                     <span className="material-icons">calendar_month</span>
                  </div>
               </li>
               <li className={boardlog.boardlog__title}>
                  <p>약 이름</p>
               </li>
               <li className={boardlog.boardlog__contents}>
                  <div className={boardlog.write__search__container}>
                     <input
                           type="text"
                           placeholder="검색하기를 클릭하세요"
                           readOnly
                        />
                     <div>
                        <button
                           className={boardlog.write__search__btn}
                           onClick={(e) => {
                              e.preventDefault();  // 폼 제출을 방지
                              setSearchModalOpen(true); // 검색 모달 열기
                           }}
                        >
                           검색
                        </button>
                     </div>
                  </div>
                  <div className={styles.table}>
                     <table className={styles.status__table}>
                        <thead>
                           <tr>
                              <th>약 이름</th>
                              <th>복용 방법</th>
                              <th>사용 목적</th>
                              <th>삭제</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                           <tr>
                              <td>카르베딜롤정제</td>
                              <td>하루 1알</td>
                              <td>당뇨</td>
                              <td>
                                 <button>
                                    <span class="material-symbols-outlined">remove</span>
                                 </button> 
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </li>
               <li className={boardlog.boardlog__title}>
                  복용 방법
               </li>
               <li className={boardlog.boardlog__contents}>
                  <input type="text" placeholder="하루 1알" />
               </li>
               <li className={boardlog.boardlog__title}>
                  사용 목적
               </li>
               <li className={boardlog.boardlog__contents}>
                  <input type="text" placeholder="당뇨" />
               </li>
               <li className={boardlog.boardlog__title}>
                  기타 내용
               </li>
               <li className={boardlog.boardlog__contents}>
                  에디터 추후 추가
               </li>
               <li className={boardlog.boardlog__title}>
                  사진 추가
               </li>
               <li className={boardlog.boardlog__contents}>
                  <div className={commons.filebox}>
                        <input
                           className={commons.uploadName}
                           value={fileName}
                           placeholder="파일찾기를 클릭해서 첨부파일을 등록해주세요."
                           readOnly
                        />
                        <label htmlFor="file">파일찾기</label>
                        <input
                           type="file"
                           id="file"
                           name="file_name"
                           onChange={handleFileChange} // 파일 변경 시 핸들러 호출
                        />
                  </div>
               </li>
            </ul>
         </div>

         <div className={boardlog.write_button_box}>                
               <div>
                  <button className={boardlog.board_write}>완료</button>    
                  <button className={boardlog.board_cancle} onClick={BasicBoardLogListBtn}>목록</button>    
               </div>
         </div>
      </>
   );
}

export default MyBasicBoardLogWriteVer1;