var mac_flag=1;         //播放器版本
var mac_second=0;       //播放前预加载广告时间 1000表示1秒
var mac_width=0;      //播放器宽度0自适应
var mac_height=460;     //播放器高度
var mac_widthmob=0;      //手机播放器宽度0自适应
var mac_heightmob=300;     //手机播放器高度
var mac_widthpop=704;   //弹窗窗口宽度
var mac_heightpop=566;  //弹窗窗口高度
var mac_showtop=1;     //美化版播放器是否显示头部
var mac_showlist=0;     //美化版播放器是否显示列表
var mac_autofull=0;     //是否自动全屏,0否,1是
var mac_buffer="";     //缓冲广告地址
var mac_prestrain="";  //预加载提示地址
var mac_colors="000000,F6F6F6,F6F6F6,333333,666666,FFFFF,FF0000,2c2c2c,ffffff,a3a3a3,2c2c2c,adadad,adadad,48486c,fcfcfc";   //背景色，文字颜色，链接颜色，分组标题背景色，分组标题颜色，当前分组标题颜色，当前集数颜色，集数列表滚动条凸出部分的颜色，滚动条上下按钮上三角箭头的颜色，滚动条的背景颜色，滚动条空白部分的颜色，滚动条立体滚动条阴影的颜色 ，滚动条亮边的颜色，滚动条强阴影的颜色，滚动条的基本颜色
var mac_show={},mac_show_server={}; //播放器名称,服务器组地址
//缓存开始
mac_show["bilibili"]="B站";mac_show["youku"]="优酷播放源";mac_show["tudou"]="土豆播放源";mac_show["qq"]="腾讯播放源";mac_show["sohu"]="搜狐播放源";mac_show["qiyi"]="奇艺播放源";mac_show["letv"]="乐视播放源";mac_show["pptv"]="pptv播放源";mac_show["mgtv"]="芒果播放源";mac_show["opentv"]="急速云播放源";mac_show["xigua"]="西瓜视频";mac_show["wqiyi"]="W奇艺播放源";mac_show["tianyi"]="TY播放源";mac_show["pptvyun"]="PP云播放源";mac_show["bjm3u8"]="八戒播放源";mac_show["wlm3u8"]="wlm3u8播放源";mac_show["hkm3u8"]="hkm3u8播放源";mac_show["605yun"]="605yun播放源";mac_show["135zy"]="135zy播放源";mac_show["dbm3u8"]="dbm3u8播放源";mac_show["135m3u8"]="135m3u8播放源";mac_show["zkyun"]="zkyun播放源";mac_show["zkm3u8"]="zkm3u8播放源";mac_show["kkyun"]="酷酷云播放源";mac_show["kuyun"]="酷云播放源";mac_show["88yun"]="88yun播放源";mac_show["mp4bo"]="Mp4播放源";mac_show["dp"]="DP播放源";mac_show["35yun"]="35yun播放源";mac_show["27pan"]="88pan播放源";mac_show["yjm3u8"]="yjm3u8播放源";mac_show["migu"]="咪咕播放源";mac_show["zuidall"]="ZD播放源";mac_show["zuidam3u8"]="ZDm3u8播放源";mac_show["131m3u8"]="131m3u8播放源";mac_show["131zy"]="131播放源";mac_show["33uuck"]="33uuck播放源";mac_show["33uu"]="33uu播放源";mac_show["m3u8"]="m3u8播放源";mac_show["yjyun"]="yjyun播放源";mac_show_server["webplay"]="maccmsc.com";
//缓存结束