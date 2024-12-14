// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import titleMap from '../titleMap'; // 타이틀 매핑 객체 경로

const useDocumentTitle = () => {
   const location = useLocation();
   const { mainTitle, subTitle } = titleMap[location.pathname] || {
      mainTitle: '기본 타이틀',
      subTitle: '기본 서브 타이틀',
   };

   useEffect(() => {
      document.title = mainTitle; // 주 타이틀 설정
   }, [mainTitle]);

   return { mainTitle, subTitle }; // 주 타이틀과 서브 타이틀을 반환
};

export default useDocumentTitle;