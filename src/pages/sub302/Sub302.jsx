import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub302/sub302.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub302(props) {
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
                     <input type="text" name="" id="" placeholder='검색어를 입력해주세요.' />
                     <button className="material-icons">search</button>
                  </form>
               </div>
            </li>
         </ul>
         
         <div className={styles.content_container}>
            <div className={styles.list_section}> 
               {/* API 들어갈 영역 */}
               <p> API가 들어갈 영역입니다.</p>
            </div>
         </div>
      </>
   );
}

export default Sub302;