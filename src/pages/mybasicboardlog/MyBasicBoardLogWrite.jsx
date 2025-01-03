import commons from '../../styles/common.module.css';
import MyBasicMenu from '../../components/MyBasicMenu';
import boardlog from '../../styles/mypage/mybasicboardlogcommon.module.css';
import styles from '../../styles/mypage/mybasicboardlogupdate.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import Editor from '../../components/Editor';
// import info from '../../styles/mypage/mybasicuserinfo.module.css';

function MyBasicBoardLogWrite(props) {
   const {mainTitle, subTitle} = useDocumentTitle();
   const [startDate, setStartDate] = useState(null);
   const [fileName, setFileName] = useState('');
   const [searchModalOpen, setSearchModalOpen] = useState(false);
   const modalBackground = useRef(null);
   const [allChecked, setAllChecked] = useState(false);
   const [selectedItems, setSelectedItems] = useState([]);
   const [checkboxes, setCheckboxes] = useState([
      { id: 1, label: '리피논정80밀리그램(아토르바스타틴칼슘삼수화물)', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810125' },
      { id: 2, label: '다른 약품명 1', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810126' },
      { id: 3, label: '다른 약품명 2', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810127' },
      { id: 4, label: '약품명 4', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810128' },
      { id: 5, label: '약품명 5', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810129' },
      { id: 6, label: '약품명 6', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810130' },
      { id: 7, label: '약품명 7', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810131' },
      { id: 8, label: '약품명 8', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810132' },
      { id: 9, label: '약품명 9', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810133' },
      { id: 10, label: '약품명 10', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810134' },
      { id: 11, label: '약품명 11', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810135' },
      { id: 12, label: '약품명 12', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810136' },
      { id: 13, label: '약품명 13', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810137' },
      { id: 14, label: '약품명 14', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810138' },
      { id: 15, label: '약품명 15', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810139' },
      { id: 16, label: '약품명 16', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810140' },
      { id: 17, label: '약품명 17', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810141' },
      { id: 18, label: '약품명 18', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810142' },
      { id: 19, label: '약품명 19', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810143' },
      { id: 20, label: '약품명 20', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810144' },
      { id: 21, label: '약품명 21', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810145' },
      { id: 22, label: '약품명 22', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810146' },
      { id: 23, label: '약품명 23', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810147' },
      { id: 24, label: '약품명 24', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810148' },
      { id: 25, label: '약품명 25', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810149' },
      { id: 26, label: '약품명 26', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810150' },
      { id: 27, label: '약품명 27', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810151' },
      { id: 28, label: '약품명 28', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810152' },
      { id: 29, label: '약품명 29', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810153' },
      { id: 30, label: '약품명 30', checked: false, companyName: '주식회사제뉴원사이언스', productSerialNumber: '200810154' },
   ]);

   const [inputValues, setInputValues] = useState({
         productName: '',
         companyName: '',
         serialNumber: ''
   });

   // 모달 열릴 때 body 스크롤 막기
   useEffect(() => {
         if (searchModalOpen) {
            document.body.style.overflow = 'hidden';
         } else {
            document.body.style.overflow = 'unset';
         }
         return () => {
            document.body.style.overflow = 'unset'; // 컴포넌트 언마운트 시 스크롤 복원
         };
   }, [searchModalOpen]);


   const handleCheckboxChange = (id) => {
      setCheckboxes((prev) =>
         prev.map((checkbox) =>
               checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
         )
      );
   };

   const handleAllCheckboxChange = () => {
      const newCheckedState = !allChecked;
      setAllChecked(newCheckedState);
      setCheckboxes((prev) =>
         prev.map((checkbox) => ({ ...checkbox, checked: newCheckedState }))
      );
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValues((prev) => ({
         ...prev,
         [name]: value
      }));
   };

   const handleConfirm = () => {
      // 필수 조건 검사
      const isAnyCheckboxChecked = checkboxes.some(checkbox => checkbox.checked);
      if (!inputValues.dosageMethod || !inputValues.usagePurpose || !isAnyCheckboxChecked) {
         alert('복용 방법, 사용 목적, 그리고 체크박스는 필수입니다.'); // 경고 메시지
         return;
      }

      const selected = checkboxes.filter(checkbox => checkbox.checked);
      const newItems = selected.map((item) => ({
         name: item.label,
         dosageMethod: inputValues.dosageMethod,
         usagePurpose: inputValues.usagePurpose
      }));
      setSelectedItems((prev) => [...prev, ...newItems]); // 기존 선택된 항목에 추가
      setSearchModalOpen(false);
      setInputValues({ dosageMethod: '', usagePurpose: '' }); // 입력 필드 초기화
      setCheckboxes((prev) => prev.map(checkbox => ({ ...checkbox, checked: false }))); // 체크박스 초기화
      setAllChecked(false); // 전체 체크박스 초기화
   };

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         setFileName(file.name);
      }
   };

   const BasicBoardLogListBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      window.location.href = '/mybasicboardlog'; // 클릭 시에만 이동
   };

   const handleRemoveItem = (index) => {
       setSelectedItems((prev) => prev.filter((_, i) => i !== index)); // 선택된 항목 삭제
   };

   const handleRemoveAllItems = () => {
       setSelectedItems([]); // 모든 선택된 항목 삭제
   };


   return (
      <>
         <div>
            {/* 검색 모달 */}
            {searchModalOpen && (
               <div
                  className={`${boardlog.write__modalContainer} ${searchModalOpen ? 'show' : ''}`}
                     ref={modalBackground}
                     onClick={(e) => {
                        if (e.target === modalBackground.current) {
                           setSearchModalOpen(false);
                        }
                  }}
               >
               <div className={boardlog.write__modalContent__box}>
                  <ul className={boardlog.write__modal__search}>
                     <li>약품명으로 검색하기</li>
                     <li>
                        <button
                           className="material-icons"
                           onClick={() => setSearchModalOpen(false)}
                        >
                           close
                        </button>
                     </li>
                  </ul>
                  <ul className={boardlog.write__search}>
                     <li>
                        <input
                           type="text"
                           placeholder="약품명(품목명)을 입력하세요."
                        />
                        
                        <button className={boardlog.write__search__modalbtn}>
                           검색
                        </button>
                     </li>
                  </ul>
                  <ul className={boardlog.write__search2}>
                     <li>
                        <span className={boardlog.write__search__modalbtn2}>
                           복용 방법 <span className={boardlog.star}>*</span>
                        </span>

                        <input
                           type="text"
                           name="dosageMethod"
                           placeholder="복용 방법"
                           value={inputValues.dosageMethod}
                           onChange={handleInputChange}
                        />
                     </li>
                  </ul>
                  <ul className={boardlog.write__search2}>
                     <li>
                        <span className={boardlog.write__search__modalbtn2}>
                           사용 목적 <span className={boardlog.star}>*</span>
                        </span>

                        <input
                           type="text"
                           name="usagePurpose"
                           placeholder="사용 목적"
                           value={inputValues.usagePurpose}
                           onChange={handleInputChange}
                        />
                     </li>
                  </ul>
                     <div className={styles.table}>
                        <table className={styles.status__table}>
                           <thead>
                              <tr>
                                    <th>
                                       <input
                                          type="checkbox"
                                          checked={allChecked}
                                          onChange={handleAllCheckboxChange}
                                       />
                                    </th>
                                    <th>No</th>
                                    <th>약품명 (품목명)</th>
                                    <th>업체명</th>
                                    <th>제품일련번호</th>
                              </tr>
                           </thead>
                           <tbody>
                              {checkboxes.map((checkbox, index) => (
                                    <tr key={checkbox.id}>
                                       <td>
                                          <input
                                                type="checkbox"
                                                checked={checkbox.checked}
                                                onChange={() => handleCheckboxChange(checkbox.id)}
                                          />
                                       </td>
                                       <td>{index + 1}</td>
                                       <td>{checkbox.label}</td>
                                       <td>{checkbox.companyName}</td> {/* 업체명 추가 */}
                                       <td>{checkbox.productSerialNumber}</td> {/* 제품일련번호 추가 */}
                                    </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     <button className={boardlog.confirmbtn} onClick={handleConfirm}>확인</button>
                  </div>
               </div>
            )}
         </div>

         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyBasicMenu />

         <div className={boardlog.boardlog__container}>
            <ul>
               <li className={boardlog.boardlog__title}>
                  복용일자 <span className={boardlog.star}>*</span>
               </li>
               <li className={boardlog.boardlog__contents}>
                  <div className={boardlog.boardlog__date__calendar}>
                     <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="YYYY-MM-DD"
                        onChangeRaw={(e) => e.preventDefault()}
                        className={boardlog.boardlog__date__calendar__input}
                     />
                     <span className="material-icons">calendar_month</span>
                  </div>
               </li>
               <li className={boardlog.boardlog__title}>
                  <p>약 이름 <span className={boardlog.star}>*</span></p>
               </li>
               <li className={boardlog.boardlog__contents}>
                  <div className={boardlog.write__search__container}>
                     <input
                           type="text"
                           placeholder="검색하기를 클릭하세요"
                           readOnly
                        />
                     <div>
                        <button
                           className={boardlog.write__search__btn}
                           onClick={(e) => {
                              e.preventDefault();  // 폼 제출을 방지   
                              setSearchModalOpen(true);
                           }}
                        >
                           검색
                        </button>
                     </div>
                  </div>
                  <div className="selected-items">
                     <ul>
                        {selectedItems.map(item => (
                              <li key={item.id}>{item.label}</li>
                        ))}
                     </ul>
                  </div>
                  <div className={styles.table}>
                     <table className={styles.statusupdate__table}>
                        <thead>
                           <tr>
                              <th>약 이름</th>
                              <th>복용 방법</th>
                              <th>사용 목적</th>
                              <th>
                                 <span onClick={handleRemoveAllItems}>전체삭제</span>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {selectedItems.length === 0 ? (
                              <tr>
                                 <td colSpan="4" style={{ textAlign: 'center' }}>
                                    검색을 눌러서 값을 넣어주세요.
                                 </td>
                              </tr>
                           ) : (
                              selectedItems.map((item, index) => (
                                 <tr key={index}>
                                       <td>{item.name}</td>
                                       <td>{item.dosageMethod}</td>
                                       <td>{item.usagePurpose}</td>
                                       <td>
                                          <button onClick={() => handleRemoveItem(index)}>
                                             <span className="material-symbols-outlined">remove</span>
                                          </button>
                                       </td>
                                 </tr>
                              ))
                           )}
                        </tbody>
                     </table>
                  </div>
               </li>
               
               <li className={boardlog.boardlog__title}>
                  기타 내용
               </li>
               <li className={boardlog.boardlog__contents}>
                  <Editor />
               </li>
               <li className={boardlog.boardlog__title}>
                  사진 추가
               </li>
               <li className={boardlog.boardlog__contents}>
                  <div className={commons.filebox}>
                        <input
                           className={commons.uploadName}
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
               </li>
            </ul>
         </div>

         <div className={boardlog.write_button_box}>                
               <div>
                  <button className={boardlog.board_write}>완료</button>    
                  <button className={boardlog.board_cancle} onClick={BasicBoardLogListBtn}>목록</button>    
               </div>
         </div>
      </>
   );
}

export default MyBasicBoardLogWrite;