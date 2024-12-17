import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import commons from '../styles/common.module.css';

function Editor(props) {
   useEffect(() => {
      // CSS 유지용 이벤트 리스너 설정
      const handleFocus = (editor) => {
         const editableElement = editor.ui.view.editable.element;
         editableElement.classList.add(commons.ckEditorEditable);
      };

      const handleBlur = (editor) => {
         const editableElement = editor.ui.view.editable.element;
         editableElement.classList.add(commons.ckEditorEditable);
      };

      // 이벤트 클린업 (컴포넌트 언마운트 시)
      return () => {
         document.removeEventListener('focus', handleFocus);
         document.removeEventListener('blur', handleBlur);
      };
   }, []);

   return (
      <> 
         <div className={commons.ckeditor}> {/* 높이 지정 */}
            <h2>CKEditor 5 무료 버전 사용 예시</h2>
            <CKEditor
               editor={ClassicEditor}
               data="<p>초기 데이터</p>"
               onReady={(editor) => {
                  // 에디터 초기화 시 클래스 추가
                  const editableElement = editor.ui.view.editable.element;
                  if (editableElement) {
                     editableElement.classList.add(commons.ckEditorEditable);

                     // 이벤트 등록
                     editor.editing.view.document.on('focus', () => {
                        editableElement.classList.add(commons.ckEditorEditable);
                     });

                     editor.editing.view.document.on('blur', () => {
                        editableElement.classList.add(commons.ckEditorEditable);
                     });
                  }
               }}
               onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ data });
               }}
            />
         </div>
      </>
   );
}

export default Editor;