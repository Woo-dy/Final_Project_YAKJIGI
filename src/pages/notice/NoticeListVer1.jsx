import React, { useState } from 'react';

import commons from '../../styles/common.module.css';
import styles from '../../styles/notice/noticelist.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

function NoticeListVer1(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   // 더미 데이터 (실제 API 연동 시 교체)
   const dummyData = Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      title: `소공원 정비사업 시행 안내 ${i + 1}`,
      content: `여기는 ${i + 1}번 게시글의 상세 내용입니다.`,
      date: `2024.00.${String(i + 1).padStart(2, "0")}`,
      author: `작성자${i + 1}`,
      views: Math.floor(Math.random() * 100),
      fileName: i % 3 === 0 ? `file${i + 1}.png` : null,
   }));

   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;
   const totalPages = Math.ceil(dummyData.length / itemsPerPage);

   // 현재 페이지에서 표시할 데이터
   const startIndex = (currentPage - 1) * itemsPerPage;
   const currentItems = dummyData.slice(startIndex, startIndex + itemsPerPage);

   // 페이지 변경 핸들러
   const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
      }
   };

   // 페이지 번호 목록 생성
   const getDisplayedPages = () => {
      const maxPagesToShow = 5;
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
   };

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>
         
         <div className={commons.common__boradsearch__container}>
            <ul className={commons.common__boradsearch__ul}>
               <li>
                  총 <span>{dummyData.length}</span>건
               </li>
               <li>
                  <form action="">
                     <div className={commons.common__searchbar__box}>
                     <input
                        type="text"
                        className={commons.common__search__input}
                        placeholder="검색어를 입력해주세요"
                     />
                     <span className="material-icons">search</span>
                     </div>
                  </form>
               </li>
               </ul>

               <div className={styles.noticelist__content_container}>
                  <div className={styles.noticelist__content_main}>
                     <table className={styles.noticelist__table}>
                        <thead>
                           <tr className={`${styles.noticelist__tr} ${styles.noticelist__gong}`}>
                              <td className={styles.noticelist__cell1}>
                                 <p>번호</p>
                              </td>
                              <td className={styles.noticelist__cell2}>
                                 <p>제목</p>
                              </td>
                              <td className={styles.noticelist__cell3}>
                                 <p>작성일</p>
                              </td>
                           </tr>
                        </thead>
                        <tbody>
                        {currentItems.map((item) => (
                           <tr 
                              className={styles.noticelist__tr} 
                              key={item.id}
                              onClick={() => window.location.href = `/noticedetail/${item.id}`} // 클릭 시 상세 페이지로 이동
                           >
                              <td className={styles.noticelist__cell1}>{item.id}</td>
                              <td className={styles.noticelist__cell2}>
                              <p>{item.title}</p>
                              </td>
                              <td className={styles.noticelist__cell3}>{item.date}</td>
                           </tr>
                        ))}
                        </tbody>
                     </table>

                     <button>
                        <Link to="/noticewrite">글쓰기</Link>
                     </button>

                     {/* 페이징 영역 */}
                     <div>
                        <ul className={commons.paging_num_ul}>
                           <li
                              className={`material-icons prev ${currentPage === 1 ? 'disabled' : ''}`}
                              onClick={() => handlePageChange(1)}
                           >
                              keyboard_double_arrow_left
                           </li>
                           <li
                              className={`material-icons prev ${currentPage === 1 ? 'disabled' : ''}`}
                              onClick={() => handlePageChange(currentPage - 1)}
                           >
                              chevron_left
                           </li>
                           {getDisplayedPages().map((page) => (
                           <li
                              key={page}
                              className={`${commons.paging_num} ${currentPage === page ? commons.active : ''}`}
                              onClick={() => handlePageChange(page)}
                           >
                              {page}
                           </li>
                           ))}
                           <li
                              className={`material-icons next ${currentPage === totalPages ? 'disabled' : ''}`}
                              onClick={() => handlePageChange(currentPage + 1)}
                           >
                              chevron_right
                           </li>
                           <li
                              className={`material-icons next ${currentPage === totalPages ? 'disabled' : ''}`}
                              onClick={() => handlePageChange(totalPages)}
                           >
                              keyboard_double_arrow_right
                           </li>
                        </ul>
                     </div>
                     {/* 페이징 영역 끝 */}
                  </div>
               </div>
            </div>
      </>
   );
}

export default NoticeListVer1;