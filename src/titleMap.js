const titleMap = {
   // 마이 페이지 basic
   '/mybasicmain': {
         mainTitle: '마이페이지',
         subTitle: '약지기에서의 나의 기록들을 확인하세요',
   },
   '/mybasicuserinfo': {       
      mainTitle: '내 정보 보기',
      subTitle: '내 정보를 확인해 보세요',
   },
   
   // 마이 페이지 pro
   '/mypromain': {
      mainTitle: '마이페이지',
      subTitle: '약지기에서의 나의 기록들을 확인하세요',
   },
   '/myprouserinfo': {
      mainTitle: '내 정보 보기',
      subTitle: '내 정보를 확인해 보세요',
   },
   '/myproboardinquiry': {
      mainTitle: '운영진에게 문의',
      subTitle: '작성한 내용을 확인해보세요',
   }
};

// 복약일지 게시판 basic
const mybasicboard = {
   common: {
      mainTitle: '나의 게시판',
      subTitle: '작성한 내용을 확인해보세요',
   },
   paths: ['/mybasicboardcounsel', 
         '/mybasicboardinquiry'
   ],
};

// 복약일지 게시판 사용 예시 basic
mybasicboard.paths.forEach(path => {
   titleMap[path] = mybasicboard.common;
});

// 복약일지 타이틀 basic
const mybasicboardlog = {
   common: {
      mainTitle: '나의 복약 일지',
      subTitle: '정확한 약력 관리를 위해 복약 일지를 작성해 보세요.',
   },
   paths: ['/mybasicboardlog', 
         '/mybasicboardlogwrite',
         '/mybasicboardlogedit',
         '/mybasicboardlogdetail'
   ],
};

// 복약일지 사용 예시 basic
mybasicboardlog.paths.forEach(path => {
   titleMap[path] = mybasicboardlog.common;
});

// 진료기록 타이틀 basic
const mybasicboardrecords = {
   common: {
      mainTitle: '나의 진료 기록',
      subTitle: '처방전 저장을 통해 나의 진료  이력을 파악하세요',
   },
   paths: ['/mybasicboardrecords', 
         '/mybasicboardrecordswrite',
         '/mybasicboardrecordsedit',
         '/mybasicboardrecordsdetail'
   ],
};

// 진료기록 사용 예시 basic
mybasicboardrecords.paths.forEach(path => {
   titleMap[path] = mybasicboardrecords.common;
});



// 복약일지 게시판 pro
const myproboard = {
   common: {
      mainTitle: '내가 작성한 게시판',
      subTitle: '작성한 내용을 확인해보세요',
   },
   paths: ['/myproboardcounsel', 
         '/myproboardcounselmy'
   ],
};

// 복약일지 게시판 사용 예시 basic
myproboard.paths.forEach(path => {
   titleMap[path] = myproboard.common;
});


export default titleMap;