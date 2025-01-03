import React from 'react';
import boardlog from '../styles/mypage/mybasicboardlogcommon.module.css';
import styles from '../styles/mypage/mybasicboardlogupdate.module.css';

function BoardRecordsSearchModal({ isOpen, onClose }) {
   if (!isOpen) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

   return (
      <div
         className={`${boardlog.write__modalContainer} ${isOpen ? 'show' : ''}`}
         onClick={onClose}
      >
         <div className={boardlog.write__modalContent__box} onClick={(e) => e.stopPropagation()}>
            <ul className={boardlog.write__modal__search}>
                  <li>약품명으로 검색하기</li>
                  <li>
                     <button
                        className="material-icons"
                        onClick={onClose}
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
            
            <ul className={boardlog.write__search2}>
               <li>
                     <span className={boardlog.write__search__modalbtn2}>
                        복용 방법 <span className={boardlog.star}>*</span>
                     </span>
                     <input
                        type="text"
                        name="dosageMethod"
                        placeholder="복용 방법"
                     />
               </li>
            </ul>                     
            {/* <ul className={boardlog.write__search2}>
               <li>
                     <span className={boardlog.write__search__modalbtn2}>
                        사용 목적 <span className={boardlog.star}>*</span>
                     </span>
                     <input
                        type="text"
                        name="usagePurpose"
                        placeholder="사용 목적"
                        value={inputValues.usagePurpose}
                        onChange={handleInputChange}
                     />
               </li>
            </ul> */}

            <div className={styles.table}>
               <table className={styles.status__table}>
                  <thead>
                     <tr>                                 
                        <th>
                           {/* 전체선택 */}
                           <input type="checkbox" />
                        </th>
                        <th>No</th>
                        <th>약품명 (품목명)</th>
                        <th>업체명</th>
                        <th>제품일련번호</th>
                     </tr>
                  </thead>
                  <tbody>
                     <div className={boardlog.status__table__rowhover}>
                        <tr>
                           <td rowSpan={2}>
                              {/* 낱개선택 */}
                              <input type="checkbox" />
                           </td>
                           <td>No</td>
                           <td>약품명 (품목명)</td>
                           <td>업체명</td>
                           <td>제품일련번호</td>
                        </tr>
                        <tr>
                           <td>No</td>
                           <td>약품명 (품목명)</td>
                           <td>업체명</td>
                           <td>제품일련번호</td>
                        </tr>
                     </div>
                  </tbody>
               </table>
            </div>                     
            <button className={boardlog.confirmbtn}>확인</button>
         </div>
      </div>
   );
}

export default BoardRecordsSearchModal;