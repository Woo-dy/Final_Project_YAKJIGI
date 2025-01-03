import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicBoardLogEdit(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />

         <div className={mycommons.my__container} style={{margin:"60px auto 120px"}}>
            <div style={{width:"100%", height:"3000px", backgroundColor:"#ddd"}}>
               복약일지 내용입니다. <br />

               <Link to="/mybasicboardlog">목록으로</Link>
            </div>
         </div>
      </>
   );
}

export default MyBasicBoardLogEdit;