import React from 'react';
import { useLocation } from 'react-router-dom';

function SubTopImages(props) {
   const location = useLocation();
   const noticegroupPaths = ['/noticelist', '/noticelistver1', '/noticedetail', '/noticewrite', '/noticeupdate'];
   const minquirygroupPaths = ['/minquirylist', '/minquirydetail', '/minquirywrite', '/minquiryupdate'];
   const qnagroupPaths = ['/qnalist', '/qnadetail', '/qnawrite', '/qnaupdate'];
   const accountgroupPaths = ['/login', '/joinselect', '/joinexpert', '/joingeneral', '/idfind', '/idfindok', '/pwfind', '/pwfindok', '/success'];

   const sub10groupPaths = ['/sub101', '/sub102', '/sub103', '/sub104', '/sub105'];
   const sub20groupPaths = ['/sub201', '/sub202', '/sub203'];
   const sub30groupPaths = ['/sub301', '/sub302', '/sub303'];

   // 현재 경로에 따라 배경 이미지 설정
   const getBackgroundImage = () => {
      if (location.pathname.startsWith('/mybasic')) {
         return 'url(./images/sub/sub_bg_mybasic.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (location.pathname.startsWith('/mypro')) {
         return 'url(./images/sub/sub_bg_mypro.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (noticegroupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_4.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (minquirygroupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_4.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (qnagroupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_4.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (accountgroupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_account.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (sub10groupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_1.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (sub20groupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_2.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else if (sub30groupPaths.includes(location.pathname)) {
         return 'url(./images/sub/sub_bg_3.jpg)'; // 모든 '/my'로 시작하는 페이지
      } else {
         switch (location.pathname) {
            case '/faqlist':
               return 'url(./images/sub/sub_bg_4.jpg)'; 
            case '/privacy':
               return 'url(./images/sub/sub_bg_privacy.jpg'; 
            case '/termsofuse':
               return 'url(./images/sub/sub_bg_privacy.jpg';  
            case '/pwsuccess':
               return 'url(./images/sub/sub_bg_mybasic.jpg)';              
               
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
            height: '400px',
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      ></div>
   );
}

export default SubTopImages;