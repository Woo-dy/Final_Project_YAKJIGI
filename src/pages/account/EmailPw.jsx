import React, { useEffect, useState } from 'react';
import styles from '../../styles/account/emailpw.module.css';

function EmailPw(props) {
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
         // 예: window.location.href = "/pwfindok";
      } else {
         // 인증번호가 일치하지 않을 경우
         alert("인증번호가 다릅니다.");
      }
   };


   return (
      <>
         <div className={styles.emailchk_container}>    
            <h3 className={styles.h3}>받은 이메일의 인증번호를 넣어주세요</h3>
            <form className={styles.authform} method="post" onSubmit={handleSubmit}>
               <input 
                  type="number" 
                  className={styles.authNumber}
                  name="authNumber" 
                  placeholder="인증번호를 넣어주세요." 
                  maxLength="6"
                  required
                  value={authNumber}
                  onChange={(e) => setAuthNumber(e.target.value)}
               /> 
               
               <button type="button" className={styles.send_btn}>전송</button>
            </form>
         </div>      
      </>
   );
}

export default EmailPw;