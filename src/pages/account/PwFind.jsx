import React from 'react';
import styles from '../../styles/account/pwfindok.module.css';
import { Link } from 'react-router-dom';

function PwFind(props) {
   return (
      <>
         <div className={styles.idfind_container}>
            <div className={styles.box}>
               <h3 className={styles.titletxt}>비밀번호 변경</h3>
               <form className={styles.input_form} action="/pwupdate" method="post">
                  <div className={styles.gobutton}>
                     <input type="password" placeholder="비밀번호를 입력하세요" name="u_pw" className={`${styles.pwinput} ${styles.width100}`}
                     pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z\d!@#$%^&*]{8,15}$" />

                     <input type="submit" value="입 력" className={`${styles.user_id} ${styles.width100}`} />
                  </div>
                  <input type="hidden" name="u_id" value="${u_id}" />
               </form>
               
               <div className={styles.gobutton}>
                  <Link to="/login" className={`${styles.login} ${styles.go}`}>
                     로그인으로 가기
                  </Link>
                  <Link to="/" className={`${styles.main} ${styles.go}`}>
                     메인화면으로 가기
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}

export default PwFind;