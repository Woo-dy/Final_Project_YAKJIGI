import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub101/sub101.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub101(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>

            <p className={styles.sub101__ccontent}>의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.ㅍ의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.</p>

         </div>


         <div className={styles.sub101__container2}>
            <ul>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">역사관련 연도</p>
                        <p className={styles.sub101__content} data-aos="fade-up">의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.</p>
                  </div>
               </li>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">역사관련 연도</p>
                        <p className={styles.sub101__content} data-aos="fade-up">의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.</p>
                  </div>
               </li>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">역사관련 연도</p>
                        <p className={styles.sub101__content} data-aos="fade-up">의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.</p>
                  </div>
               </li>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">역사관련 연도</p>
                        <p className={styles.sub101__content} data-aos="fade-up">의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.</p>
                  </div>
               </li>
            </ul>
         </div>
      </>
   );
}

export default Sub101;