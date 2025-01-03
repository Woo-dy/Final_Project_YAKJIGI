import commons from '../../styles/common.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import React, { useState } from 'react';
import styles from '../../styles/mypage/usermyinfo.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyBasicUserInfo(props) {
   const { mainTitle, subTitle } = useDocumentTitle();
      
   // 유저 데이터    
   const [userData, setUserData] = useState({
      userId: '',
      userNickName: '춘식이',
      userProfile: '프로필 이름',
      username: '김춘식이',
      userGender: '남자',
      userPhone: '',
      userEmail: '',
      imagePath: null
   });
   
   // 수정전 데이터    
   const [prevData, setPrevData] = useState({
      userNickName: '춘식이',
      userProfile: '프로필 이름',
      username: '김춘식이',
      userGender: '남자',
      userPhone: '',
      imagePath: null
   });
   
   // 이미지 파일
   const [imageFile, setImageFile] = useState(null);
   
   // 수정중인 상태
   const [isEditingNickName, setIsEditingNickName] = useState(false);
   const [isEditingProfile, setIsEditingProfile] = useState(false);
   const [isEditingName, setIsEditingName] = useState(false);
   const [isEditingGender, setIsEditingGender] = useState(false);
   const [isEditingPhone, setIsEditingPhone] = useState(false);
   const [isEditingOther, setIsEditingOther] = useState(false);
   
   // 페이지 이동
   const navigator = useNavigate();
   
   // 렌더링시 값 가져옴 
   /* useEffect(() => {
         const userData = async () => {
            try {
               const response = await axios.get('백엔드 API 주소');
               const data = response.data;
               
               setUserData({
                     userId: data.user_id,          
                     userNickName: data.user_nickname, 
                     userProfile: data.user_profile,    
                     username: data.username,       
                     userGender: data.user_gender,  
                     userPhone: data.user_phone,    
                     userEmail: data.user_email     
               });
               setPrevData({
                     prevNickName: data.user_nickname, 
                     prevProfile: data.user_profile,        
                     prevGender: data.user_gender,      
                     prevPhone: data.user_phone 
               });
            } catch (error) {
               console.error('데이터 API 가져오는중 문제:', error);
            }
         };
         userData();
   }, []); */
   
   // 닉네임 수정상태
   const toggleEditingNickName = () => {
      if (!isEditingOther || isEditingNickName) {
         setIsEditingNickName(prev => !prev);
         setIsEditingOther(prev => !prev);
      }
   };
   
   // 이미지 수정상태
   const toggleEditingProfile = () => {
      if (!isEditingOther || isEditingProfile) {
         setIsEditingProfile(prev => !prev);
         setIsEditingOther(prev => !prev);
      }
   };
   
   // 이름 수정상태
   const toggleEditingName = () => {
      if (!isEditingOther || isEditingName) {
         setIsEditingName(prev => !prev);
         setIsEditingOther(prev => !prev);
      }
   };
   
   // 성별 수정상태
   const toggleEditingGender = () => {
      if(!isEditingOther || isEditingGender){
         setIsEditingGender(prev => !prev);
         setIsEditingOther(prev => !prev);
      }
   };
   
   // 전화번호 수정상태
   const toggleEditingPhone = () => {
      if (!isEditingOther || isEditingPhone) {
         setIsEditingPhone(prev => !prev);
         setIsEditingOther(prev => !prev);
      }
   };
   
   // 취소버튼
   const editingCancel = () => {
      setUserData(prevData);
      setIsEditingNickName(false);
      setIsEditingGender(false);
      setIsEditingOther(false);
      setIsEditingPhone(false);
      setIsEditingProfile(false);
      setIsEditingName(false);
   };
   
   // 성별 수정
   const genderChange = (event) => {
      if(isEditingGender){
         setUserData(prev => ({
                  ...prev,
            userGender: event.target.value
         }));
      }
   };
   
   // 전화번호 수정
   const phoneChange = (event) => {
      if(isEditingPhone){
         setUserData(prev => ({
            ...prev, 
            userPhone: event.target.value }));
            
      }
   };
   
   // 닉네임 수정
   const nickNameChange = (event) => {
      if(isEditingNickName){
         setUserData(prev => ({
            ...prev, 
            userNickName: event.target.value }));
      }
   };
   
   // 이름 수정
   const nameChange = (event) => {
      if(isEditingName){
         setUserData(prev => ({
            ...prev, 
            username: event.target.value }));
      }
   };
   
   // 이미지 수정
   const profileChange = (event) => {
      if(isEditingProfile){
         const files = event.target.files;
         if(files && files.length > 0){
            setImageFile(files[0]);
            setUserData(prev=>({
                  ...prev,
                  userProfile: files[0].name}));
            profileScreen(files[0]);
         }
      }
   };
   
   // 이미지 화면에 출력
   const profileScreen = (file) => {
      if(file){
         const fileReader = new FileReader();
         fileReader.onloadend = () => {
            setUserData(prev => ({
                  ...prev,
                  imagePath: fileReader.result}));
         };
         fileReader.readAsDataURL(file);
      }
   }
   
   // 파일 찾기
   const fileClick = () => {
      document.getElementById('fileInput').click();
   };
   
   // 성별 저장
   const submitGender = async (event) => {
      // 기본 실행 방지
      event.preventDefault();
      console.log(prevData.userGender);   
      try {
         const response = await axios.patch('백엔드 API 주소', {
            gender: userData.userGender
         });
         // 서버로 전송된 후 처리
         if (response.status === 200) {
            alert('성별이 업데이트되었습니다.');
            // 이전값 저장
            setPrevData(prev => ({
                  ...prev,
                  userGender: userData.userGender
            }));
            toggleEditingGender();
         }
      } catch (error) {
         console.error('서버와의 통신 중 오류 발생: 성별 저장', error);
      }
   };
   
   // 전화번호 저장
   const submitPhone = async (event) => {
      // 기본 실행 방지
      event.preventDefault();
      
      try {
         const response = await axios.patch('백엔드 API 주소', {
            user_phone: userData.userPhone,
         });
         // 서버로 전송된 후 처리
         if (response.status === 200) {
            alert('전화번호가 업데이트되었습니다.');
            // 이전값 저장
            setPrevData(prev => ({
                  ...prev,
                  userPhone: userData.userPhone
            }));
            toggleEditingPhone();
         }
      } catch (error) {
         console.error('서버와의 통신 중 오류 발생: 전화번호 저장', error);
      }
   };
   
   
   // 닉네임 저장
   const submitNickName = async (event) => {
      // 기본 실행 방지
      event.preventDefault();
      
      try {
         const response = await axios.patch('백엔드 API 주소', {
            user_nickname: userData.userNickName,
         });
         // 서버로 전송된 후 처리
         if (response.status === 200) {
            alert('닉네임이 업데이트되었습니다.');
            
            // 이전값 저장
            setPrevData(prev => ({
                  ...prev,
                  userNickName: userData.userNickName
            }));
            toggleEditingNickName();
         }
      } catch (error) {
         console.error('서버와의 통신 중 오류 발생: 닉네임 저장', error);
      }
   };
   
   
   // 닉네임 저장
   const submitName = async (event) => {
      // 기본 실행 방지
      event.preventDefault();
      
      try {
         const response = await axios.patch('백엔드 API 주소', {
            user_name: userData.username,
         });
         // 서버로 전송된 후 처리
         if (response.status === 200) {
            alert('닉네임이 업데이트되었습니다.');
            
            // 이전값 저장
            setPrevData(prev => ({
                  ...prev,
                  username: userData.username
            }));
            toggleEditingName();
         }
      } catch (error) {
         console.error('서버와의 통신 중 오류 발생: 닉네임 저장', error);
      }
   };
   
   // 프로필이미지 저장
   const submitProfile = async (event) => {
      // 기본 실행 방지
      event.preventDefault();
      if(imageFile){
         const formData = new FormData();
         formData.append('profile', imageFile);
         try {
            const response = await axios.patch('백엔드 API 주소', formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data'
                  }
            });
            // 서버로 전송된 후 처리
            if (response.status === 200) {
                  alert('프로필 이미지가 업데이트되었습니다.');
                  // 이전값 저장
                  setPrevData(prev => ({
                     ...prev,
                     userProfile: userData.userProfile,
                     imagePath: userData.imagePath
                  }));
                  toggleEditingProfile(); 
            }
         } catch (error) {
            console.error('서버와의 통신 중 오류 발생: 이미지 저장', error);
         }
      }
   };
   
   // 비밀번호 변경
   const passwordChange = () => {
      navigator('/mybasicuserinfopwchange');
   };

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />
         
         <div className={styles.container}>
            <ul className={styles.info__container}>
               <li className={styles.info__title}>
                  아이디
               </li>
               <li className={styles.info__content}>
                  <input className={styles.input_id} readOnly value={"user_id"}/* {`${data.user_id}`} */ />
               </li>
               <li className={styles.info__title}>
                  닉네임
               </li>
               <li className={styles.info__content}>
                  <form onSubmit={submitNickName}>
                     <input className={styles.input_id} value={userData.userNickName} onChange={nickNameChange} readOnly={!isEditingNickName} />
                     {/* 수정중일때 저장/취소 버튼 아닐때 변경하기 버튼 */}
                     {isEditingNickName ?
                        <>
                           <div className={styles.input_submit_cancel}>
                              <button type="submit" className={styles.input_submit}>저장</button>
                              <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
                           </div>
                        </> :
                        <button className={styles.input_edit} onClick={toggleEditingNickName}>변경하기</button>
                     }
                  </form>
               </li>
               <li className={styles.info__title}>
                  프로필 이미지
               </li>
               <li className={styles.info__content}>
                  <div className={styles.input_profile_div}>
                     <div className={styles.input_image_div}>
                        <img className={styles.input_profile_image} src={userData.imagePath || './images/sub104/tree-3.jpg'} alt='./images/sub104/tree-3.jpg' />
                     </div>
                     <div className={styles.input_info_div}>
                        <span className={styles.input_span}>· 나를 잘 표현할 이미지를 등록해 주세요!</span> 
                        <span className={styles.input_span}>· 150 X 150px 이상의 이미지 사용을 권장합니다</span> 
                        <span className={styles.input_span}>· 사진은 10MB 미만의 이미지를 등록해 주세요</span>
                     </div>
                  </div>
                     
                  <form onSubmit={submitProfile}>
                     <input type='text' className={styles.input_profile} readOnly value={userData.userProfile} />
                     <input id='fileInput' type="file" className={styles.input_profile_none} onChange={profileChange} />
                     {/* 수정중일때 저장/취소 버튼 아닐때 변경하기 버튼 */}
                     {isEditingProfile ? (
                        <>
                           <button onClick={fileClick} className={styles.input_file_find}>파일 찾기</button>
                           <div className={styles.input_submit_cancel}>
                              <button type="submit" className={styles.input_submit}>저장</button>
                              <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
                           </div>
                        </>
                     ) : (
                        <button className={styles.input_edit} onClick={toggleEditingProfile}>변경하기</button>
                     )}
                  </form>
               </li>
               <li className={styles.info__title}>
                  이름
               </li>
               <li className={styles.info__content}>
                  <form onSubmit={submitName}>
                     <input className={styles.input_id} value={userData.username} onChange={nameChange} readOnly={!isEditingName} />
                     {/* 수정중일때 저장/취소 버튼 아닐때 변경하기 버튼 */}
                     {isEditingName ?
                        <>
                           <div className={styles.input_submit_cancel}>
                              <button type="submit" className={styles.input_submit}>저장</button>
                              <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
                           </div>
                        </> :
                        <button className={styles.input_edit} onClick={toggleEditingName}>변경하기</button>
                     }
                  </form>
               </li>
               
               <li className={styles.info__title}>
                  성별
               </li>
               <li className={styles.info__content}>
                  <form onSubmit={submitGender}>
                     <div className={styles.input_label_div}>
                        <label className={styles.input_label}>
                           <input type="radio" className={styles.input_radio} value={"남자"} name='gender' checked={userData.userGender === '남자'} onChange={genderChange} /> 남자
                        </label>
                        <label className={styles.input_label}>
                           <input type="radio" className={styles.input_radio} value={"여자"} name='gender' checked={userData.userGender === '여자'} onChange={genderChange} /> 여자
                        </label>
                        <label className={styles.input_label}>
                           <input type="radio" className={styles.input_radio} value={"기타"} name='gender' checked={userData.userGender === '기타'} onChange={genderChange} /> 기타
                        </label>
                     </div>
                     {/* 수정중일때 저장/취소 버튼 아닐때 변경하기 버튼 */}
                     {isEditingGender ? 
                        <>
                           <div className={styles.input_submit_cancel}>
                              <button type='submit' className={styles.input_submit}>저장</button>
                              <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
                           </div>
                        </> : 
                        <button className={styles.input_edit} onClick={toggleEditingGender}>변경하기</button>}
                  </form>
               </li>
               
               <li className={styles.info__title}>
                  전화번호
               </li>
               <li className={styles.info__content}>
                  <form onSubmit={submitPhone}>
                     <input className={styles.input_id} value={userData.userPhone} onChange={phoneChange} />
                     {/* 수정중일때 저장/취소 버튼 아닐때 변경하기 버튼 */}
                     {isEditingPhone ?
                        <>
                           <div className={styles.input_submit_cancel}>
                              <button type="submit" className={styles.input_submit}>저장</button>
                              <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
                           </div>
                        </> : 
                        <button className={styles.input_edit} onClick={toggleEditingPhone}>변경하기</button>
                     }
                  </form>
               </li>
               
               <li className={styles.info__title}>
                  비밀번호
               </li>
               <li className={styles.info__content__flex}>
                  <span className={styles.input_span}>비밀번호를 변경하려면 옆의 변경하기 버튼을 눌러주세요</span>
                  <button className={styles.input_edit} onClick={passwordChange}>변경하기</button>
               </li>
               
               <li className={styles.info__title}>
                  이메일
               </li>
               <li className={styles.info__content}>
                  <input className={styles.input_id} readOnly value={"user_email"}/* {`${data.user_email}`} */ />
               </li>
            </ul>
         </div>
      </>
   );
}

export default MyBasicUserInfo;