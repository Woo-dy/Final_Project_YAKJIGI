import commons from '../../styles/common.module.css';
import styles from '../../styles/minquiry/minquiry.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function MinquiryList(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         
         <div className={commons.common__boradsearch__container}>   
            <ul className={commons.common__boradsearch__ul}>
               <li>총 <span>16</span>건</li>
               <li>
                  <form action="">
                     <div className={commons.common__searchbar__box}>
                        <input type="text" className={commons.common__search__input} placeholder="검색어를 입력해주세요" />
                        <span className="material-icons">search</span>
                     </div>
                  </form>
               </li>
            </ul>
         </div> 

         <div className={styles.table_container}>
            <ul className={styles.contents_box}>
               <li className={styles.textcenter}>
                     <div className={styles.table}>
                        <table className={styles.inquiry_table}>
                           <thead>
                                 <tr>
                                    <th>No</th>
                                    <th>제목</th>
                                    <th>처리상태</th>
                                    <th>등록일</th>
                                 </tr>
                           </thead>
                           <tbody>
                                 <tr>
                                    <td>10</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_waiting}>
                                             답변대기
                                       </div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr>
                                 <tr>
                                    <td>9</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_waiting}>
                                             답변대기
                                       </div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>8</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_waiting}>
                                             답변대기
                                       </div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>7</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_waiting}>
                                             답변대기
                                       </div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>6</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_waiting}>
                                             답변대기
                                       </div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>5</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_completed}>답변완료</div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>4</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_completed}>답변완료</div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>3</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_completed}>답변완료</div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>2</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_completed}>답변완료</div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr><tr>
                                    <td>1</td>
                                    <td><p>제목입니다</p></td>
                                    <td>
                                       <div className={styles.status_completed}>답변완료</div>
                                    </td>
                                    <td>2024.00.00</td>
                                 </tr>
                           </tbody>
                        </table>
                     </div>

                     {/* paging 영역 start */}
                     <div>
                        <ul className={commons.paging_num_ul}>
                           <li className="material-icons prev">keyboard_double_arrow_left</li>
                           <li className="material-icons prev">chevron_left</li>
                           <li className={commons.active}>1</li>
                           <li>2</li>
                           <li>3</li>
                           <li>4</li>
                           <li>5</li>
                           <li className="material-icons next">chevron_right</li>
                           <li className="material-icons next">keyboard_double_arrow_right</li>
                        </ul>
                     </div>
                     {/* paging 영역 end */}
               </li>
            </ul>
         </div>
      </>
   );
}

export default MinquiryList;