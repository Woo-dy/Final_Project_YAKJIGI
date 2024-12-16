import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor(props) {
   return (
      <> 
         <div>
            <h2>CKEditor 5 무료 버전 사용 예시</h2>
            <CKEditor
               editor={ClassicEditor}
               data="<p>초기 데이터</p>"
               onReady={(editor) => {
                  console.log("에디터가 준비되었습니다!", editor);
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