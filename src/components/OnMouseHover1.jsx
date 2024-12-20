import React, { useState } from 'react';
import styles from '../styles/sub104/sub104.module.css';

function OnMouseHover1(props) {
   const [isHovering, setIsHovering] = useState(false);
   if(isHovering === true){
      return (
         <div className={styles.img_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <img className={styles.image_icon} src='./images/main_slide_1.jpg' alt="이미지가 없습니다." />
            <p data-aos="fade-up" style={{fontSize:"30px", fontWeight:"600"}}>신약</p>
            <p data-aos="fade-up" style={{fontSize:"30px", fontWeight:"600"}}>새로운 화합물을 기반으로 만들어진 의약품</p>
         </div>
      );
   }else{
      return (
         <div className={styles.image_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <img className={styles.image_icon} src='./images/main_slide_3.jpg' alt="이미지가 없습니다." />
            <p data-aos="fade-up" style={{fontSize:"30px", fontWeight:"600"}}>신약</p>
         </div>
      );
   }
}

export default OnMouseHover1;