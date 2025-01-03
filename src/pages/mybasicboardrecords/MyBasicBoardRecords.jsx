import commons from '../../styles/common.module.css';
import board from '../../styles/boardcommon.module.css';
import styles from '../../styles/mypage/mybasicboardrecords.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicBoardRecords(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const basicRecordsDetailBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardrecordsdetail'; // 클릭 시에만 이동
   };

   const basicRecordsWriteBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardrecordswrite'; // 클릭 시에만 이동
   };

   // 더미 데이터 ~ 추후 실제 DB로 대체 
   // 반응형을 위해 12개 출력 
   const records = Array(12).fill({
      date: "2024년 00월 00일",
      phar: "OO 약국",
      image: "/images/mybasicboardrecords/records_1.jpg",
   });

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />
         
         <section className={styles.mybasicboardrecords_container}>
               <div className={styles.records_grid}>
                  {records.map((record, index) => (
                     <div className={styles.records_item} key={index} onClick={basicRecordsDetailBtn}>
                           <img
                              src={record.image}
                              alt={`Record from ${record.date}`}
                              className={styles.record_img}
                           />
                           <div className={styles.records_text}>
                              <p>{record.date}</p>
                              <p>{record.phar}</p>
                           </div>
                     </div>
                  ))}
               </div>
            

            <div className={board.board_button_box}>
               <ul className={board.two}>
                  <li>
                  </li>
                  <li>
                     <Link onClick={basicRecordsWriteBtn}>글쓰기</Link>
                  </li>
               </ul>
            </div>

               <ul className={styles.paging_num_ul}>
                  <li className={`material-icons ${styles.icon}`}>keyboard_double_arrow_left</li>
                  <li className={`material-icons ${styles.icon}`}>chevron_left</li>
                  <li className="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li className={`material-icons ${styles.icon}`}>chevron_right</li>
                  <li className={`material-icons ${styles.icon}`}>keyboard_double_arrow_right</li>
               </ul>
         </section>
      </>
   );
}

export default MyBasicBoardRecords;