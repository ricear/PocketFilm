/**
 * @Author: Grayson
 * @Date: 2019/3/9
 */


var express=require('express');
var router=express.Router();

var responseData;

router.use(function(req,res,next){
    next();
});

/**
 * 根路径请求地址
 */

router.get('/', function (req, res, next) {
    res.render('index')
})

router.get('/index2', function (req, res, next) {
    res.render('index2')
})

router.get('/index3', function (req, res, next) {
    res.render('index3')
})

router.get('/index4', function (req, res, next) {
    res.render('index4')
})

module.exports=router;