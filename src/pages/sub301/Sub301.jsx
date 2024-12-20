import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub301/sub301.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';


function Sub301(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>
         
         {/* 검색바 */}
         <ul className={commons.common_search_container}>
            <li>
               <p>초성 검색</p>
                  
               <div className={commons.common_search_div}>
                  <form name="" action="/">
                     <input type="text" name="" id="" placeholder='지역명을 입력하세요 (예시 : 동대문, 일산)' />
                     <button className="material-icons">search</button>
                  </form>
               </div>
            </li>
         </ul>
         <div className={styles.sub_container2}>
            <ul className={styles.contents_box}>
               <li className={styles.textcenter}>
                  {/* 검색바 */}
                  <div>
                     <ul className={styles.result_bar}>
                        <li>총 <span>236</span>개의 결과가 있습니다.</li>
                     </ul>
                  </div>

                  <div className={styles.table_guide}>
                     <div className={styles.guide}>
                        좌우로 드래그 해주세요.
                     </div>
                  </div>

                  <div className={styles.table}>
                     <table className={styles.status_table}>
                           <thead>
                           <tr>
                              <th>약국명</th>
                              <th>주소</th>
                              <th>연락처</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                              <td>1번약국</td>
                              <td>
                                 <p>서울특별시 서울 구로구 구로동로 132 (구로동) 1층 (1번약국)</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                              <tr>
                              <td>2번약국</td>
                              <td>
                                 <p>2번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>3번약국</td>
                              <td>
                                 <p>3번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>4번약국</td>
                              <td>
                                 <p>4번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>5번약국</td>
                              <td>
                                 <p>5번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>6번약국</td>
                              <td>
                                 <p>6번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>7번약국</td>
                              <td>
                                 <p>7번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>8번약국</td>
                              <td>
                                 <p>8번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>9번약국</td>
                              <td>
                                 <p>9번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
                           </tr>
                           <tr>
                              <td>10번약국</td>
                              <td>
                                 <p>10번약국 주소</p>
                              </td>
                              <td>02-851-1155</td>
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

export default Sub301;