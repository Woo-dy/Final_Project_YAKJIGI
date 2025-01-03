import React, { useState } from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/faq/faq.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function FaqList(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const faqData = [
   {
      question: "도심 공원의 이용시간은  어떻게 되나요?",
      answer: "일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다. 일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다."
   },
   {
      question: "공원 부대시설의 불편사항은 어디에 신고하나요?",
      answer: "일반 도심공원은 24시간 개방"
   },
   {
      question: "가로수길의 위생관련 신고는 어디에 하나요?",
      answer: "일반 도심공원은 24시간 개방"
   },
   {
      question: "도심 공원의 이용시간은  어떻게 되나요?",
      answer: "일반 도심공원은 24시간 개방"
   },
   {
      question: "가로수길에서 발견된 보행 불편물은 개인이 처리해도 되나요?",
      answer: "일반 도심공원은 24시간 개방"
   },
   {
      question: "보호수 신청은 어떻게 하나요?",
      answer: "일반 도심공원은 24시간 개방"
   },
   ];

   const [activeIndex, setActiveIndex] = useState(0);

   const toggleAnswer = (index) => {
   if (activeIndex === index) {
      setActiveIndex(null);
   } else {
      setActiveIndex(index);
   }
   };

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>
         
         <div className={commons.common__boradsearch__container}>   
            <ul className={commons.common__boradsearch__ul}>
               <li>총 <span>16</span>건</li>
               <li>
                  <form action="">
                     <div className={commons.common__searchbar__box}>
                        <input type="text" className={commons.common__search__input} placeholder="검색어를 입력해주세요" />
                        <span className="material-icons">search</span>
                     </div>
                  </form>
               </li>
            </ul>
         </div> 

         <div className={styles.faq__container}>
            <div className={styles.faq__list}>
               {faqData.map((item, index) => (
               <div key={index} className={styles.faq__item}>
                  <div
                     className={`${styles.faq__question} ${index === 0 ? styles.firstQuestion : ''}`}
                     onClick={() => toggleAnswer(index)}
                  >
                     {item.question}
                     <span className={`material-icons ${activeIndex === index ? styles.rotate : ''}`}>
                     {activeIndex === index ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                     </span>
                  </div>

                  {activeIndex === index && (
                     <div className={`${styles.faq__answer} ${styles.active}`}>
                     {item.answer}
                     </div>
                  )}
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
         </div>
      </>
   );
}

export default FaqList;