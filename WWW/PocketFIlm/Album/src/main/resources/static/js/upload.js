//注册－填写身份信息 上传
var reg_info_file=document.getElementById("reg_info_file");
reg_info_file.onchange=function(){    		
	if(window.FileReader){//ie10 ie10+ w3c
		var file = reg_info_file.files[0];
		//console.log(file.size);
		//console.log(file.type);			
		if(/(image\/jpeg)|(image\/png)/.test(file.type)){
			$("#reg_info_file_text").hide();
		}else{
			$("#reg_info_file_text").html('支持图片格式JPG/PNG').show();
			return false;
		};
		if(file.size<2*1024*1024){
			$("#reg_info_file_text").hide();
		}else{
			$("#reg_info_file_text").html('图片大小不超过2M').show();
			return false;
		};		
	
		var fr = new FileReader();
		fr.readAsDataURL(file);
		$("#reg_info_file_base64").removeAttr("width");
		$("#reg_info_file_base64").removeAttr("height");
		fr.onloadend = function(e) {
			$("#reg_info_file_w").hide();
			$("#reg_info_file_base64").show();
			$("#reg_info_file_base64").attr("src",e.target.result);						
			$("#reg_info_file_base64")[0].onload=function(){
				var upimgw=$("#reg_info_file_base64").width();
				var upimgh=$("#reg_info_file_base64").height();
				$("#reg_info_file_base64").attr("width",imgPercentScale(165,98,upimgw,upimgh).w);
				$("#reg_info_file_base64").attr("height",imgPercentScale(165,98,upimgw,upimgh).h);
			};						
		};				
	}else{		//ie9-	
		$("#reg_info_file_w").hide();
		$("#reg_info_file_base64").show();
		var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		reg_info_file.select();
		reg_info_file.blur();
		var src = document.selection.createRange().text;
		//$("#reg_info_file_base64")[0].filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;		
		$("#reg_info_file_base64")[0].src=src;
		$("#reg_info_file_base64")[0].onload=function(){
			var upimgw=$("#reg_info_file_base64").width();
			var upimgh=$("#reg_info_file_base64").height();
			$("#reg_info_file_base64").attr("width",imgPercentScale(165,98,upimgw,upimgh).w);
			$("#reg_info_file_base64").attr("height",imgPercentScale(165,98,upimgw,upimgh).h);
		};			
		alert("名片上传不被浏览器支持，请更换浏览器打开网站");
	};
};
//date: 2016-12-5 author: 杜关兴 note: 图片比例缩放算法
/*
	boxw:容器宽度
	boxh:容器高度
	imgw:图片宽度
	imgh:图片高度
*/
function imgPercentScale(boxw,boxh,imgw,imgh){
	var res={};
	var wper=imgw/boxw;
	var hper=imgh/boxh;
	if(wper<=1 && hper<1){
		res.w=imgw;
		res.h=imgh;
		return res;
	};
	if(wper>1 && hper<1){
		res.w=boxw;
		var rhper=boxw/imgw;
		res.h=imgh*rhper;
		return res;
	};
	if(wper<=1 && hper>1){
		res.h=boxh;
		var rwper=boxh/imgh;
		res.w=imgw*rwper;
		return res;
	};
	if(wper>1 && hper>1){
		if(wper>=hper){
			res.w=boxw;
			var rhper=boxw/imgw;
			res.h=imgh*rhper;
			return res;
		}else{
			res.h=boxh;
			var rwper=boxh/imgh;
			res.w=imgw*rwper;
			return res;
		};
	};	
};