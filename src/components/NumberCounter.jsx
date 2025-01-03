import React, { useEffect, useState } from 'react';

function NumberCounter({ countTo, duration, className }) {
   const [count, setCount] = useState(0); // 현재 카운트 값

   useEffect(() => {
   let start = 0;
   const increment = countTo / (duration / 10); // 10ms마다 증가할 값
   const interval = setInterval(() => {
      start += increment;
      if (start >= countTo) {
         setCount(countTo); // 최종 값 설정
         clearInterval(interval); // 애니메이션 종료
      } else {
         setCount(Math.floor(start)); // 소수점 제거
      }
   }, 10); // 10ms마다 업데이트

   return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
   }, [countTo, duration]);
   
   return <span className={className}>{count}</span>; // className 동적 적용
}

export default NumberCounter;