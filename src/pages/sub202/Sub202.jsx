import React, { useCallback, useState } from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub202/sub202.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub202(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   // 버튼의 상태들을 저장하는 배열
   const [buttonstates, setbuttonstates] = useState(Array(5).fill(false));
   // 버튼 클릭하면 그 버튼의 값 변경
   const buttonclick = useCallback((index, event) =>{
      event.preventDefault();
      setbuttonstates(prev =>{
         const newstates = [...prev];
         newstates[index] = !newstates[index];
         return newstates;
      });
   });

   const buttonment = [
      "첫번째 버튼 멘트","두번째 버튼 멘트","세번째 버튼 멘트","네번째 버튼 멘트","다섯번째 버튼 멘트"
   ];
   const resultlist = [
      { name: "의약품 1", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
      { name: "의약품 2", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
      { name: "의약품 3", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
      { name: "의약품 4", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
      { name: "의약품 5", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다.부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다.부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
      { name: "의약품 6", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
      { name: "의약품 7", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." }   
   ];

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         
         
         {/* 검색바 */}
         <ul className={commons.common_search_container}>
            <li>
               <p>건강 조건으로 검색하기</p>
               <div className={styles.search_check}>
                  {buttonstates.map((k, index)=>(
                     <button key={index} className={`${styles.search_box} ${buttonstates[index] ? styles.box_true : styles.box_false}`} onClick={(event)=>buttonclick(index, event)} >
                           {buttonment[index]} 
                     </button>
                     
                  ))}
               </div>
               
               <p>검색어 검색</p>
            
               <div className={commons.common_search_div}>
                  <form name="" action="/">
                     <input type="text" name="" id="" placeholder='상세주소로 검색하기' />
                     <button className="material-icons">search</button>
                  </form>
               </div>
            </li>
         </ul>
         
         <div className={styles.sub202__result}>
            <div className={styles.medi_result01}>
               <div className={styles.h3tag}>검색결과</div>
               <hr className={styles.hrtag}/>

               <div className={commons.table_guide}>
                  <div className={commons.guide}>
                     좌우로 드래그 해주세요.
                  </div>
               </div>

               <div className={styles.medi_table}>
                  <table>
                     <thead>
                           <tr>
                              <th className={styles.tablecell}>약품명</th>
                              <th className={styles.tablecell}>부작용</th>
                           </tr>
                     </thead>
                     <tbody>
                           {resultlist.map((k, index)=>(
                              <tr key={index}>
                                 <td className={styles.tablecell}>{k.name}</td>
                                 <td className={styles.tablecell}>{k.value}</td>
                              </tr>
                           ))}
                     </tbody>
                  </table>
               </div>
            </div>
            <div className={styles.API_section}>    
                  {/* API 들어갈 영역 */} 
                  <p> API가 들어갈 영역입니다.</p>
            </div>
         </div>
         
      </>
   );
}

export default Sub202;