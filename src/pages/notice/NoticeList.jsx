import React from 'react';

import commons from '../../styles/common.module.css';

function NoticeList(props) {
   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>공지사항</h2>
            <p className={commons.sub_title}>도심 공원에서 만나는  자연과 지속가능성</p>
         </div>
      </>
   );
}

export default NoticeList;