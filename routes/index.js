var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  name :"Nhat"});
});
router.get('/new',function (req, res) {
 var name ='nhat';
 var year = '22'
// mang
  var mang =[4,5,6,7,8,9];
  var manTen=['nhat','nhat2','nhat3'];
  res.render('new',{
    title:"news",
    ten:name,
    tuoi:year,
    mang1:mang,
    mang2:manTen,



  }


  );
})
module.exports = router;
