
// import commons from '../../styles/common.module.css';
import styles from '../../styles/notice/noticedetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function NoticeDetailVer1(props) {
   const { id } = useParams();
   const navigate = useNavigate();

   // 리스트 데이터 대신 API 또는 전역 상태로 데이터를 가져온다고 가정
   const dummyData = Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      title: `소공원 정비사업 시행 안내 ${i + 1}`,
      content: `여기는 ${i + 1}번 게시글의 상세 내용입니다.`,
      date: `2024.00.${String(i + 1).padStart(2, "0")}`,
      author: `작성자${i + 1}`,
      views: Math.floor(Math.random() * 100),
      fileName: i % 3 === 0 ? `file${i + 1}.png` : null,
   }));

   const post = dummyData.find((item) => item.id === parseInt(id));

   if (!post) {
      return <h2>게시글을 찾을 수 없습니다.</h2>;
   }

   const handleBack = () => navigate(-1);

   return (
      <>
         <div className={styles.content}>
            <ul>
               <li>
                  <h2 className={styles.title}>{post.title}</h2>
                  <div className={styles.tt}>
                     <ul>
                           <li>
                              <span className={styles.title}>작성자</span>
                              <span className={styles.cont}>{post.author}</span>
                           </li>
                           <li>
                              <span className={styles.title}>작성일</span>
                              <span className={styles.cont}>{post.date}</span>
                           </li>
                           <li>
                              <span className={styles.title}>조회수</span>
                              <span className={styles.cont}>{post.views}</span>
                           </li>
                     </ul>
                  </div>
               </li>
            </ul>
            <ul>
               <li className={styles.bodyCont}>
                  {post.content || "게시글 내용이 없습니다."}
               </li>
            </ul>
            <ul>
               <li>
                  {post.fileName ? (
                  <div>
                     <p className={styles.attachment_name}>첨부파일</p>
                     <ul className={styles.attachment}>
                        <li className={styles.img_box}>
                        <a href={`/uploads/${post.fileName}`} download>
                           <img src={`/uploads/${post.fileName}`} alt={post.fileName} />
                        </a>
                        </li>
                        <li>
                        <p className={styles.img_name}>
                           <span>파일명</span> {post.fileName}
                        </p>
                        <p>
                           <a
                              className={styles.img_down}
                              href={`/uploads/${post.fileName}`}
                              download
                           >
                              다운로드
                           </a>
                        </p>
                        </li>
                     </ul>
                  </div>
                  ) : (
                     <span>등록된 첨부파일이 없습니다.</span>
                  )}
               </li>
            </ul>
         </div>
         
         
         {/* 댓글 출력 창 */}
         <div className={styles.comment_list_del}>
            <ul>
               <li>
                  <p className={styles.cmt_content}>삭제된 댓글 입니다.</p>
               </li>
            </ul>
         </div>

         <form method="post">
            <div className={styles.comment_list}>
               <ul>
                  <li>
                     <img src="/resources/images/profile.png" alt="profile" />
                  </li>
                  <li>
                     <p className={styles.cmt_id}>아이디 <span className={styles.cmt_update}>(수정됨)</span> <span className={styles.cmt_name}>작성자</span></p>
                     <p className={styles.cmt_content}>asdsdsda</p>
                     <p className={styles.cmt_date}>asdsdasd</p>
                     
                     {/* 실제는 로그인 성공 후 관리자이거나 글쓴 본인인 경우만 삭제 가능 */}
                     <div className={styles.btn_contents}>
                        <button className={styles.update_btn}>수정</button>
                        <button className={styles.delete_btn} onclick="move_comment_delete(this.form)">삭제</button>
                     </div>
                  </li>
               </ul>
               {/* 컨트롤러 가서 DB 삭제 후 다시 이곳으로 와야 한다. (나중에 ajax로 변경하자) */}
               {/* <input type="hidden" name="idxc_idx" value="${k.idxc_idx}" />
               <input type="hidden" name="c_ref" value="${k.c_ref}" />
               <input type="hidden" name="idxn_idx" value="${k.c_ref}" />
               <input type="hidden" name="cPage" value="${cPage}" /> */}
            </div>
         </form>
         
         {/* 댓글 입력 창 */}
         <div className={styles.comment_conteainer}>
            <form action="/comment_insert" method="post">
               <fieldset>
                  {/* 아이디 number */}
                  <input type="hidden" name="u_idx" value="1" />
                  
                  <p className={styles.cmt_id}>아이디 불러오기</p>
                  <div className={styles.insert_comment}>
                     <textarea rows="3" cols="40" name="c_con" placeholder="댓글을 남겨보세요." required></textarea>
                     {/* 댓글 저장 시 어떤 댓글이 원글인지 저장해야 한다. */}
                     {/* <input type="hidden" name="idxn_idx" value="${gvo.idxn_idx}" />
                     <input type="hidden" name="cPage" value="${cPage}" />
                     <input type="hidden" name="c_out" value="0" />
                     <input type="hidden" name="c_bor" value="notice" /> */}
                     <input type="submit" className={styles.insert_btn} value="등록" />
                  </div>
               </fieldset>
            </form>
         </div>
         
         
         <div>               
            <div className={styles.button_box}>
               <button className={styles.cancle} onClick={handleBack}>목록</button>  
               <form method="post">  
                  {/* <input type="hidden" name="cPage" value="${cPage}" /> 
                  <input type="hidden" name="idxn_idx" value="${gvo.idxn_idx}" /> 
                  <input type="hidden" name="a_idx" value="${gvo.a_idx}" />  */}
                  
                  <span>
                     <button className={styles.write}>수정</button>   
                     <button className={styles.delete}>삭제</button>     
                  </span>
               </form>
            </div>
         </div>
      </>
   );
}

export default NoticeDetailVer1;