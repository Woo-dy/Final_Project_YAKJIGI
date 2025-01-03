import React, { useState } from 'react';
import styles from '../../styles/account/pwfindok.module.css';
import { Link } from 'react-router-dom';

function PwFindOk({ u_id }) {
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [isPasswordValid, setIsPasswordValid] = useState(false);

   // 비밀번호 유효성 검사 정규식
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z\d!@#$%^&*]{8,15}$/;


   // 비밀번호 변경 이벤트 핸들러
   const handlePasswordChange = (e) => {
      const inputValue = e.target.value;
      setPassword(inputValue);

      if (inputValue === '') {
         // 입력값이 비어 있을 경우
         setErrorMessage(''); // 에러 메시지 제거
         setIsPasswordValid(false); // 버튼 비활성화
      } else if (!passwordRegex.test(inputValue)) {
         // 유효성 검사 실패
         setErrorMessage(
            '비밀번호는 영어 대/소문자, 특수문자, 숫자를 포함하여 8자 이상 15자 이내여야 합니다.'
         );
         setIsPasswordValid(false);
      } else {
         // 유효성 검사 성공
         setErrorMessage(''); // 에러 메시지 제거
         setIsPasswordValid(true); // 버튼 활성화
      }
   };

   // 폼 제출 이벤트 핸들러
   const handleSubmit = (e) => {
      if (!isPasswordValid) {
         e.preventDefault(); // 유효하지 않은 경우 폼 제출 방지
         alert('유효한 비밀번호를 입력해주세요.');
      }
   };
   
   return (
      <>
         <div className={styles.idfind_container}>
            <div className={styles.box}>
               <h3 className={styles.titletxt}>비밀번호 변경</h3>
               <form className={styles.input_form} action="/pwupdate" method="post" onSubmit={handleSubmit}>
                  <div className={styles.gobutton}>
                     <input 
                        type="password" 
                        placeholder="비밀번호를 입력하세요" 
                        name="u_pw"
                        value={password}
                        onChange={handlePasswordChange}
                        className={`${styles.pwinput} ${styles.width100}`}
                        required
                     />
                     <input 
                        type="submit" 
                        value="입 력" 
                        className={`${styles.user_id} ${styles.width100}`}
                        disabled={!isPasswordValid}
                        style={{
                           backgroundColor: isPasswordValid ? '#007BFF' : '#CCCCCC',
                           color: isPasswordValid ? '#FFFFFF' : '#666666',
                           cursor: isPasswordValid ? 'pointer' : 'not-allowed',
                        }}
                     />
                  </div>
                  {errorMessage && <p className={styles.pwtest}>{errorMessage}</p>}
                  <input type="hidden" name="u_id" value="${u_id }" />
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

export default PwFindOk;