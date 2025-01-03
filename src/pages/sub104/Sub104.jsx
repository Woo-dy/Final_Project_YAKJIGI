import React from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/sub104/sub104.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import OnMouseHover1 from '../../components/OnMouseHover1';
import OnMouseHover2 from '../../components/OnMouseHover2';

function Sub104(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         <div className={styles.content_container}>
            <div className={styles.contents}>
               <p className={styles.ptag}>
               의약품은 신약과 제네릭이라는 두 가지 형태로 나뉩니다. 이 둘은 모두 환자의 건강을 증진하기 위한 목적으로 개발되지만, 개발 과정과 시장에서의 역할은 크게 다릅니다.
               <br /><br />
               신약은 새로운 화합물을 기반으로 만들어진 의약품으로, 질병 치료에 혁신적인 접근 방식을 제공합니다. 신약은 기존의 치료법으로 해결되지 않는 문제를 해결하거나, 더 나은 치료 효과를 목표로 개발됩니다. 하지만 신약을 개발하기 위해서는 수년간의 연구, 막대한 비용, 그리고 복잡한 허가 절차가 필요합니다. 이러한 이유로 신약은 출시 초기에 높은 가격이 책정되는 경우가 많습니다.
               <br /><br />
               반면, 제네릭 의약품은 신약의 특허가 만료된 후에 개발되는 약물입니다. 신약과 동일한 주성분을 사용하여 효능과 안전성을 보장하면서도, 연구개발비와 초기 허가 과정에 대한 부담이 적기 때문에 생산 비용이 낮습니다. 이에 따라 제네릭 의약품은 신약에 비해 훨씬 저렴하게 공급되며, 대중의 의료비 부담을 줄이는 데 기여합니다.
               <br /><br />
               두 약물은 상호 보완적인 역할을 합니다. 신약은 의학의 진보를 이끄는 핵심 동력이 되고, 제네릭은 이를 바탕으로 더 많은 환자들이 치료를 받을 수 있도록 합니다. 신약의 혁신과 제네릭의 대중화는 의약품 시장을 균형 있게 유지하며, 건강한 사회를 구축하는 데 중요한 역할을 합니다.
               <br /><br />
               결론적으로, 신약과 제네릭은 서로 다른 과정을 거쳐 개발되지만, 모두가 건강한 삶을 영위할 수 있도록 돕는 데 필수적인 존재입니다.
               </p>
            </div>
            <div className={styles.section_contain}>
               {/* 컴포넌트 */}
               {/* 백그라운드 사진은 css에 있음 */}
               <OnMouseHover1 />
               <OnMouseHover2 />
            </div>
         </div>
      </>
   );
}

export default Sub104;