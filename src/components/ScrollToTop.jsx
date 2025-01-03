import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(props) {const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0); // 스크롤을 최상단으로 이동
   }, [pathname]); // pathname이 변경될 때마다 실행

   return null; // 이 컴포넌트는 렌더링할 내용이 없음
}

export default ScrollToTop;