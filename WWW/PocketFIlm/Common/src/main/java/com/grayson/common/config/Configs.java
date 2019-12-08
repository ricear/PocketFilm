package com.grayson.common.config;

/**
 * 配置类
 */
public class Configs {

    //  主机名
//    public static String API_HOST = "http://api.grayson.top";
    public static String API_HOST = "http://103.45.172.213:9000";
    public static String WWW_HOST = "http://www.grayson.top";

    //  api 接口名
    public static String API = API_HOST + "/api";
    public static String LOGIN_API = WWW_HOST + "/login";

    //  解析接口
    //  用于影视、小品
    //  用于解析 m3u8 格式
    public static String BLJIEX = "https://vip.bljiex.com/?v=";
    public static String RDHK = "http://jx.rdhk.net/?v=";
    //  用于解析以 aHR0 开头的格式
    public static String JX40 = "https://jx40.net/url=";
    //  用于电视
    public static String FO97 = "https://play.fo97.cn/?url=";
    //  用于戏曲
    public static String LHH = "http://api.lhh.la/vip/?url=";

}