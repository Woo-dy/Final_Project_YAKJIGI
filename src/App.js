import 'reset-css';
import './styles/common.css';
import "./styles/main/head.css";
import "./styles/main/menu.css";
import './styles/main/container.css';
import './styles/main/footer.css';
import "animate.css";
import './App.css';

import { gsap } from "gsap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Container from './pages/main/Container';
import Footer from './components/Footer';

import 'swiper/css'; // node_modules 불러오는 swipercss
import 'swiper/css/pagination'; // node_modules 불러오는 pagination
import 'swiper/css/navigation'; // node_modules 불러오는 navigation

import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import 'animate.css';
import { useEffect } from 'react';

import Sub101 from './pages/sub101/Sub101';
import Sub102 from './pages/sub102/Sub102';
import Sub103 from './pages/sub103/Sub103';
import Sub104 from './pages/sub104/Sub104';
import Sub105 from './pages/sub105/Sub105';
import Sub201 from './pages/sub201/Sub201';
import Sub202 from './pages/sub202/Sub202';
import Sub203 from './pages/sub203/Sub203';
import Sub301 from './pages/sub301/Sub301';
import Sub302 from './pages/sub302/Sub302';
import Sub303 from './pages/sub303/Sub303';

function App() {
   
   useEffect(() => {
      // Swiper 슬라이드 인스턴스 가져오기
      const swiperInstance = document.querySelector(".swiper").swiper;

      const animateActiveSlide = () => {
         const activeSlide = document.querySelector(".swiper-slide-active");
         if (!activeSlide) return;

         // 애니메이션 초기화
         gsap.fromTo(
            activeSlide.querySelector("h2"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
         );

         gsap.fromTo(
            activeSlide.querySelector("p"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5 }
         );

         gsap.fromTo(
            activeSlide.querySelector("button"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.0 }
         );
      };

      // 슬라이드 변경 시 애니메이션 실행
      swiperInstance.on("slideChangeTransitionStart", animateActiveSlide);

      // 첫 화면 애니메이션 실행
      animateActiveSlide();


      AOS.init({
         duration: 1000, // 애니메이션 지속 시간
      });
      return () => {
         AOS.refresh(); // 컴포넌트 언마운트 시 AOS 새로 고침
      };
   }, []);

   return (
      <BrowserRouter>
         <div className='App'>
            {/* 메인 */}
            <Header />

            <Routes>
               <Route path='/' element={<Container />} />
               <Route path='/sub101' element={<Sub101 />} />
               <Route path='/sub102' element={<Sub102 />} />
               <Route path='/sub103' element={<Sub103 />} />
               <Route path='/sub104' element={<Sub104 />} />
               <Route path='/sub105' element={<Sub105 />} />
               <Route path='/sub201' element={<Sub201 />} />
               <Route path='/sub202' element={<Sub202 />} />
               <Route path='/sub203' element={<Sub203 />} />
               <Route path='/sub301' element={<Sub301 />} />
               <Route path='/sub302' element={<Sub302 />} />
               <Route path='/sub303' element={<Sub303 />} />
            </Routes>

            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
