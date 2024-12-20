import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/notice/noticelist.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';


function NoticeList(props) {
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

         <div className={styles.noticelist__content_container}>
            <div className={styles.noticelist__content_main}>
               <div>
                  <table className={styles.noticelist__table}>
                     <thead>
                        <tr className={`${styles.noticelist__tr} ${styles.noticelist__gong}`}>
                           <td className={styles.noticelist__cell1}><p>공지</p></td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내</p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}>
                              <p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 </p>
                           </td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                        <tr className={styles.noticelist__tr}>
                           <td className={styles.noticelist__cell1}>10</td>
                           <td className={styles.noticelist__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                           <td className={styles.noticelist__cell3}>2024.00.00</td>
                        </tr>
                     </tbody>
                  </table>
                  
                  <button>
                     <Link to="/noticewrite">글쓰기</Link>
                  </button>

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
               </div>
            </div>
         </div>
      </>
   );
}

export default NoticeList;