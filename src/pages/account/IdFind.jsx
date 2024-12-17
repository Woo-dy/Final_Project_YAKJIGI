import React from 'react';
import styles from '../../styles/account/idfind.module.css';
import { Link } from 'react-router-dom';

function IdFind(props) {
   return (
      <>
         <div className={styles.sub_container}>
            <ul className={styles.contents_box}>
               <li className={`${styles.box} ${styles.textleft}`}>
                  <div className={styles.idfind_container}>
                     <div className={styles.box}>
                        <h3 className={styles.h3}>아이디 찾기</h3>
                        <form className={styles.input_form} action="/idFind" method="post">
                           <input type="text" placeholder="이메일을 입력하세요" name="u_em" className={`${styles.idinput} ${styles.width100}`} pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*" />
                           <input type="submit" value="입 력" className={`${styles.user_id} ${styles.width100}`} />
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
               </li>
            </ul>
      </div>   
      </>
   );
}

export default IdFind;