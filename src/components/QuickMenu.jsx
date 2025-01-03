import { useEffect, useRef } from "react";
import "../styles/main/quickmenu.css";
import commons from '../styles/common.module.css';

function QuickMenu(props) {
   const btnRef = useRef(null); // 버튼 참조 생성

   // 스크롤 이벤트와 버튼 표시 처리
   useEffect(() => {
      const handleScroll = () => {
         if (btnRef.current) {
            if (window.scrollY >= 300) {
               btnRef.current.classList.add(commons.is__visible);
            } else {
               btnRef.current.classList.remove(commons.is__visible);
            }
         }
      };

      window.addEventListener("scroll", handleScroll);

      // 이벤트 클린업
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   // 부드러운 스크롤 함수
   const scrollToTop = () => {
      const scrollStep = -window.scrollY / 30; // 스크롤 속도 설정
      const scrollInterval = setInterval(() => {
         if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
         } else {
            clearInterval(scrollInterval);
         }
      }, 16); // 60fps
   };

   return (
      <>
         <button ref={btnRef} className={commons.goTop} onClick={scrollToTop}>
            <span class="material-icons">arrow_upward</span>
         </button>
      </>
   );
}

export default QuickMenu;