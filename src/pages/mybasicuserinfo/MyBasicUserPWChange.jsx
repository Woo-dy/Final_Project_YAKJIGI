import React, { useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import commons from '../../styles/common.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import styles from '../../styles/mypage/userpwchange.module.css';

function MyBasicUserPWChange(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   // 입력값 
   const [nowPassWord, setNowPassWord] = useState();
   const [newPassWord, setNewPassWord] = useState('');
   const [newPassWordChk, setNewPassWordChk] = useState('');
   
   // 
   const [passWordSame, setPassWordSame] = useState(false);
   const [pwState, setPwState] = useState(false);
   
   // 입력 타입 상태
   const [nowPWType, setNowPWType] = useState("password");
   const [newPWType, setNewPWType] = useState("password"); 
   
   const passWordChk = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z\d!@#$%^&*]{8,15}$/;
   
   
   // 저장버튼
   const submitPassword = async  (e) => {
      // 기본 실행 방지
      e.preventDefault();
      
      try {
         const response = await axios.patch('백엔드 API 주소', {
            user_password: nowPassWord,
            user_newpassword: newPassWord
         });
         // 서버로 전송된 후 처리
         if (response.status === 200) {
            alert('비밀번호가 업데이트되었습니다.');
            // 이전값 저장
         }
      } catch (error) {
         console.error('서버와의 통신 중 오류 발생: 비밀번호 변경', error);
      }
   };
   
   // 현재 비밀번호값
   const nowPwUpdate = (e) => {
      setNowPassWord(e.target.value);
   }
   
   // 새 비밀번호값
   const newPwUpdate =  (e) => {
      const password = e.target.value;
      setNewPassWord(password);
      if(passWordChk.test(password)){
         setPwState(true);
         document.getElementById('pwtest').textContent = "";
      } else{
         setPwState(false);
         document.getElementById('pwtest').textContent = "비밀번호는 영어 대/소문자,특수문자,숫자를 포함하여 8자이상 15자이내여야 합니다.";
      }
   }
   
   // 새 비밀번호 확인값
   const newPwChkUpdate = (e) => {
      const password = e.target.value;
      setNewPassWordChk(password);
      if(password === newPassWord){
         setPassWordSame(true);
         document.getElementById('pwsame').textContent = "";
      }else{
         setPassWordSame(false);
         document.getElementById('pwsame').textContent = "비밀번호가 다릅니다.";
      }
      
      
   }
   
   // 이동
   const navigator = useNavigate();
   
   // 취소버튼
   const editingCancel = () => {
      navigator('/mybasicuserinfo');
   }
   
   // 현재 비밀번호 text <=> password
   const nowPWView = (event) => {
      setNowPWType(prev => (prev === "password" ? "text" : "password"));
      
   }
   
   // 새 비밀번호 text <=> password
   const newPWView = () => {
      setNewPWType(prev => (prev === "password" ? "text" : "password"));
   }

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />
         <div className={styles.contents}>
            <form onSubmit={submitPassword}>
               <div className={styles.contents_form}>
                  <ul className={styles.form_ul}>
                     <li className={styles.form_li}>
                        <span className={styles.form_title}>현재 비밀번호</span>
                     </li>
                     <li className={styles.form_li}>
                        <input type={nowPWType} className={styles.input_password} value={nowPassWord} onChange={/* changeNowPassWord */ nowPwUpdate} />
                        <span onClick={nowPWView} className={`material-symbols-outlined ${styles.eye_icon}`} >
                           {nowPWType === "password" ? 
                           // 보이는 눈
                                 "visibility"
                           // 보이지 않는 눈
                           : "visibility_off"
                           }
                        </span> 
                     </li>
                  </ul>
                  <ul className={styles.form_ul}>
                     <li className={styles.form_li}>
                        <span className={styles.form_title}>새 비밀번호</span>
                     </li>
                     <li className={styles.form_li}>
                        <input type={newPWType} className={styles.input_password} value={newPassWord} onChange={newPwUpdate} />
                        <span onClick={newPWView} className={`material-symbols-outlined ${styles.eye_icon}`} >
                           {newPWType === "password" ? 
                           // 보이는 눈
                                 "visibility"
                           // 보이지 않는 눈
                           : "visibility_off"
                           }
                        </span> 
                     </li>
                  </ul>
                  <p id='pwtest' className={styles.pwtest}></p>
                  
                  <ul className={styles.form_ul}>
                     <li className={styles.form_li}>
                        <span className={styles.form_title}>새 비밀번호 확인</span>
                     </li>
                     <li className={styles.form_li}>
                        <input type="password" className={styles.input_password} value={newPassWordChk} onChange={newPwChkUpdate} />
                     </li>
                  </ul>
                  <p id='pwsame' className={styles.pwtest}></p>
               </div>
               <div className={styles.input_submit_cancel}>
                     <button type="submit" className={styles.input_submit} disabled={!pwState || !passWordSame}>변경</button>
                     <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
               </div>
            </form>
         </div>
      </>
   );
}

export default MyBasicUserPWChange;