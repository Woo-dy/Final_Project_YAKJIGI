import React from 'react';
import styles from '../../styles/account/idfindok.module.css';
import { Link } from 'react-router-dom';

function IdFindOk({ ids }) {
   // ids 값이 없을 때 임의로 기본값을 설정
   const defaultIds = ids && ids.length > 0 ? ids : ['기본 값 1', '기본 값 2', '기본 값 3'];

   return (
      <>
         <div className={styles.idfind_container}>
            <p className={styles.titletxt}>아이디 찾기</p>

            {/* {ids.size === 0 ? (
               <p>No items found</p>
            ) : (
               <p>There are {ids.size} items</p>
            )} */}
         
            <h2>등록된 아이디가 없습니다.</h2>
            <div className={styles.gobutton}>
               <Link to="/login" className={`${styles.join} ${styles.go}`}>
                  로그인으로 가기
               </Link>
               <Link to="/" className={`${styles.main} ${styles.go}`}>
                  메인화면으로 가기
               </Link>
            </div>
                     
                     
                     
            <table className={styles.table}>
               <thead className={styles.thead}>
                  <tr>
                     <th>번호</th>
                     <th>아이디</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>번호</td>
                     <td>아이디</td>
                  </tr>
                  {defaultIds.map((k, index) => (
                     <tr className={styles.tr} key={index}>
                        <td>{index + 1}</td>  {/* status.count에 해당하는 부분은 index + 1 */}
                        <td>{k}</td>  {/* k는 배열의 각 요소 */}
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className={styles.gobutton}>
               <Link to="/login" className={`${styles.join} ${styles.go}`}>
                  로그인으로 가기
               </Link>
               <Link to="/" className={`${styles.main} ${styles.go}`}>
                  메인화면으로 가기
               </Link>
            </div>
         </div>
      </>
   );
}

export default IdFindOk;