const express = require('express');
const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.render('index', { 
    title: '사용자 관리 시스템',
    message: '사용자 관리 시스템에 오신 것을 환영합니다!'
  });
});

module.exports = router;
