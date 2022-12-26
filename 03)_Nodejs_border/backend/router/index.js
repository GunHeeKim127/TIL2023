var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {                                      // '/'는 router에서 랜더할때 한번만 사용가능, 현재 라우터에서 랜더한 페이지중 첫화면에 보이는 페이지
    res.sendFile(path.join(__dirname+'../../../frontend/view/index.html'));     //html은 res.render가 아니라 sendFile로 해줘야 됨, 
});                                                                             //path.join은 상대 위치

module.exports = router;
  