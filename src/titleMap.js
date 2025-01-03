const titleMap = {
   '/sub101': {
         mainTitle: '의약품의 정의',
         subTitle: '건강과 생명을 지키는 약의 이야기',
   },
   '/sub102': {
         mainTitle: '의약품의 종류',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub103': {
         mainTitle: '의약품의 허가과정',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub104': {
         mainTitle: '신약과 제네릭',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub105': {
         mainTitle: '의약품 관련 법령',
         subTitle: '의약품 관련 법령들을 조회해보세요',
   },
   '/sub201': {
         mainTitle: '의약품 검색하기',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub202': {
         mainTitle: '부작용 검색하기',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub203': {
         mainTitle: '병용금기 검색하기',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub301': {
         mainTitle: '약국 찾아보기',
         subTitle: '약국명 혹은 상세주소를 검색하시면, 약국의 주소를 알려드립니다',
   },
   '/sub302': {
         mainTitle: '보도자료 찾아보기',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/sub303': {
         mainTitle: '폐의약품 수거함 찾기',
         subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   '/privacy': {
         mainTitle: '개인정보처리방침',
   },
   '/termsofuse': {
         mainTitle: '이용약관',
   },
   '/joinselect': {
         mainTitle: '회원가입',
         subTitle: '회원가입을 완료하고 다양한 서비스를 이용해보세요.',
   },
   '/mybasicuserinfopwchange': {
         mainTitle: '회원가입',
         subTitle: '회원가입을 완료하고 다양한 서비스를 이용해보세요.',
   },

   


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


// 공지사항 게시판
const noticeboard = {
   common: {
      mainTitle: '공지사항',
      subTitle: '도심 공원에서 만나는 자연과 지속가능성',
   },
   paths: ['/noticelist', 
         '/noticewrite', 
         '/noticeedit', 
         '/noticedetail'
   ],
};

// 공지사항 게시판
noticeboard.paths.forEach(path => {
   titleMap[path] = noticeboard.common;
});

// 자주 묻는 질문 게시판
const faqboard = {
   common: {
      mainTitle: '자주 묻는 질문',
      subTitle: '개별 문의 전, 필요한 정보를 빠르게 확인해보세요',
   },
   paths: ['/faqlist'],
};

// 자주 묻는 질문 게시판
faqboard.paths.forEach(path => {
   titleMap[path] = faqboard.common;
});

// 전문가와의 상담 게시판
const qnaboard = {
   common: {
      mainTitle: '전문가와의 상담',
      subTitle: '문의 내용을 남겨주시면 순차적으로 확인하여 답변 드리겠습니다.',
   },
   paths: ['/qnalist', 
         '/qnawrite', 
         '/qnaupdate', 
         '/qnadetail'
   ],
};

// 전문가와의 상담 게시판
qnaboard.paths.forEach(path => {
   titleMap[path] = qnaboard.common;
});


// 운영진에게 문의 게시판
const minquiryboard = {
   common: {
      mainTitle: '운영진에게 문의',
      subTitle: '문의내용을 남겨주시면 순차적으로 확인하여 답변해드리겠습니다',
   },
   paths: ['/minquirylist',
         '/minquirywrite',
         '/minquirydetail',
         '/minquiryupdate',
         '/mybasicboardinquiry',
         '/mybasicboardinquirywrite',
         '/mybasicboardinquirydetail',
         '/mybasicboardinquiryupdate',
         '/myproboardinquiry',
         '/myproboardinquirywrite',
         '/myproboardinquirydetail',
         '/myproboardinquiryupdate'
   ],
};

// 운영진에게 문의 게시판
minquiryboard.paths.forEach(path => {
   titleMap[path] = minquiryboard.common;
});




// 복약일지 게시판 basic
const mybasicboard = {
   common: {
      mainTitle: '나의 게시판',
      subTitle: '작성한 내용을 확인해보세요',
   },
   paths: [
      '/mybasicboardcounsel',
      '/mybasicboardcounseldetail',
      '/mybasicboardcounselupdate',
      '/mybasicboardcounselwrite'
   ],
};

// 복약일지 게시판 basic
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
         '/mybasicboardlogupdate',
         '/mybasicboardlogdetail'
   ],
};

// 복약일지 basic
mybasicboardlog.paths.forEach(path => {
   titleMap[path] = mybasicboardlog.common;
});

// 진료기록 타이틀 basic
const mybasicboardrecords = {
   common: {
      mainTitle: '나의 진료 기록',
      subTitle: '처방전 저장을 통해 나의 진료 이력을 파악하세요',
   },
   paths: ['/mybasicboardrecords', 
         '/mybasicboardrecordswrite',
         '/mybasicboardrecordsedit',
         '/mybasicboardrecordsdetail'
   ],
};

// 진료기록 basic
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
         '/myproboardcounselwrite',
         '/myproboardcounseldetail',
         '/myproboardcounselupdate',
         '/myproboardcounselmy',
         '/myproboardcounselmywrite',
         '/myproboardcounselmydetail',
         '/myproboardcounselmyupdate'
   ],
};

// 복약일지 게시판 basic
myproboard.paths.forEach(path => {
   titleMap[path] = myproboard.common;
});


export default titleMap;