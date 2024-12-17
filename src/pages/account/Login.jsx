import React from 'react';
import styles from '../../styles/account/login.module.css';
import { Link } from 'react-router-dom';

function Login(props) {
   return (
      <>
         <div className={styles.login_container}>
            <div className={styles.box}>
               <h2 className={styles.logintxt}>로그인</h2>
               <form action="loginok" method="post" style={{marginTop:"29px"}}>
                  <h3 className={styles.h3}>아이디</h3>
                  <input className={styles.id} type="text" name="u_id"
                  style={{BorderBottom:"1px solid #dddddd"}}
                  placeholder="아이디를 입력해주세요." />

                  <h3 className={styles.h3}>비밀번호</h3>
                  <input className={styles.pw} type="password" name="u_pw" style={{BorderBottom:"1px solid #dddddd"}} 
                  placeholder="비밀번호를 입력해주세요." />
                  <button className={styles.loginbtn} onclick="submit()">로그인</button>
               </form>
               <div className={styles.three}>
                  <Link to="/idfind" className={styles.tmp}>아이디 찾기</Link>
                  <Link to="/pwfind" className={styles.tmp}>비밀번호 찾기</Link> 
                  <Link to="/join" className={styles.tmp}>회원가입</Link>
               </div>
               <div style={{padding:"20px 0px"}}>
                  <p className={styles.ptag}>아이디와 비밀번호 입력하기 귀찮으시죠?</p>
                  <p className={styles.ptag}>1초 회원가입으로 입력없이 간편하게 로그인 하세요.</p>
               </div>
            
               <button className={`${styles.sns} ${styles.kakao}`} onclick="location.href='https://kauth.kakao.com/oauth/authorize?client_id=673fbc7db4cc9805a5120f9f38a7289a&redirect_uri=http://localhost:8080/kakaologin&response_type=code'">카카오 로그인</button>
               <button className={`${styles.sns} ${styles.naver}`} onclick="location.href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=bv_786diGR8Y0y00e9Bx&redirect_uri=http://localhost:8080/naverlogin&state=STATE_STRING'">네이버로 로그인</button>
               <button className={`${styles.sns} ${styles.google}`} onclick="location.href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=bv_786diGR8Y0y00e9Bx&redirect_uri=http://localhost:8080/naverlogin&state=STATE_STRING'">구글로 로그인</button>
            </div>
         </div>   
      </>
   );
}

export default Login;