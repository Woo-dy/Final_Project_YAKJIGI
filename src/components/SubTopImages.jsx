import React from 'react';
import { useLocation } from 'react-router-dom';

function SubTopImages(props) {
   const location = useLocation();

   // 현재 경로에 따라 배경 이미지 설정
   const getBackgroundImage = () => {
      if (location.pathname.startsWith('/my')) {
         return 'url(./images/main/bg_service3.png)'; // 모든 '/my'로 시작하는 페이지
      } else {
         switch (location.pathname) {
            case '/sub101':
               return 'url(./images/main/bg_service1.png)'; 
            case '/sub102':
               return 'url(./images/main/bg_service2.png)'; 
            case '/sub103':
               return 'url(./images/main/bg_service3.png)'; 
            case '/sub104':
               return 'url(./images/main/bg_service4.png)'; 
            case '/sub105':
               return 'url(./images/main/bg_service5.png)'; 
            case '/sub201':
               return 'url(./images/main/bg_service1.png)'; 
            case '/sub202':
               return 'url(./images/main/bg_service2.png)'; 
            case '/sub203':
               return 'url(./images/main/bg_service3.png)'; 
            case '/sub301':
               return 'url(./images/main/bg_service1.png)'; 
            case '/sub302':
               return 'url(./images/main/bg_service2.png)'; 
            case '/sub303':
               return 'url(./images/main/bg_service3.png)'; 
            case '/noticelist':
               return 'url(./images/main/bg_service1.png)'; 
            case '/faqlist':
               return 'url(./images/main/bg_service2.png)'; 
            case '/qnalist':
               return 'url(./images/main/bg_service3.png)'; 
            case '/minquiry':
               return 'url(./images/main/bg_service4.png)'; 
            case '/privacy':
               return 'url(./images/main/bg_service1.png)'; 
            case '/termsofuse':
               return 'url(./images/main/bg_service2.png)';  
            default:
               return null; // 메인 페이지 또는 다른 페이지에서는 null 반환
         }
      }
   };

   const backgroundImage = getBackgroundImage();

   // 배경 이미지가 없으면 <div>를 렌더링하지 않음
   if (!backgroundImage) {
      return null; // <div>를 렌더링하지 않음
   }

   return (
      <div
         style={{
            height: '360px',
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      ></div>
   );
}

export default SubTopImages;