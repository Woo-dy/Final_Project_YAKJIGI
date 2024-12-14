import React from 'react';

import commons from '../../styles/common.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub201(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>
      </>
   );
}

export default Sub201;