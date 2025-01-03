import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import commons from '../../styles/common.module.css';
import board from '../../styles/boardcommon.module.css';
import styles from '../../styles/qna/qnalist.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

function QnaList(props) {
   const { mainTitle, subTitle } = useDocumentTitle();

   const qnaDetailBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/qnadetail'; // 클릭 시에만 이동
   };

   const qnaWriteBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/qnawrite'; // 클릭 시에만 이동
   };

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         <div className={styles.qnalist__container__box}>
            <p className={styles.qnalist__contents__title}>약지기에 도움을 주시는 전문가 분들을 소개합니다.</p>

            <div className={styles.qnalist__container__profile}>
               <Swiper Autoplay
                  modules={[Autoplay, Pagination, Navigation]} // 사용하는 모듈
                  className={styles.swiperbg}
                  autoplay={{
                        delay: 3000, // 3초마다 슬라이드 변경
                        disableOnInteraction: false, // 사용자 조작 시 자동 재생 유지
                  }}
                  loop={true} // 무한 반복 추가src/pages/main/SwiperSlider.jsx
                  spaceBetween={30} // 슬라이드 간 간격
                  slidesPerView={6} // 한 화면에 보여줄 슬라이드 갯수
                  navigation={{
                     nextEl: `.${styles.next}`,
                     prevEl: `.${styles.prev}`,
                  }} // 네비게이션 화살표 추가
                  breakpoints={{ 
                     360: { slidesPerView: 1, spaceBetween: 30 },
                     480: { slidesPerView: 2, spaceBetween: 30 },
                     768: { slidesPerView: 3, spaceBetween: 30 },
                     1200: { slidesPerView: 6, spaceBetween: 30 },
                  }} // 반응형
               >
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff01.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>의사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">stethoscope</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff02.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>약사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">medication</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff03.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>의사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">stethoscope</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff04.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>약사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">medication</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff05.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>약사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">medication</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff06.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>약사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">medication</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff07.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>약사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">medication</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.qnalist__profile__box}>
                        <img src="/images/qnalist/medical_staff08.jpg"
                        alt="이미지" 
                        className={styles.qnalist__profile__image} />
                        <div className={styles.profile__text__box}>
                           <ul>
                              <li>
                                 <p>고영희</p>
                                 <em>의사</em>
                              </li>
                              <li>
                                 <div className={styles.qnalist__profile__logo__box}>
                                    <span class="material-symbols-outlined">stethoscope</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                  </SwiperSlide>
               {/* 사용자 정의 버튼 (넘기는 버튼) */}
               <div className={styles.prev}>
                  <div className="material-icons">arrow_back</div>
               </div>
               <div className={styles.next}>
                  <div className="material-icons">arrow_forward</div>
               </div>
               </Swiper>
            </div>
            
         
            <div className={commons.common__boradsearch__container}>   
               <ul className={commons.common__boradsearch__ul}>
                  <li>총 <span>16</span>건</li>
                  <li>
                     <form action="">
                        <div className={commons.common__searchbar__box}>
                           <input type="text" className={commons.common__search__input} placeholder="검색어를 입력해주세요" />
                           <span className="material-icons">search</span>
                        </div>
                     </form>
                  </li>
               </ul>
            </div> 

            <div className={styles.qnalist__container__list__table}>
               <table className={styles.qnalist__list_table}>
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>처리상태</th>
                        <th>등록일</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr onClick={qnaDetailBtn}>
                        <td>10</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_waiting}>
                                 답변대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>9</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_waiting}>
                                 답변대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>8</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_waiting}>
                                 답변대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>7</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_waiting}>
                                 답변대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>6</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_waiting}>
                                 답변대기
                           </div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>5</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_completed}>답변완료</div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>4</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_completed}>답변완료</div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>3</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_completed}>답변완료</div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>2</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_completed}>답변완료</div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                     <tr onClick={qnaDetailBtn}>
                        <td>1</td>
                        <td><p>칼퇴 못하는 나는 오늘도 눈물을 흘리네</p></td>
                        <td>
                           <div className={styles.qnalist__status_completed}>답변완료</div>
                        </td>
                        <td>2024.00.00</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div className={board.board_button_box}>
               <ul className={board.two}>
                  <li>
                  </li>
                  <li>
                     <Link onClick={qnaWriteBtn}>글쓰기</Link>
                  </li>
               </ul>
            </div>

            {/* paging 영역 start */}
            <div>
               <ul className={commons.paging_num_ul}>
                  <li className="material-icons prev">keyboard_double_arrow_left</li>
                  <li className="material-icons prev">chevron_left</li>
                  <li className={commons.active}>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li className="material-icons next">chevron_right</li>
                  <li className="material-icons next">keyboard_double_arrow_right</li>
               </ul>
            </div>
            {/* paging 영역 end */}
         </div>
      </>
   );
}

export default QnaList;