import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MedicineCategory() {
   const quickMenuRef = useRef(null);
   const [activeIndex, setActiveIndex] = useState(0);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const quickStandard = 1500;
   const location = useLocation(); // 현재 경로 가져오기

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const backgrounds = [
      "/images/main/medicinecategory01.jpg",
      "/images/main/medicinecategory02.jpg",
      "/images/main/medicinecategory03.jpg",
      "/images/main/medicinecategory04.jpg",
      "/images/main/medicinecategory05.jpg",
   ];

   const titles = [
      "약국 찾아보기",
      "폐의약품 수거함 찾아보기",
      "보도자료 찾아보기",
      "전문가와의 상담",
      "운영진에게 문의",
   ];

   const descriptions = [
      "가까운 약국 정보를 한눈에 확인하세요",
      "환경을 위한 올바른 폐의약품 처리 방법",
      "최신 의약 정보를 뉴스와 함께 만나보세요",
      "전문가와 소통하며 신뢰 있는 정보를 얻으세요",
      "사이트와 관련된 질문을 운영진에게 직접 남기세요",
   ];

   const links = [
      "sub301",
      "sub303",
      "sub302",
      "qnalist",
      "minquirylist",
   ];



   // 자동 활성화된 링크 클릭 방지
   useEffect(() => {
      if (location.pathname === "/") {
      // 메인 페이지에서는 자동으로 클릭하지 않음
      return;
      }

      const activeLink = document.querySelector(".circle li a.on");
      if (activeLink) {
      activeLink.click(); // 활성화된 링크 클릭
      }
   }, [activeIndex, location.pathname]); // 경로 변경 시 실행

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   useEffect(() => {
      const quickMenu = quickMenuRef.current;
      if (quickMenu) {
         if (windowWidth <= quickStandard) {
         quickMenu.style.right = `${windowWidth - quickStandard}px`;
         } else {
         quickMenu.style.right = `${(windowWidth - quickStandard) / 2}px`;
         }
      }
   }, [windowWidth]);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((prevIndex) => (prevIndex + 1) % backgrounds.length); // 다음 인덱스로 순환
      }, 3000);

      return () => clearInterval(interval);
   }, [backgrounds.length]);

   const handleCircleClick = (index) => {
      setActiveIndex(index);
   };

   // 디버깅용 로그
   useEffect(() => {
      console.log("Active Index:", activeIndex);
      console.log("Current Background:", backgrounds[activeIndex]);
   }, [activeIndex, backgrounds]);

   return (
      <>
         <div
         className="medicine__wrap"
         style={{
            background: `url("${backgrounds[activeIndex]}") no-repeat center center`,
            backgroundSize: "cover",
         }}
         >
         <div className="servicewrap">
            <div className="in">
               <ul className="topMent chgMent">
               {titles.map((title, index) => (
                  <li
                     key={index}
                     className={`quickservice care ${activeIndex === index ? "active" : ""}`}
                  >
                     <p className="title">{title}</p>
                     <p className="txt">
                     <span>{descriptions[index]}</span>
                     </p>
                  </li>
               ))}
               </ul>
               <div className="circlewrap">
               <ul className="circle cf">
                  {backgrounds.map((_, index) => (
                     <li key={index}>
                     <Link
                        to={activeIndex === index ? `/${links[index]}` : ""}
                        className={activeIndex === index ? "on" : ""}
                        onClick={() => handleCircleClick(index)}
                     >
                        {titles[index]}
                     </Link>
                     </li>
                  ))}
               </ul>
               </div>
            </div>
         </div>
         <div id="quickMenu" ref={quickMenuRef} className="quick-menu">
            Quick Menu
         </div>
         </div>
      </>
   );
}

export default MedicineCategory;
