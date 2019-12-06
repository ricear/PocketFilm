/**
 * Created by 魏鹏 on 2018/3/4.
 */

//加载express模块
var express=require('express');
//加载模板处理模块
var swig=require('swig');
//加载数据库模块
var mongoose=require('mongoose');
//加载body-parser，用来处理post提交过来的数据
var bodyParser=require('body-parser');
//加载cookies模块
var cookies=require('cookies');

//创建app应用
var app=express();

//设置静态文件托管
//当用户访问的url以/public开始，直接返回对应__dirname+'/public'下的文件
app.use('/',express.static(__dirname+'/images'));

//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html', swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views', './views');
//注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine', 'html');

//在开发过程中，需要取消模板缓存
swig.setDefaults({cache: false});

//bodyparser设置
app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());
//设置cookies
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    req.cookies=new cookies(req,res);
    next()
});

//监听http请求
app.listen(process.env.POST || 9001);