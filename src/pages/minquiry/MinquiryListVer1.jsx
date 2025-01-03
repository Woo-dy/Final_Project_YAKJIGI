import React, { useState } from 'react';

import commons from '../../styles/common.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function MinquiryListVer1(props) {
   const [fileName, setFileName] = useState('');
   const { mainTitle, subTitle } = useDocumentTitle();

   const handleFileChange = (event) => {
      const file = event.target.files[0]; // 선택된 파일

      if (file) {
         setFileName(file.name); // 파일 이름을 상태에 저장
      }
   };

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         <div>
            <ul className={commons.input__container}>
               <li>
                  <ul className={commons.input__list__container}>
                     <li>
                        input text <span>*</span>
                     </li>
                     <li>
                        <input type="text" name="title" placeholder='내용입니다.' className={commons.board__input__text} />
                     </li>
                  </ul>
               </li>
               
               <li>
                  <ul className={commons.input__list__container}>
                     <li>
                        input search <span>*</span>
                     </li>
                     <li>
                        <input type="text" name="title" placeholder='내용입니다.' className={commons.board__input__text} />
                        <button className={commons.btn__search}>검색</button>
                     </li>
                  </ul>
               </li>

               
               
               <li>
                  <ul className={commons.input__list__container}>
                     <li>
                        input search <span>*</span>
                     </li>
                     <li>
                        <div className={commons.filebox}>
                              <input
                                 className={commons.uploadName}
                                 value={fileName}
                                 placeholder="파일찾기를 클릭해서 첨부파일을 등록해주세요."
                                 readOnly
                              />
                              <label htmlFor="file">파일찾기</label>
                              <input
                                 type="file"
                                 id="file"
                                 name="file_name"
                                 onChange={handleFileChange} // 파일 변경 시 핸들러 호출
                              />
                        </div>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>

         <div className={commons.btn__center__container}>
            <ul>
               <li>
                  <button className={commons.bth_regist}>수정</button>
                  <button className={commons.bth_cancle}>취소</button>
               </li>
            </ul>
         </div>

         <div className={commons.btn__side__container}>
            <ul>
               <li>
                  <button className={commons.bth_list}>목록</button>
               </li>
               <li>
                  <button className={commons.bth_regist}>수정</button>
                  <button className={commons.bth_cancle}>취소</button>
               </li>
            </ul>
         </div>
      </>
   );
}

export default MinquiryListVer1;