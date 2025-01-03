import React, { useState } from 'react';
import styles from '../styles/sub104/sub104.module.css';

function OnMouseHover2(props) {
   const [isHovering, setIsHovering] = useState(false);
   if(isHovering === true){
      return (
         <div className={styles.img_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <div className={styles.image_section_contents}>
               {/* <img className={styles.image_icon} src='/images/main_slide_2.jpg' alt="이미지가 없습니다." /> */}

               <div className={styles.image_icon}>
                  <span class="material-symbols-outlined">medication</span>
               </div>
               <p className={styles.image_section_title}>제네릭</p>
               <p className={styles.image_section_subtitle}>신약의 특허가 만료된 후에 개발되는 의약품</p>
            </div>
         </div>
      );
   }else{
      return (
         <div className={styles.image_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <div className={styles.image_section_contents}>
               {/* <img className={styles.image_icon} src='/images/main_slide_1.jpg' alt="이미지가 없습니다." /> */}

               <div className={styles.image_icon}>
                  <span class="material-symbols-outlined">medication</span>
               </div>

               <p className={styles.image_section_title}>제네릭</p>
            </div>
         </div>
      );
   }
}

export default OnMouseHover2;