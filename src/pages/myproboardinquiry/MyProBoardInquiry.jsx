import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import MyProMenu from '../../components/MyProMenu';
// import info from '../../styles/mypage/mybasicboardinquiry.module.css';

function MyProBoardInquiry(props) {
   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>마이페이지</h2>
            <p className={commons.sub_title}>약지기에서의 나의 기록들을 확인하세요</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyProMenu />

         <div className={mycommons.my__container} style={{margin:"60px auto 120px"}}>
            <div style={{width:"100%", height:"3000px", backgroundColor:"#ddd"}}>
               운영진에게 문의내용입니다.
            </div>
         </div>
      </>
   );
}

export default MyProBoardInquiry;