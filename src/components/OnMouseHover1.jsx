import React, { useState } from 'react';
import styles from '../styles/sub104/sub104.module.css';

function OnMouseHover1(props) {
   const [isHovering, setIsHovering] = useState(false);
   if(isHovering === true){
      return (
         <div className={styles.img_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <div className={styles.image_section_contents}>
               {/* <img className={styles.image_icon} src='/images/mobile_menu_bg.jpg' alt="이미지가 없습니다." /> */}

               <div className={styles.image_icon}>
                  <span class="material-symbols-outlined">pill</span>
               </div>
               <p className={styles.image_section_title}>신약</p>
               <p className={styles.image_section_subtitle}>새로운 화합물을 기반으로 만들어진 의약품</p>
            </div>
         </div>
      );
   }else{
      return (
         <div className={styles.image_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <div className={styles.image_section_contents}>
               {/* <img className={styles.image_icon} src='/images/mobile_menu_bg.jpg' alt="이미지가 없습니다." /> */}

               <div className={styles.image_icon}>
                  <span class="material-symbols-outlined">pill</span>
               </div>

               <p className={styles.image_section_title}>신약</p>
            </div>
         </div>
      );
   }
}

export default OnMouseHover1;