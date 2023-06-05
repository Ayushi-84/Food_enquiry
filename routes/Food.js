var express = require('Express');
var router = express.Router();

/* GET users listing. */
router.get('/Foodenquiry', function(req, res) {
  res.render('Order');
});

router.get('/aboutus', function(req, res) {
    res.render('About');
  });

router.get('/Viewpage', function(req, res) {
  res.render('View');
});
router.get('/LoginPage', function(req, res) {
  res.render('Login',{msg:''});

});
router.post('/chklogin',function(req,res){
  if(req.body.eid=="s26@gmail.com" && req.body.pwd=="987654")
{ res.render('additem')}

else
{
    res.render('Login',{msg:'Invalid Email Id or Password!'})
}
})

module.exports = router;