import React from 'react';

import commons from '../../styles/common.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

function NoticeList(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>
         <div>
            <button>
               <Link to="/noticewrite">글쓰기</Link>
            </button>
         </div>
      </>
   );
}

export default NoticeList;