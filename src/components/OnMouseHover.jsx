import React, { useState } from 'react';

function OnMouseHover(props) {
      const [isHovering, setIsHovering] = useState(false);
      if(isHovering === true){
         console.log('isHovering : true')
      }else{
         console.log('isHovering : false')
      }
      return (
         <div className='image_section' onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
               <div className={isHovering ? 'onHovered':'outHovered'}>
                  <img className='image_icon' src='./images/sub104/pds.jpg' alt="사진이 없당께요." />
               </div>
         </div>
      );
}

export default OnMouseHover;