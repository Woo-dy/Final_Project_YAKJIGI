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

function App() {

   return (
      <BrowserRouter>
         <div className='App'>
            <ScrollToTop />
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
               <Route path='/noticelist' element={<NoticeList />} />
               <Route path='/faqlist' element={<FaqList />} />
               <Route path='/qnalist' element={<QnaList />} />
               <Route path='/minquiry' element={<MinquiryList />} />
               <Route path='/privacy' element={<Privacy />} />
               <Route path='/termsofuse' element={<TermsOfUse />} />
            </Routes>

            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
