import { useState } from 'react';

import styles from '../../styles/sub105/sub105.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import commons from '../../styles/common.module.css';


function Sub105(props) {
   const [activeCategory, setActiveCategory] = useState(null);
   const [apiData, setApiData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const { mainTitle, subTitle } = useDocumentTitle();


   const fetchData = (category) => {
   setActiveCategory(category);
   setIsLoading(true); 

   let apiUrl = '';
   switch (category) {
         /* 링크들 */
      case '법률':
         apiUrl = 'http://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML';
         break;
      case '대통령령':
         apiUrl = 'http://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=HTML';
         break;
      case '총리령':
         apiUrl = 'http://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML';
         break;
      case '고시':
         apiUrl = 'http://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=자동차관리법';
         break;
      default:
         return;
   }

   // API 호출
   fetch(apiUrl)
      .then((response) => response.text()) // XML 데이터를 텍스트로 받음
      .then((data) => {
         setApiData(data); // XML 데이터 설정
         setIsLoading(false); // 데이터 로딩 끝
      })
      .catch((error) => {
         console.error('Error fetching data:', error);
         setIsLoading(false); // 로딩 상태 종료
      });
   };

   const parseXmlToHtml = (xmlString) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
      const htmlString = new XMLSerializer().serializeToString(xmlDoc);
      return htmlString;
   };
   
   

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         <div className={styles.sub105__medlawcontainer}>
            <div className={styles.sub105__medlawcategories}>
               {['법률', '대통령령', '총리령', '고시'].map((category) => (
               <button
                  key={category}
                  className={`${styles.sub105__medlawcategorybtn} ${activeCategory === category ? styles.active : ''}`}
                  onClick={() => fetchData(category)}
               >
                  {category}
               </button>
               ))}
            </div>

            {isLoading && <p>데이터를 불러오는 중...</p>}

            <div className={styles.sub105__medlawapicontent}>
               {apiData ? (
               <div
                  dangerouslySetInnerHTML={{ __html: parseXmlToHtml(apiData) }}
               />
               ) : (
               <p>카테고리를 선택하십시오.</p>
               )}
            </div>
         </div>
      </>
   );
}

export default Sub105;