import React from 'react';
import styles from '../../styles/account/success.module.css';
import { Link } from 'react-router-dom';

function Success(props) {
   const u_name = "손흥민";

   return (
      <>
         <div className={styles.suc_container}>
            <div className={styles.check}>
               <i class="fa-regular fa-circle-check"></i>
            </div>
            <div className={styles.success}>
               <p>회원가입 완료</p>
            </div>
            <p className={styles.username}>{u_name}님 회원가입이 완료되었습니다.</p>
            <div className={styles.infobox}>
               <p>회원가입 내역 확인 및 수정은 <a href="#" className={styles.infoup}> 마이페이지 &gt; 회원정보 수정</a>에서 가능합니다.</p>
            </div>
            <div className={styles.twobtn}>
               <Link to="/login" className={`${styles.login} ${styles.go}`}>
                  로그인으로 가기
               </Link>
               <Link to="/" className={`${styles.main} ${styles.go}`}>
                  메인화면으로 가기
               </Link>
            </div>
         </div>
      </>
   );
}

export default Success;