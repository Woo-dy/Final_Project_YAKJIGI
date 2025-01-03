import React, {useState} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../styles/ckeditor.css';
import axios from 'axios';

function Editor({onChange}) {
   const [editorData, setEditorData] = useState("<p>CKEditor 5가 로드되었습니다!</p>");

   const handleChange = (event, editor) => {
      const data = editor.getData();
      setEditorData(data);
      if (onChange) {
         onChange(data); // 부모 컴포넌트에 데이터 전달
      }
   }

   const uploadAdapter = (loader) => {
      return {
         upload: () => {
               return new Promise((resolve, reject) => {
                  const data = new FormData();
                  loader
                     .file
                     .then((file) => {
                           data.append('upload', file); // 'upload'는 서버에서 기대하는 필드 이름입니다.

                           // 이미지 업로드 요청
                           axios
                              .post('http://localhost:3001/upload', data)
                              .then(response => {
                                 resolve({default: response.data.url}); // 서버에서 반환된 이미지 URL
                              })
                              .catch(error => {
                                 reject(error);
                              });
                     });
               });
         }
      };
   };

   return (
   <> 
   <CKEditor 
      editor={ClassicEditor}
      data={editorData}
      config = {{
         toolbar: [
               'bold',
               'italic',
               'underline',
               'strikethrough',
               'link',
               'bulletedList',
               'numberedList',
               'imageUpload',
               'blockQuote',
               'insertTable',
               'horizontalLine',
               'specialCharacters'
            ],
            // 이미지 드래그 앤 드롭을 위한 설정
         image: {
            toolbar: [
               'imageTextAlternative',
               'imageStyle:full',
               'imageStyle:side'
            ],
            // 업로드 어댑터 설정
            upload: {
               adapter: uploadAdapter
            }
         },
         // CKFinder 설정
         ckfinder: {
            uploadUrl: 'http://localhost:3001/upload' // 이미지 업로드를 처리할 URL
         }
      }}
      onReady = {
         editor => {
            console.log('에디터가 준비되었습니다!', editor);
         }
      }
      onBlur = {
         (event, editor) => {
            console.log('Blur 이벤트 발생.', editor);
         }
      }
      onFocus = {
         (event, editor) => {
            console.log('Focus 이벤트 발생.', editor);
         }
      }
      onChange = {
         handleChange
      } 
   /> 
   </>
   );
}

export default Editor;