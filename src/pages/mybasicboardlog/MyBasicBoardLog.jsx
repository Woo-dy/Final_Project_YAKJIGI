import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import { Link } from 'react-router-dom';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicBoardLog(props) {

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>마이페이지</h2>
            <p className={commons.sub_title}>약지기에서의 나의 기록들을 확인하세요</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />

         <div className={mycommons.my__container} style={{margin:"60px auto 120px"}}>
            <div style={{width:"100%", height:"3000px", backgroundColor:"#ddd"}}>
               복약일지 내용입니다. <br />

               <Link to="/mybasicboardlogwrite">글쓰기</Link>
               <br />
               <Link to="/mybasicboardlogedit">수정하기</Link>
               <br />
               <Link to="/mybasicboardlogdetail">상세보기</Link>
            </div>
         </div>
      </>
   );
}

export default MyBasicBoardLog;