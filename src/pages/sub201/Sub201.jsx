import React, { useEffect, useState } from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub201/sub201.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';



// 한글 초성 추출 함수
const getChosung = (text) => {
   const chosungList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
   let chosung = '';

   for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) - 0xac00;
      if (charCode >= 0 && charCode <= 11171) {
         chosung += chosungList[Math.floor(charCode / 588)];
      }
   }

   return chosung;
};


function Sub201(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const [searchText, setSearchText] = useState("");
   const [selectedLetter, setSelectedLetter] = useState("ㄱ");

   // 더미 데이터 ~ 추후 API로 대체 (ㅈ 버튼 작동 확인 완료)
   // 반응형을 위해 12개 출력
   const results = Array(12).fill({
      name: "제품명 (제조사/성분명)",
      dosage: "20mg / 40mg / 60mg / 120mg",
      image: "/images/sub201/201_1.jpg",
   });

   // 결과의 총개수 ~ 추후 count로 대체
   const totalResults = 236;

   const handleSearchChange = (e) => {
      setSearchText(e.target.value);
   };

   const handleLetterClick = (letter) => {
      setSelectedLetter(letter);
   };

   // 초성 검색 기능
   const filteredResults = results.filter((result) => {
      const chosung = getChosung(result.name);        // 제품명에서 초성을 추출
      return chosung.startsWith(selectedLetter);      // 선택된 초성과 일치하는 항목만 필터링
   });

   // Material Icon : 아이콘 통일 설정
   useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(link);

      // Cleanup: 링크 태그를 제거하여 메모리 누수 방지
      return () => {
         document.head.removeChild(link);
      };
   }, []);


   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 검색바 */}
         <ul className={commons.common_search_container}>
            <li>
               <p>약품명 검색</p>
            
               <div className={commons.common_search_div}>
                  <form name="sub201__form" action="/">
                     <input 
                        type="text"
                        name="searchText"
                        id="searchText"
                        placeholder="약품명으로 검색하기"
                        value={searchText}
                        onChange={handleSearchChange} 
                     />
                     <button className="material-icons">search</button>
                  </form>
               </div>

               <p>초성 검색</p>
               <div className={styles.search_check}>
                  <div className={styles.search_letter_filter}>
                     <ul>
                     {["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"].map(
                        (letter) => (
                           <li>
                              <button
                                    key={letter}
                                    className={selectedLetter === letter ? styles.active : ""}
                                    onClick={() => handleLetterClick(letter)}
                              >
                                    {letter}
                              </button>
                           </li>
                        )
                     )}
                     </ul>
                  </div>
               </div>
            </li>
         </ul>

         <section className={styles.result_section}>
            <p className={styles.result_text}>총 <span>{totalResults}</span>개의 결과가 있습니다.</p>
            <div className={styles.results_grid}>
               {filteredResults.map((result, index) => (
                     <div key={index} className={styles.result_item}>
                        <img src={result.image} alt={result.name} />
                        <p className={styles.sub201__product__name}>{result.name}</p>
                        <p className={styles.sub201__volume}>{result.dosage}</p>
                     </div>
               ))}
            </div>

            
            {/* paging 영역 start */}
            <div>
               <ul className={commons.paging_num_ul}>
                  <li className="material-icons prev">keyboard_double_arrow_left</li>
                  <li className="material-icons prev">chevron_left</li>
                  <li className={commons.active}>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li className="material-icons next">chevron_right</li>
                  <li className="material-icons next">keyboard_double_arrow_right</li>
               </ul>
            </div>
            {/* paging 영역 end */}
         </section>
      </>
   );
}

export default Sub201;