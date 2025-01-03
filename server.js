const express = require('express'); // Express 모듈 가져오기
const multer = require('multer'); // Multer 모듈 가져오기
const path = require('path'); // 경로 유틸리티
const cors = require('cors'); // CORS 처리

const app = express();
const PORT = 3001;

// CORS 설정 (React에서 요청 허용)
app.use(cors({
   origin: 'http://localhost:3000', // React 앱 주소
   methods: ['GET', 'POST'],       // 허용할 메서드
   allowedHeaders: ['Content-Type'] // 허용할 헤더
}));

// Multer 설정
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'C:/upload/'); // 파일 저장 위치 (C:/upload)
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // 고유 파일명 설정
   }
});

const upload = multer({ storage }); // Multer 미들웨어 설정

// 이미지 업로드 엔드포인트
app.post('/upload', upload.single('upload'), (req, res) => {
   if (!req.file) {
      console.error('파일 업로드 실패');
      return res.status(400).json({ error: 'No file uploaded' });
   }
   const url = `http://localhost:3001/uploads/${req.file.filename}`; // 업로드된 파일의 URL 생성
   console.log(`업로드된 파일 URL: ${url}`);
   res.json({ url }); // 클라이언트에 URL 반환
});

// 정적 파일 제공 (C:/upload 폴더를 '/uploads' 경로로 매핑)
app.use('/uploads', express.static('C:/upload'));

// 서버 실행
app.listen(PORT, () => {
   console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});