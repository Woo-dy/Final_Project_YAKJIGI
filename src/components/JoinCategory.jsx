import React, { useState } from 'react';
import styles from '../styles/account/join.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function JoinCategory(props) {
   const navigate = useNavigate();
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const initialId = queryParams.get('id') || 'general'; // 기본값을 'general'로 설정

   const [generalId, setGeneralId] = useState(initialId);
   const [expertId, setExpertId] = useState(initialId);


   const JoinGeneralBtn = () => {
      setGeneralId('general');
      setExpertId(''); // expert 비활성화
      navigate('/joingeneral?id=general'); // 페이지 이동
   };

   const JoinExpertBtn = () => {
      setExpertId('expert');
      setGeneralId(''); // general 비활성화
      navigate('/joinexpert?id=expert'); // 페이지 이동
   };


   return (
      <>
         <ul className={styles.join_category}>
            <li 
               className={generalId === 'general' ? styles.activebtn : ''}
               onClick={JoinGeneralBtn}
               onMouseEnter={() => setExpertId('expert')} // hover 시 expert 활성화
               onMouseLeave={() => setExpertId('')} // hover 종료 시 expert 비활성화
            >
               일반 회원가입
            </li>
            <li
               className={expertId === 'expert' ? styles.activebtn : ''}
               onClick={JoinExpertBtn}
            >
               전문가 회원가입
            </li>
         </ul>
      </>
   );
}

export default JoinCategory;