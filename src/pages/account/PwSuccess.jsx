import React from 'react';
import styles from '../../styles/account/pwsuccess.module.css';
import { Link } from 'react-router-dom';

function PwSuccess(props) {
   const u_name = "손흥민";

   return (
      <>
         <div className={styles.suc_container}>
            <div className={styles.check}>
               <i class="fa-regular fa-circle-check"></i>
            </div>
            <div className={styles.success}>
               <p>비밀번호 변경 완료</p>
            </div>
            <p className={styles.username}>{u_name}님 비밀번호 변경이 완료되었습니다.</p>
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

export default PwSuccess;