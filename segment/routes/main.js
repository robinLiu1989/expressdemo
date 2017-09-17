var express = require('express');
var router = express.Router();

var userModel = require('../models/UserModel');



/* GET home page. */
router.post('/main', function(req, res, next) {
    // res.render('main', { title: 'Express' });
    console.log(req.body.nickname);

    userModel.zhuce(req,res);


});




module.exports = router;
