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
import 'swiper/css/navigation'; // node_modules 불러오는 navigation\

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
import NoticeListVer1 from './pages/notice/NoticeListVer1';
import NoticeDetail from './pages/notice/NoticeDetail';
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
import MyBasicBoardCounsel from './pages/mybasicboardcounsel/MyBasicBoardCounsel';
import MyBasicBoardInquiry from './pages/mybasicboardinquiry/MyBasicBoardInquiry';
import MyBasicBoardRecords from './pages/mybasicboardrecords/MyBasicBoardRecords';
import MyBasicBoardLog from './pages/mybasicboardlog/MyBasicBoardLog';
import MyBasicBoardLogWrite from './pages/mybasicboardlog/MyBasicBoardLogWrite';
import MyBasicBoardLogDetail from './pages/mybasicboardlog/MyBasicBoardLogDetail';
import MyBasicBoardRecordsWrite from './pages/mybasicboardrecords/MyBasicBoardRecordsWrite';
import MyBasicBoardRecordsDetail from './pages/mybasicboardrecords/MyBasicBoardRecordsDetail';
import MyBasicBoardLogUpdate from './pages/mybasicboardlog/MyBasicBoardLogUpdate';
import MyProUserInfo from './pages/myprouserinfo/MyProUserInfo';
import MyProBoardCounsel from './pages/myproboardcounsel/MyProBoardCounsel';
import MyProBoardCounselMy from './pages/myproboardcounselmy/MyProBoardCounselMy';
import MyProBoardInquiry from './pages/myproboardinquiry/MyProBoardInquiry';
import Login from './pages/account/Login';
import NoticeWrite from './pages/notice/NoticeWrite';
import IdFind from './pages/account/IdFind';
import PwFind from './pages/account/PwFind';
import IdFindOk from './pages/account/IdFindOk';
import PwFindOk from './pages/account/PwFindOk';
import Success from './pages/account/Success';
import PwSuccess from './pages/account/PwSuccess';
import EmailPw from './pages/account/EmailPw';
import EmailJoin from './pages/account/EmailJoin';
import EmailId from './pages/account/EmailId';
import NoticeUpdate from './pages/notice/NoticeUpdate';
import QnaWrite from './pages/qna/QnaWrite';
import QnaDetail from './pages/qna/QnaDetail';
import QnaUpdate from './pages/qna/QnaUpdate';
import MinquiryWrite from './pages/minquiry/MinquiryWrite';
import MinquiryDetail from './pages/minquiry/MinquiryDetail';
import MinquiryUpdate from './pages/minquiry/MinquiryUpdate';
import MyproBoardCounselWrite from './pages/myproboardcounsel/MyproBoardCounselWrite';
import MyProBoardCounselDetail from './pages/myproboardcounsel/MyProBoardCounselDetail';
import MyproBoardCounselUpdate from './pages/myproboardcounsel/MyproBoardCounselUpdate';
import MyproBoardCounselMyWrite from './pages/myproboardcounselmy/MyproBoardCounselMyWrite';
import MyproBoardCounselMyUpdate from './pages/myproboardcounselmy/MyproBoardCounselMyUpdate';
import MyProBoardCounselMyDetail from './pages/myproboardcounselmy/MyProBoardCounselMyDetail';
import MyProBoardInquiryWrite from './pages/myproboardinquiry/MyProBoardInquiryWrite';
import MyProBoardInquiryUpdate from './pages/myproboardinquiry/MyProBoardInquiryUpdate';
import MyProBoardInquiryDetail from './pages/myproboardinquiry/MyProBoardInquiryDetail';
import MyBasicBoardCounselWrite from './pages/mybasicboardcounsel/MyBasicBoardCounselWrite';
import MyBasicBoardCounselDetail from './pages/mybasicboardcounsel/MyBasicBoardCounselDetail';
import MyBasicBoardCounselUpdate from './pages/mybasicboardcounsel/MyBasicBoardCounselUpdate';
import MyBasicBoardInquiryWrite from './pages/mybasicboardinquiry/MyBasicBoardInquiryWrite';
import MyBasicBoardInquiryDetail from './pages/mybasicboardinquiry/MyBasicBoardInquiryDetail';
import MyBasicBoardInquiryUpdate from './pages/mybasicboardinquiry/MyBasicBoardInquiryUpdate';
import QuickMenu from './components/QuickMenu';
import MyBasicUserPWChange from './pages/mybasicuserinfo/MyBasicUserPWChange';
import JoinSelect from './pages/account/JoinSelect';
import JoinExpert from './pages/account/JoinExpert';
import JoinGeneral from './pages/account/JoinGeneral';
import MyProUserPWChange from './pages/myprouserinfo/MyProUserPWChange';
import MyBasicBoardRecordsUpdate from './pages/mybasicboardrecords/MyBasicBoardRecordsUpdate';

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

               

               {/* 공지사항 게시판 */}
               <Route path='/noticelist' element={<NoticeList />} />
               <Route path='/noticelistver1' element={<NoticeListVer1 />} />
               <Route path='/noticewrite' element={<NoticeWrite />} />
               <Route path='/noticedetail' element={<NoticeDetail />} />
               <Route path='/noticeupdate' element={<NoticeUpdate />} />

               {/* 전문가와의 상담 게시판 */}
               <Route path='/qnalist' element={<QnaList />} />
               <Route path='/qnawrite' element={<QnaWrite />} />
               <Route path='/qnadetail' element={<QnaDetail />} />
               <Route path='/qnaupdate' element={<QnaUpdate />} />

               {/* 운영진에게 문의 게시판 */}
               <Route path='/minquirylist' element={<MinquiryList />} />
               <Route path='/minquirywrite' element={<MinquiryWrite />} />
               <Route path='/minquirydetail' element={<MinquiryDetail />} />
               <Route path='/minquiryupdate' element={<MinquiryUpdate />} />


               {/* 게시판 */}
               <Route path='/faqlist' element={<FaqList />} />
               <Route path='/privacy' element={<Privacy />} />
               <Route path='/termsofuse' element={<TermsOfUse />} />

               {/* Account 로그인 */}
               <Route path='/login' element={<Login />} />
               <Route path='/joinselect' element={<JoinSelect />} />
               <Route path='/joinexpert' element={<JoinExpert />} />
               <Route path='/joingeneral' element={<JoinGeneral />} />
               <Route path='/idfind' element={<IdFind />} />
               <Route path='/idfindok' element={<IdFindOk />} />
               <Route path='/pwfind' element={<PwFind />} />
               <Route path='/pwfindok' element={<PwFindOk />} />

               <Route path='/success' element={<Success />} />
               <Route path='/pwsuccess' element={<PwSuccess />} />
               <Route path='/emailpw' element={<EmailPw />} />
               <Route path='/emailjoin' element={<EmailJoin />} />
               <Route path='/emailid' element={<EmailId />} />

               


               {/* basic 마이페이지 */}
               <Route path='/mybasicmain' element={<MyBasicMain />} />
               {/* basic 회원정보  */}
               <Route path='/mybasicuserinfo' element={<MyBasicUserInfo />} />
               <Route path='/mybasicuserinfopwchange' element={<MyBasicUserPWChange />} />
               {/* basic 게시판 / 전문가와의 상담 */}
               <Route path='/mybasicboardcounsel' element={<MyBasicBoardCounsel />} />
               <Route path='/mybasicboardcounselwrite' element={<MyBasicBoardCounselWrite />} />
               <Route path='/mybasicboardcounseldetail' element={<MyBasicBoardCounselDetail />} />
               <Route path='/mybasicboardcounselupdate' element={<MyBasicBoardCounselUpdate />} />
               {/* basic 게시판 / 운영진에게 문의 */}
               <Route path='/mybasicboardinquiry' element={<MyBasicBoardInquiry />} />
               <Route path='/mybasicboardinquirywrite' element={<MyBasicBoardInquiryWrite />} />
               <Route path='/mybasicboardinquirydetail' element={<MyBasicBoardInquiryDetail />} />
               <Route path='/mybasicboardinquiryupdate' element={<MyBasicBoardInquiryUpdate />} />

               {/* basic 복약일지 / 메인 */}
               <Route path='/mybasicboardlog' element={<MyBasicBoardLog />} />
               {/* basic 복약일지 / 글쓰기  */}
               <Route path='/mybasicboardlogwrite' element={<MyBasicBoardLogWrite />} />
               {/* basic 복약일지 / 상세보기  */}
               <Route path='/mybasicboardlogdetail' element={<MyBasicBoardLogDetail />} />
               {/* basic 복약일지 / 수정하기  */}
               <Route path='/mybasicboardlogupdate' element={<MyBasicBoardLogUpdate />} />
               {/* basic 진료기록 / 메인  */}
               <Route path='/mybasicboardrecords' element={<MyBasicBoardRecords />} />
               {/* basic 진료기록 / 글쓰기  */}
               <Route path='/mybasicboardrecordswrite' element={<MyBasicBoardRecordsWrite />} />
               {/* basic 진료기록 / 상세보기  */}
               <Route path='/mybasicboardrecordsdetail' element={<MyBasicBoardRecordsDetail />} />
               {/* basic 진료기록 / 상세보기  */}
               <Route path='/mybasicboardrecordsupdate' element={<MyBasicBoardRecordsUpdate />} />

               {/* pro 마이페이지 */}
               <Route path='/mypromain' element={<MyProMain />} />

               {/* pro 회원정보  */}
               <Route path='/myprouserinfo' element={<MyProUserInfo />} />
               <Route path='/myprouserinfopwchange' element={<MyProUserPWChange />} />

               {/* pro 게시판 / 전문가와의 상담 */}
               <Route path='/myproboardcounsel' element={<MyProBoardCounsel />} />
               <Route path='/myproboardcounselwrite' element={<MyproBoardCounselWrite />} />
               <Route path='/myproboardcounselupdate' element={<MyproBoardCounselUpdate />} />
               <Route path='/myproboardcounseldetail' element={<MyProBoardCounselDetail />} />

               {/* pro 게시판 / 내 상담내역 */}
               <Route path='/myproboardcounselmy' element={<MyProBoardCounselMy />} />
               <Route path='/myproboardcounselmywrite' element={<MyproBoardCounselMyWrite />} />
               <Route path='/myproboardcounselmyupdate' element={<MyproBoardCounselMyUpdate />} />
               <Route path='/myproboardcounselmydetail' element={<MyProBoardCounselMyDetail />} />

               {/* pro 게시판 / 운영진에게 문의 */}
               <Route path='/myproboardinquiry' element={<MyProBoardInquiry />} />
               <Route path='/myproboardinquirywrite' element={<MyProBoardInquiryWrite />} />
               <Route path='/myproboardinquiryupdate' element={<MyProBoardInquiryUpdate />} />
               <Route path='/myproboardinquirydetail' element={<MyProBoardInquiryDetail />} />
            </Routes>

            <Footer />
            
            <QuickMenu />
         </div>
      </BrowserRouter>
   );
}

export default App;
