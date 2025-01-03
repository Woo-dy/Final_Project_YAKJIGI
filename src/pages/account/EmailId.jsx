import React from 'react';
import styles from '../../styles/account/emailid.module.css';

function EmailId(props) {
   return (
      <>
         <div className={styles.emailchk_container}>	
            <h3 className={styles.h3}>받은 이메일의 인증번호을 넣어주세요</h3>
            <form className={styles.numform} method="post">
               <input 
                  type="number" 
                  className={styles.authNumber} 
                  name="authNumber"
                  placeholder="인증번호를 넣어주세요." 
                  maxlength="6" 
                  required 
               /> 
               <input type="hidden" name="u_id" value="${lvo.u_id}" />
               <input type="hidden" name="u_pw" value="${lvo.u_pw}" />
               <input type="hidden" name="u_na" value="${lvo.u_na}" />
               <input type="hidden" name="u_phone" value="${lvo.u_phone}" />
               <input type="hidden" name="u_gen" value="${lvo.u_gen}" />
               <input type="hidden" name="u_bir" value="${lvo.u_bir}" />
               <input type="hidden" name="u_em" value="${lvo.u_em}" />
               <input type="button" className={styles.send_btn} value="전송" />
            </form>
         </div>	
      </>
   );
}

export default EmailId;