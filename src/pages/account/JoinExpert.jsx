import React, { useEffect, useMemo, useState } from 'react';
import styles from '../../styles/account/join.module.css';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { common } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import JoinCategory from '../../components/JoinCategory';

function JoinExpert(props) {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const expertId = queryParams.get('id'); // URL에서 ID 가져오기
   
   const [fileName, setFileName] = useState('');

   const handleFileChange = (event) => {
      const file = event.target.files[0]; // 선택된 파일

      if (file) {
         setFileName(file.name); // 파일 이름을 상태에 저장
      }
   };
   
   // 아이디 중복처리 (이 부분은 적용 여부 확인 바람)
   const [userId, setUserId] = useState(""); // 입력된 아이디
   const [idCheckResult, setIdCheckResult] = useState(""); // 중복 체크 결과 메시지
   const [isIdAvailable, setIsIdAvailable] = useState(false); // 사용 가능 여부
   
   const [password, setPassword] = useState(""); // 비밀번호
   const [passwordMessage, setPasswordMessage] = useState(""); // 비밀번호 유효성 메시지
   const [isPasswordValid, setIsPasswordValid] = useState(false); // 비밀번호 유효성 여부

   const [passwordCheck, setPasswordCheck] = useState(""); // 비밀번호 확인
   const [passwordMatchMessage, setPasswordMatchMessage] = useState(""); // 비밀번호 확인 메시지
   const [isPasswordMatch, setIsPasswordMatch] = useState(false); // 비밀번호 일치 여부

   const [email, setEmail] = useState('');
   const [emailBack, setEmailBack] = useState('');
   const [isEmailBackReadOnly, setIsEmailBackReadOnly] = useState(true);
   
   const [allChecked, setAllChecked] = useState(false);
   const [optionChecks, setOptionChecks] = useState([false, false, false, false]);
   
   // 이름 상태 추가
   const [name, setName] = useState("");

   // 휴대폰 번호
   const [phone, setPhone] = useState('');

   // 이메일 정규 표현식 정의
   const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

   // 회원가입 전체 체크
   const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태

   // 아이디 중복처리 (이 부분은 적용 여부 확인 바람)
   const handleIdChange = (e) => {
      setUserId(e.target.value);
      setIdCheckResult("중복 확인을 해주세요."); // 값 변경 시 결과 초기화
      setIsIdAvailable(false);
   };

   // 비밀번호 중복처리 (이 부분은 적용 여부 확인 바람)
   // 비밀번호 유효성 검사
   const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);

      const pwdTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z\d!@#$%^&*]{8,15}$/;
      if (pwdTest.test(value)) {
         setPasswordMessage(""); // 유효하면 메시지 비우기
         setIsPasswordValid(true);
      } else {
         setPasswordMessage(
            "비밀번호는 영어 대/소문자, 특수문자, 숫자를 포함하여 8자 이상 15자 이내여야 합니다."
         );
         setIsPasswordValid(false);
      }
   };


   // 비밀번호 확인 검사
   const handlePasswordCheckChange = (e) => {
      const value = e.target.value;
      setPasswordCheck(value);
   };

   useEffect(() => {
      if (passwordCheck === "") {
         setPasswordMatchMessage(""); // 비밀번호 확인 입력값이 없으면 메시지 초기화
         setIsPasswordMatch(false);
      } else if (password === passwordCheck) {
         setPasswordMatchMessage("비밀번호가 일치합니다.");
         setIsPasswordMatch(true);
      } else {
         setPasswordMatchMessage("비밀번호가 일치하지 않습니다.");
         setIsPasswordMatch(false);
      }
   }, [password, passwordCheck]); // password와 passwordCheck가 변경될 때마다 검증 실행


   const handleIdCheck = async () => {
      if (!userId.trim()) {
         alert("아이디를 입력하세요");
      return;
   }

   try {
      const response = await fetch("/idchk", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ u_id: userId }),
      });
      const result = await response.json();
      if (result === true) {
         setIdCheckResult("사용 가능한 ID 입니다.");
         setIsIdAvailable(true);
      } else {
         setIdCheckResult("사용 불가능한 ID 입니다.");
         setIsIdAvailable(false);
      }
      } catch (error) {
      alert("중복 확인 중 오류가 발생했습니다.");
      console.error(error);
   }
};

   // 성별 radio btn
   const [gender, setGender] = useState('male'); // 기본값 설정

   const handleChange = (event) => {
      setGender(event.target.value); // 선택된 값으로 상태 업데이트
   };

   // Date 달력 나오는 라이브러리
   const [startDate, setStartDate] = useState(null);
   const [inputValue, setInputValue] = useState('');

   const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
   };

   const handleEmailBackChange = (value) => {
      if (value === 'null') {
            setIsEmailBackReadOnly(true); // 입력 필드를 비활성화
            setEmailBack(''); // 입력 필드 비우기
      } else if (value === 'select') {
            setIsEmailBackReadOnly(false); // 직접 입력 가능
            setEmailBack(''); // 입력 필드 비우기
      } else {
            setEmailBack(value); // 선택한 이메일 도메인으로 설정
            setIsEmailBackReadOnly(true); // 입력 필드를 비활성화
      }
   };

   const handleAllCheck = () => {
         const newChecked = !allChecked;
         setAllChecked(newChecked);
         setOptionChecks(optionChecks.map(() => newChecked));
   };

   const handleOptionCheck = (index) => {
      const newChecks = [...optionChecks];
      newChecks[index] = !newChecks[index];
      setOptionChecks(newChecks);
      setAllChecked(newChecks.every(Boolean));
   };

   const handlePhoneChange = (event) => {
      // 입력한 값
      const phoneNum = event.target.value;

      // 숫자만 남기고 포맷팅
      const formattedPhone = phoneNum
            .replace(/[^0-9]/g, "") // 숫자만 남기기
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3") // 2~3자리 + 3~4자리 + 4자리
            .replace(/^(\d{2})(\d{4})(\d{4})$/, "$1-$2-$3") // 2자리 + 4자리 + 4자리
            .replace(/^(\d{3})(\d{4})$/, "$1-$2") // 3자리 + 4자리
            .replace(/^(\d{2})(\d{4})$/, "$1-$2"); // 2자리 + 4자리

      // 포맷팅된 전화번호의 길이가 13자리를 초과하지 않도록 제한
      if (formattedPhone.replace(/-/g, "").length <= 11) { // 숫자만 기준으로 11자리 체크
            setPhone(formattedPhone); // 상태 업데이트
      }
   };

   // 모든 필드의 유효성을 검사하여 버튼 활성화 여부 결정
   useEffect(() => {
      // 비밀번호 유효성 검사
      const isPasswordValidLength = password.length >= 8; // 비밀번호 길이 체크 (예: 8자 이상)
      const isPasswordMatch = password === passwordCheck; // 비밀번호 일치 체크

      // 필수 입력 필드 체크
      const isGenderChecked = document.querySelector('input[name="u_gen"]:checked') !== null; // 성별 체크
      const isStartDateChecked = !!startDate; // 생년월일 체크
      const areAllOptionsChecked = optionChecks.every(checked => checked); // 모든 체크박스 체크 여부

      // 이메일 유효성 검사
      const fullEmail = `${email}@${emailBack}`; // 전체 이메일 주소 생성
      const isEmailValid = emailRegex.test(fullEmail); // 전체 이메일 주소로 유효성 검사
      const isEmailBackFilled = isEmailBackReadOnly ? emailBack.length > 0 : true; // readOnly일 때는 emailBack이 비어있어도 됨

      // 이름과 전화번호 유효성 검사 추가
      const isNameValid = name.trim() !== ""; // 이름이 비어있지 않은지 체크
      const isPhoneValid = phone.replace(/-/g, "").length >= 10; // 전화번호가 10자리 이상인지 체크
      

      // 모든 조건을 만족할 때 버튼 활성화
      const isFormValid = isPasswordValidLength && isPasswordMatch && isGenderChecked && isStartDateChecked && 
                        areAllOptionsChecked && isEmailValid && isEmailBackFilled && isNameValid && isPhoneValid;

      setIsFormValid(isFormValid);

      // 각 조건의 값을 콘솔에 출력
      console.log('==========================');
      console.log('Password Valid Length:', isPasswordValidLength);
      console.log('Password Match:', isPasswordMatch);
      console.log('Gender Checked:', isGenderChecked);
      console.log('Start Date Checked:', isStartDateChecked);
      console.log('All Options Checked:', areAllOptionsChecked);
      console.log('Email Valid:', isEmailValid);
      console.log('Email Back Filled:', isEmailBackFilled);
      console.log('Name Valid:', isNameValid);
      console.log('Phone Valid:', isPhoneValid);
      console.log('==========================');

   }, [email, emailBack, isEmailBackReadOnly, emailRegex, password, passwordCheck, gender, startDate, optionChecks, name, phone]);
   
   const joinTry = (event) => {
      event.preventDefault(); // 기본 폼 제출 방지
      // 회원가입 처리 로직 추가
      const formData = {
         userId,
         password,
         phone,
         gender,
         birthDate: startDate,
      };

      console.log('회원가입 데이터:', formData);
      // 여기서 API 호출 등을 통해 회원가입을 처리할 수 있습니다.
   };

   return (
      <>
         <div className={styles.join_container}>
            <div className={styles.box}>

               <JoinCategory />
               
               <form action="/emailchk" method="post">
                  <h2 className={styles.jointxt}>회원가입 {expertId}</h2>
                  <h3 className={styles.h3}>
                     아이디 <label className={styles.star}>*</label>
                  </h3>
                  <div className={styles.idflex}>
                  <input 
                     className={`${styles.joininput} ${styles.uid}`} 
                     type="text" 
                     name="u_id"
                     placeholder="아이디를 입력해주세요."
                     value={userId}
                     onChange={handleIdChange} // 입력값 상태 업데이트
                     required
                  />
                  <button 
                     className={styles.id_chk}
                     type="button"
                     onClick={handleIdCheck} // 중복 확인 버튼 이벤트
                  >
                     중복 확인
                  </button>
                  </div>
                  <label 
                     className={styles.idchkresult}
                     style={{
                       color: isIdAvailable ? "green" : "red", // 결과에 따라 색상 변경
                     }}
                  >
                     {idCheckResult}
                  </label>

                  <h3 className={styles.h3}>
                     비밀번호 <label className={styles.star}>*</label>
                  </h3>
                  <input 
                     className={`${styles.joininput} ${styles.width100} ${styles.pwid}`} 
                     type="password" 
                     name="u_pw"
                     placeholder="비밀번호를 입력해주세요."
                     value={password}
                     onChange={handlePasswordChange}
                     required 
                  />
                  <span className={styles.pwtest} style={{ color: isPasswordValid ? "#333" : "#333" }}>
                     {passwordMessage}
                  </span>


                  <h3 className={styles.h3}>
                     비밀번호 확인 <label className={styles.star}>*</label>
                  </h3>
                  <input 
                     className={`${styles.joininput}  ${styles.width100} ${styles.pwchkid}`} 
                     type="password" 
                     name="u_pwchk" 
                     placeholder="비밀번호를 다시 입력해주세요."
                     value={passwordCheck}
                     onChange={handlePasswordCheckChange}
                     required 
                  /> 

                  <span
                     className={styles.pwOK}
                     style={{ color: isPasswordMatch ? "green" : "red" }}
                  >
                     {passwordMatchMessage}
                  </span>



                  <h3 className={styles.h3}>
                     이름 <label className={styles.star}>*</label>
                  </h3>
                  <input 
                     className={`${styles.joininput}  ${styles.width100}`} 
                     type="text" 
                     name="u_na"
                     placeholder="이름을 입력해주세요." 
                     required 
                     value={name} // 상태에 따라 값 설정
                     onChange={(e) => setName(e.target.value)} // 이름 입력 시 상태 업데이트
                  />

                  <h3 className={styles.h3}>
                     닉네임 <label className={styles.star}>*</label>
                  </h3>
                  <input 
                     className={`${styles.joininput}  ${styles.width100}`} 
                     type="text" 
                     name="u_na"
                     placeholder="닉네임을 입력해주세요." 
                     required 
                     value={name} // 상태에 따라 값 설정
                     onChange={(e) => setName(e.target.value)} // 이름 입력 시 상태 업데이트
                  />

                  <h3 className={styles.h3}>
                     휴대전화
                  </h3>
                  <input 
                     className={`${styles.joininput}  ${styles.width100}`} id="phone" 
                     type="text" 
                     name="u_phone" 
                     placeholder="-없이 입력해주세요." 
                     required 
                     value={phone} // 상태에 따라 값 설정
                     onChange={handlePhoneChange} // 입력값 변경 시 핸들러 호출
                  />
                  <h3 className={styles.h3}>
                     성별 <label className={styles.star}>*</label>
                  </h3>
                  <div className={styles.gen}>
                     <label>
                        <input 
                           type='radio'
                           name='u_gen'
                           value="male"
                           checked={gender === 'male'}
                           onChange={handleChange}
                        /> 남성 
                     </label>
                     <label>
                        <input
                           type='radio'
                           name='u_gen'
                           value="female"
                           checked={gender === 'female'}
                           onChange={handleChange}
                        /> 여성
                     </label>
                     <label>
                        <input
                           type='radio'
                           name='u_gen'
                           value="etc"
                           checked={gender === 'etc'}
                           onChange={handleChange}
                        /> 기타
                     </label>
                  </div>
                  <h3 className={styles.h3}>
                     생년월일 <label className={styles.star}>*</label>
                  </h3>
                  <div className={`${styles.bir} ${common.date_container}`}>
                     <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                           setStartDate(date);
                           setInputValue(date ? date.toLocaleDateString('ko-KR') : '');
                        }}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="YYYY-MM-DD"
                        onChangeRaw={(e) => e.preventDefault()} // 입력 차단
                        customInput={
                           <input
                              type="text"
                              value={inputValue}
                              onFocus={(e) => e.target.blur()} // 포커스 시 입력 방지
                           />
                        }
                        className={`${styles.birth}  ${styles.width100}`}
                     />
                     <span class="material-icons">calendar_month</span>
                  </div>
                  <div className={`${styles.emailsec}  ${styles.width100}`}>
                     <h3 className={styles.h3}>
                        이메일 <label className={styles.star}>*</label>
                     </h3>
                     <div className={styles.flexbox}>
                     <input 
                        className={styles.email} 
                        type="text" 
                        name="u_em"
                        value={email}
                        onChange={handleEmailChange} 
                        placeholder="이메일을 입력해주세요." 
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                     />

                     <span className={styles.com}>@</span>

                     <input 
                        className={`${styles.email} ${styles.emailback}`} 
                        type="text"
                        name="u_emailback" 
                        value={emailBack}
                        onChange={(e) => setEmailBack(e.target.value)}
                        placeholder="이메일을 입력해주세요." 
                        required
                        readOnly={isEmailBackReadOnly} // 이 부분도 readOnly 상태에 따라 비활성화
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
                     />

                     <select 
                        name="u_emailbacks" 
                        className={styles.emailselect}
                        onChange={(e) => handleEmailBackChange(e.target.value)}
                     >
                        <option value="null">선택하세요</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="nate.com">nate.com</option>
                        <option value="hanmail.net">hanmail.net</option>
                        <option value="yahoo.com">yahoo.com</option>
                        <option value="select">직접 입력</option>
                     </select>
                     </div>
                  </div>
                  <h3 className={styles.h3}>
                     첨부파일 <label className={styles.star}>*</label>
                  </h3>
                  <div className={`${styles.bir} ${styles.date_container}`}>
                     <div className={styles.filebox}>
                        <input
                           className={styles.uploadName}
                           value={fileName}
                           placeholder="파일찾기를 클릭해서 첨부파일을 등록해주세요."
                           readOnly
                        />
                        <label htmlFor="file">파일찾기</label>
                        <input
                           type="file"
                           id="file"
                           name="file_name"
                           onChange={handleFileChange} // 파일 변경 시 핸들러 호출
                        />
                     </div>
                  </div>
                  <span 
                     className={styles.attachmentresult}
                  >
                     전자정부 서비스에서 발급된 보건복지부 소속 의료계 면허증 사본을 첨부하여 주시기 바랍니다.
                  </span>
                  <label>
                     <div className={`${styles.option} ${styles.width100}`}>
                        <input 
                           type="checkbox"
                           className={styles.allchk} 
                           checked={allChecked}
                           onChange={handleAllCheck} 
                        />
                        <span className={styles.optiontxt}>약관 전체 동의하기</span>
                     </div>
                  </label>
                  {optionChecks.map((checked, index) => (
                        <label key={index}>
                           <div className={`${styles.optiondetail} ${styles.width100}`}>
                                 <input
                                    className={styles.optionchk}
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => handleOptionCheck(index)}
                                 />
                                 <span className={styles.optiontxt}>
                                    {index < 2 ? '(필수)' : '(선택)'} 이용약관에 동의합니다.
                                 </span>
                           </div>
                        </label>
                     ))}

                  <button 
                     className={`${styles.joinbtn} ${styles.width100}`} 
                     onClick={joinTry} // joinTry 함수 호출
                     disabled={!isFormValid} // 버튼 활성화 상태
                     style={{ backgroundColor: isFormValid ? "#4553AD" : "#CCCCCC", color: 
                        isFormValid ? "#FFFFFF" : "#666666" }} // 배경색 및 텍스트 색 변경
                  >
                     회원가입
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}

export default JoinExpert;