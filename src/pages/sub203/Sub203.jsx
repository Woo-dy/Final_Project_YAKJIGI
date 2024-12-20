import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub203/sub203.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub203(props) {
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
               <p>검색어 검색</p>
                  
               <div className={commons.common_search_div}>
                  <form name="" action="/">
                     <input type="text" name="" id="" placeholder='검색어로 검색하기' />
                     <button className="material-icons">search</button>
                  </form>
               </div>
            </li>
         </ul>

         <div className={styles.content_container}>
            <div className={styles.medi_result01}>
               <div className={styles.titlecount}>
                  <div className={styles.h3tag}>검색결과</div>
               </div>

               <div>
                  <ul className={styles.medi_infos}>
                     <li className={styles.medi_image_contents}>
                        <img className={styles.image_medi} src='./images/main_slide_1.jpg' alt="이미지가 없습니다." />
                     </li>
                     <li>
                        <p className={styles.medi_title}>약품이름어쩌고정</p>
                        <ul className={styles.medi_contents}>
                           <li className={styles.medi_info}>약품 정보1</li>
                           <li className={styles.medi_detail}>약품 정보 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 입니다.</li>

                           <li className={styles.medi_info}>약품 정보2</li>
                           <li className={styles.medi_detail}>약품 정보 입니다.</li>
                           
                           <li className={styles.medi_info}>약품 정보3</li>
                           <li className={styles.medi_detail}>약품 정보 입니다.</li>

                           <li className={styles.medi_info}>약품 정보4</li>
                           <li className={styles.medi_detail}>약품 정보 입니다.</li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
            <hr className={styles.hrddd}/>
            <div className={styles.medi_result01}>
               <div className={styles.titlecount}>
                  <div className={styles.h3tag}>범용금기 리스트</div>
                  <div className={styles.countnum}>총 6건</div>{/*  */}
               </div>

               <div className={styles.medi_list}>
                  
                  {/* <table className={styles.medi_table}>
                        <tbody>
                              
                  
                     */}
                  <table className={styles.medi_table}>
                        <tbody>
                           <tr>
                              <td><span className={styles.table_span}>약품명입니다.</span></td>
                              <td><span>약품명입니다.</span></td>
                              <td><span>약품명입니다.</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                           </tr>
                           <tr>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                           </tr>
                           <tr>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                           </tr>
                           <tr>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                           </tr>
                           <tr>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                           </tr>
                           <tr>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                              <td><span>약품명</span></td>
                           </tr>
                           
                        </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div className={styles.API_section}> 
               {/* API 들어갈 영역 */}
               <p> API가 들어갈 영역입니다.</p>
         </div>
      </>
   );
}

export default Sub203;