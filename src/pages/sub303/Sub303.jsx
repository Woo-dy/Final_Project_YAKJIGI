import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub303/sub303.module.css';

function Sub303(props) {
   return (
      <>
      <div className={commons.container__box__title}>
         <h2 className={commons.main_title}>폐의약품 수거함 찾기</h2>
         <p className={commons.sub_title}>원하는 지역에서의 녹지행사를 찾아보세요.</p>
      </div>
      <div className={styles.Sub302__content_container}>
         <div className={styles.Sub302__content_header}>
         </div>
         <div className={styles.Sub302__search_FieldContainer}>
            <div className={styles.Sub302__mainField}>
               <p>지역 선택</p>
               <div className={styles.Sub302__filterField}>
                     <div className={styles.Sub302__selects}>
                        <div className={commons.commons__custom__selects}>
                           <select name="" id="" className={commons.commons__select}>
                              <option>서울특별시</option>
                              <option>서울특별시</option>
                              <option>서울특별시</option>
                           </select>
                           <span className="material-icons">keyboard_arrow_down</span>
                        </div>
                     </div >
                     <div className={styles.Sub302__selects}>
                        <div className={commons.commons__custom__selects}>
                           <select name="" id="" className={commons.commons__select}>
                              <option>강남구</option>
                              <option>강남구</option>
                              <option>강남구</option>
                           </select>
                           <span className="material-icons">keyboard_arrow_down</span>
                        </div>
                     </div>
                     <div className={styles.Sub302__selects}>
                        <div className={commons.commons__custom__selects}>
                           <select name="" id="" className={commons.commons__select}>
                              <option>역삼동</option>
                              <option>역삼동</option>
                              <option>역삼동</option>
                           </select>
                           <span className="material-icons">keyboard_arrow_down</span>
                        </div>
                     </div>
               </div>
               <div className={styles.Sub302__searchbarField}>
                     <p>검색어 검색</p>
                     <div className={styles.Sub302__searchField}>
                        <div className={commons.common_search_div}>
                           <form name="" action="/">
                              <input type="text" name="" id="" placeholder="상세주소로 검색하기" />
                              <button className="material-icons">search</button>
                           </form>
                        </div>
                     </div>
               </div>
            </div>
         </div>
         <div className={styles.Sub302__resultField}>
            <p>"서울특별시 강북구 우이동’에서 ‘검색어’(으)로 검색한 결과는 총 <span>0</span>건 입니다."</p>
            <div className={styles.Sub302__map}></div>
         </div>
      </div>
      </>
   );
}

export default Sub303;