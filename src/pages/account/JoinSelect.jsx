import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/account/joinselect.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function JoinSelect(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const expertId = 'expert'; // 전문가 ID
   const generalId = 'general'; // 일반 회원 ID

   const JoinExpertBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = `/joinexpert?id=${expertId}`; // 클릭 시에만 이동
   };

   const JoinGeneralBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = `/joingeneral?id=${generalId}`; // 클릭 시에만 이동
   };


   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>
         
         <div>
            <ul className={styles.joinselect__container}>
               <li onClick={JoinGeneralBtn}>
                  <span className="material-symbols-outlined">person</span>
                  <p>일반 회원가입</p>
               </li>
               <li onClick={JoinExpertBtn}>
                  <span className="material-symbols-outlined">local_hospital</span>
                  <p>전문가 회원가입</p>
               </li>
            </ul>
         </div>
      </>
   );
}

export default JoinSelect;