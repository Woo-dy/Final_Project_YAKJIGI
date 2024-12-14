import 'reset-css';
import "./styles/main/head.css";
import "./styles/main/menu.css";
import './styles/main/container.css';
import './styles/main/footer.css';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Container from './pages/main/Container';
import Footer from './components/Footer';

import 'swiper/css'; // node_modules 불러오는 swipercss
import 'swiper/css/pagination'; // node_modules 불러오는 pagination
import 'swiper/css/navigation'; // node_modules 불러오는 navigation

import AOS from 'aos';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';


import '../node_modules/aos/dist/aos.css';

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
import NoticeList from './pages/notice/NoticeList';
import FaqList from './pages/faq/FaqList';
import QnaList from './pages/qna/QnaList';
import MinquiryList from './pages/minquiry/MinquiryList';
import Privacy from './pages/privacy/Privacy';
import TermsOfUse from './pages/termsofuse/TermsOfUse';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import MyProMain from './pages/mypromain/MyProMain';
import MyBasicMain from './pages/mybasicmain/MyBasicMain';
import MyBasicUserInfo from './pages/mybasicuserinfo/MyBasicUserInfo';
import MyBasicProInfo from './pages/myprouserinfo/MyBasicProInfo';
import MyBasicBoardCounsel from './pages/mybasicboardcounsel/MyBasicBoardCounsel';
import MyBasicBoardInquiry from './pages/mybasicboardinquiry/MyBasicBoardInquiry';
import MyBasicBoardRecords from './pages/mybasicboardrecords/MyBasicBoardRecords';
import MyBasicBoardLog from './pages/mybasicboardlog/MyBasicBoardLog';
import MyBasicBoardLogWrite from './pages/mybasicboardlogwrite/MyBasicBoardLogWrite';
import MyBasicBoardLogDetail from './pages/mybasicboardlogdetail/MyBasicBoardLogDetail';
import MyBasicBoardLogEdit from './pages/mybasicboardlogedit/MyBasicBoardLogEdit';
import MyBasicBoardRecordsWrite from './pages/mybasicboardrecordswrite/MyBasicBoardRecordsWrite';
import MyBasicBoardRecordsDetail from './pages/mybasicboardrecordsdetail/MyBasicBoardRecordsDetail';

function App() {
   useEffect(() => {

      AOS.init({ duration: 1000 });

      return () => {
         AOS.refresh();
      };
   }, []);

   return (
      <BrowserRouter>
         <div className='App'>
            <ScrollToTop />
            {/* 메인 */}
            <Header />

            <Routes>
               {/* 웹 메인 */}
               <Route path='/' element={<Container />} />
               {/* sub1 */}
               <Route path='/sub101' element={<Sub101 />} />
               <Route path='/sub102' element={<Sub102 />} />
               <Route path='/sub103' element={<Sub103 />} />
               <Route path='/sub104' element={<Sub104 />} />
               <Route path='/sub105' element={<Sub105 />} />
               {/* sub2 */}
               <Route path='/sub201' element={<Sub201 />} />
               <Route path='/sub202' element={<Sub202 />} />
               <Route path='/sub203' element={<Sub203 />} />
               {/* sub3 */}
               <Route path='/sub301' element={<Sub301 />} />
               <Route path='/sub302' element={<Sub302 />} />
               <Route path='/sub303' element={<Sub303 />} />
               {/* 게시판 */}
               <Route path='/noticelist' element={<NoticeList />} />
               <Route path='/faqlist' element={<FaqList />} />
               <Route path='/qnalist' element={<QnaList />} />
               <Route path='/minquiry' element={<MinquiryList />} />
               <Route path='/privacy' element={<Privacy />} />
               <Route path='/termsofuse' element={<TermsOfUse />} />
               {/* 마이페이지 basic */}
               <Route path='/mybasicmain' element={<MyBasicMain />} />
               {/* 회원정보 보기/수정 */}
               <Route path='/mybasicuserinfo' element={<MyBasicUserInfo />} />
               <Route path='/mybasicboardcounsel' element={<MyBasicBoardCounsel />} />
               <Route path='/mybasicboardinquiry' element={<MyBasicBoardInquiry />} />

               <Route path='/mybasicboardlog' element={<MyBasicBoardLog />} />
               <Route path='/mybasicboardlogwrite' element={<MyBasicBoardLogWrite />} />
               <Route path='/mybasicboardlogdetail' element={<MyBasicBoardLogDetail />} />
               <Route path='/mybasicboardlogedit' element={<MyBasicBoardLogEdit />} />

               <Route path='/mybasicboardrecords' element={<MyBasicBoardRecords />} />
               <Route path='/mybasicboardrecordswrite' element={<MyBasicBoardRecordsWrite />} />
               <Route path='/mybasicboardrecordsdetail' element={<MyBasicBoardRecordsDetail />} />

               {/* 마이페이지 pro */}
               <Route path='/mypromain' element={<MyProMain />} />
               <Route path='/myproinfo' element={<MyBasicProInfo />} />
            </Routes>

            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
