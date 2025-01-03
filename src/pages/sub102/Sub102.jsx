import React from 'react';

import commons from '../../styles/common.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from '../../styles/sub102/sub102.module.css';

function Sub102(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>

            <p className={styles.contents_description}>
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
               의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다. 의약품에 관한 텍스트 내용입니다.
            </p>

            
            <section className={styles.image_section}>
               <div className={styles.image_container}>
                  <img src="/images/sub102/102_1.jpg" alt="일반의약품_대표이미지" />
                  <div className={styles.overlay_title}>일반의약품</div>
                  <div className={styles.overlay_hover}>
                        일반의약품에 대한 설명입니다.일반의약품에 대한 설명입니다.일반의약품에 대한 설명입니다.
                        일반의약품에 대한 설명입니다.일반의약품에 대한 설명입니다.일반의약품에 대한 설명입니다.
                  </div>
               </div>
               <div className={styles.image_container}>
                  <img src="/images/sub102/102_2.jpg" alt="전문의약품_대표이미지" />
                  <div className={styles.overlay_title}>전문의약품</div>
                  <div className={styles.overlay_hover}>
                        전문의약품에 대한 설명입니다. 전문의약품에 대한 설명입니다. 전문의약품에 대한 설명입니다.
                        전문의약품에 대한 설명입니다. 전문의약품에 대한 설명입니다. 전문의약품에 대한 설명입니다.
                  </div>
               </div>
               <div className={styles.image_container}>
                  <img src="/images/sub102/102_3.jpg" alt="건강기능식품_대표이미지" />
                  <div className={styles.overlay_title}>건강기능식품</div>
                  <div className={styles.overlay_hover}>
                        건강기능식품에 대한 설명입니다. 건강기능식품에 대한 설명입니다. 건강기능식품에 대한 설명입니다.
                        건강기능식품에 대한 설명입니다. 건강기능식품에 대한 설명입니다. 건강기능식품에 대한 설명입니다.
                  </div>
               </div>
            </section>
         </div>

      </>
   );
}

export default Sub102;