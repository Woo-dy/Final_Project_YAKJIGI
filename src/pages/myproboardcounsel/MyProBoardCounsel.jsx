import { Link, useLocation } from 'react-router-dom';
import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import styles from '../../styles/mypage/mymain.module.css';
import MyProMenu from '../../components/MyProMenu';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// import info from '../../styles/mypage/mybasicboardcounsel.module.css';

function MyProBoardCounsel(props) {
   const location = useLocation();

   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyProMenu />


         <div className={styles.my__board__tabmenu}>
            <ul>
               <li className={`${styles.link} ${location.pathname === '/myproboardcounsel' ? styles.boardActive : ''}`}>
                  <Link to="/myproboardcounsel">전문가와의 상담</Link>
               </li>
               <li className={`${styles.link} ${location.pathname === '/myproboardcounselmy' ? styles.boardActive : ''}`}>
                  <Link to="/myproboardcounselmy">내 상담내역</Link>
               </li>
            </ul>
         </div>

         <div className={mycommons.my__container} style={{margin:"60px auto 120px"}}>
            <div style={{width:"100%", height:"3000px", backgroundColor:"#ddd"}}>
               전문가와의 상담 내용입니다.
            </div>
         </div>
      </>
   );
}

export default MyProBoardCounsel;