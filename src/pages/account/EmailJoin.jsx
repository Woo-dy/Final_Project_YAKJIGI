import React, { useEffect, useState } from 'react';
import styles from '../../styles/account/emailjoin.module.css';

function EmailJoin(props) {
   const [authNumber, setAuthNumber] = useState('');
   const [randomNumber, setRandomNumber] = useState(null);

   useEffect(() => {
      // 랜덤 인증번호 생성 (예: 100000 ~ 999999)
      const generatedNumber = Math.floor(100000 + Math.random() * 900000);
      setRandomNumber(generatedNumber);
      console.log("Generated Auth Number:", generatedNumber); // 디버깅용
   }, []);

   const handleSubmit = (event) => {
      event.preventDefault(); // 기본 폼 제출 방지

      if (authNumber === String(randomNumber)) {
         // 인증번호가 일치할 경우
         alert("인증번호가 일치합니다. 폼을 제출합니다.");
         // 실제 폼 제출 로직을 여기에 추가
         // 예: window.location.href = "/joinOK";
         // 또는 fetch를 사용하여 서버에 데이터 전송
      } else {
         // 인증번호가 일치하지 않을 경우
         alert("인증번호가 다릅니다.");
      }
   };

   return (
      <>
         <div className={styles.emailchk_container}>	
            <h3 className={styles.h3}>받은 이메일의 인증번호을 넣어주세요</h3>
            <form className={styles.numform} method="post" onSubmit={handleSubmit}>
               <input 
                  type="number" 
                  className={styles.authNumber} 
                  name="authNumber"
                  placeholder="인증번호를 넣어주세요." 
                  maxlength="6" 
                  required
                  value={authNumber}
                  onChange={(e) => setAuthNumber(e.target.value)} 
               /> 
               <input type="hidden" name="u_id" value="${lvo.u_id}" />
               <input type="hidden" name="u_pw" value="${lvo.u_pw}" />
               <input type="hidden" name="u_na" value="${lvo.u_na}" />
               <input type="hidden" name="u_phone" value="${lvo.u_phone}" />
               <input type="hidden" name="u_gen" value="${lvo.u_gen}" />
               <input type="hidden" name="u_bir" value="${lvo.u_bir}" />
               <input type="hidden" name="u_em" value="${lvo.u_em}" />
               <input type="button" className={`${styles.btn} ${styles.btn_mail}`} value="전송" />
            </form>
         </div>	   
      </>
   );
}

export default EmailJoin;