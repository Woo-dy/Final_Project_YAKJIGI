import React, { useEffect, useState } from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub103/sub103.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub103(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const [imageSrc, setImageSrc] = useState("");

   useEffect(() => {
      const updateImage = () => {
         if (window.innerWidth < 768) {
            // 모바일
            setImageSrc("/images/sub103/sub1_3_mb.png");
         } else {
            // PC
            setImageSrc("/images/sub103/sub1_3_pc.png");
         }
      };

      // 초기 이미지 설정
      updateImage();

      // 윈도우 크기 변경 시 이미지 업데이트
      window.addEventListener("resize", updateImage);
      return () => window.removeEventListener("resize", updateImage);
   }, []);


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
            <div className={styles.sub103__images__content}>
               <img src={imageSrc} alt="main_slide_1" />
            </div>
         </div>

      </>
   );
}

export default Sub103;