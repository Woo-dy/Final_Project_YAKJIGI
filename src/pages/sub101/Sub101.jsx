import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub101/sub101.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Sub101(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>

            <p className={styles.sub101__ccontent}>의약품은 인간의 질병을 예방하고 치료하며 건강을 증진하기 위해 사용하는 화학적, 생물학적 물질입니다. 우리 일상에서 없어서는 안 될 중요한 역할을 하며, 의료 기술의 발전과 함께 의약품의 중요성은 더욱 커지고 있습니다. 의약품은 크게 전문의약품과 일반의약품으로 구분되며, 전문의약품은 의사의 처방을 통해 사용할 수 있고 일반의약품은 약국에서 바로 구매할 수 있는 형태입니다. 또한, 현대에는 생물학적 제제, 유전자 치료제 등 첨단 바이오 기술을 활용한 의약품도 활발히 개발되고 있습니다. 이러한 의약품의 발전은 많은 사람의 생명을 구하며, 우리의 삶의 질을 높이는 데 기여하고 있습니다. 대한민국에서도 의약품과 관련된 다양한 제도와 법률이 제정되어 국민의 건강을 보호하고 있습니다. 의약품은 단순히 약으로서의 역할을 넘어, 국가의 공공보건과 경제에도 중요한 영향을 미치는 요소로 자리 잡고 있습니다. 이제는 단순한 질병 치료에서 나아가 예방의 중요성이 강조되며, 개인 맞춤형 의약품의 개발도 주목받고 있습니다. 이러한 변화는 인간의 삶의 질을 향상시키는 데 결정적인 기여를 하고 있습니다. 대한민국에서도 의약품과 관련된 중요한 연도들이 있으며, 이를 통해 의약품 제도와 산업이 어떻게 발전했는지 살펴볼 수 있습니다.</p>

         </div>


         <div className={styles.sub101__container2}>
            <ul>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">
                           <span>1953년</span>
                           약사법 제정
                        </p>
                        <p className={styles.sub101__content} data-aos="fade-up">약사법은 의약품의 제조, 유통, 판매에 대한 기준과 규정을 명확히 하여 의약품 안전성을 높이고 국민의 건강을 보호하기 위한 기틀을 마련하였습니다. 이 법은 현재까지도 개정과 보완을 통해 발전하고 있습니다.</p>
                  </div>
               </li>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">
                           <span>1963년</span>
                           식품의약품안전처 전신 설립
                        </p>
                        <p className={styles.sub101__content} data-aos="fade-up">의약품의 안전성과 효과를 검증하기 위해 "약정국"이 설립되었습니다. 이는 현재의 식품의약품안전처로 발전하여, 의약품뿐만 아니라 식품과 화장품의 안전 관리까지 맡고 있습니다. 당시의 약정국 설립은 의약품 관리의 현대적 체계를 도입한 중요한 계기가 되었습니다.</p>
                  </div>
               </li>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">
                           <span>1989년</span>
                           의약분업 시범 사업 시작
                        </p>
                        <p className={styles.sub101__content} data-aos="fade-up">의약분업은 의사와 약사의 역할을 분리하여 환자가 보다 안전하고 효과적으로 의약품을 사용할 수 있도록 하는 제도입니다. 1989년에 시범 사업으로 처음 도입되었으며, 이후 국민의 의료 서비스 질 향상에 크게 기여하였습니다.</p>
                  </div>
               </li>
               <li>
                  <div className={styles.sub101__text}>
                        <p className={styles.sub101__title} data-aos="fade-up">
                           <span>2000년</span>
                           의약분업 제도 전면 시행
                        </p>
                        <p className={styles.sub101__content} data-aos="fade-up">1989년의 시범 사업 이후, 2000년에는 의약분업 제도가 전국적으로 전면 시행되었습니다. 이를 통해 의사는 진단과 처방을, 약사는 조제를 담당하게 되었으며, 의약품의 오남용을 방지하고 국민 건강을 증진시키는 중요한 기반이 되었습니다.</p>
                  </div>
               </li>
            </ul>
         </div>
      </>
   );
}

export default Sub101;