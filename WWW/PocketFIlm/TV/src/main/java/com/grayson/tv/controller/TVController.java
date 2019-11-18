package com.grayson.tv.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.config.Configs;
import com.grayson.common.util.CommonUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/")
public class TVController {

    /**
     * 获取推荐影视数据
     *
     * @param map 数据映射
     * @return 首页
     */
    @RequestMapping("/")
    public String getMovie(ModelMap map, HttpServletRequest request) {
        //  获取用户名
        CommonUtils commonUtils = new CommonUtils();
        String cookieName = "userInfo";
        JSONObject userInfo = commonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }
        map.addAttribute("username", username);
        map.addAttribute("title", "掌上电视_免费在线观看央视台卫视台地方台港澳台海外台轮播台");
        return "movie.html";
    }

    /**
     * 播放影视
     *
     * @param map 数据映射
     * @param _id 影视_id
     * @return 播放页面
     */
    @RequestMapping("/play")
    public String playMovie(ModelMap map, HttpServletRequest request, @RequestParam("_id") String _id, @RequestParam("source_index") Integer sourceIndex) {
        //  获取用户名
        CommonUtils commonUtils = new CommonUtils();
        String cookieName = "userInfo";
        JSONObject userInfo = commonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = commonUtils.getRecords(request, "tv");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        String url = Configs.API + "/tv/get/_id?_id=" + _id;
        JSONObject jsonObject = commonUtils.doGet(url);
        JSONObject movie = jsonObject.getJSONObject("data");
        map.addAttribute("movie", movie);
        map.put("source_index", sourceIndex);
        JSONObject sourceObject = jsonObject.getJSONObject("data").getJSONArray("sources").getJSONObject(sourceIndex);
        map.put("source", sourceObject);
        String currentUrl = sourceObject.getString("url");
        String playUrl = commonUtils.getParseUrl("tv", currentUrl);
        map.put("play_url", playUrl);
        map.put("title", "《" + movie.get("name") + "》免费在线观看-掌上电视免费在线观看高清电视直播" + movie.get("name"));

        //  记录浏览历史
        JSONObject recordsToRecordObject = new JSONObject();
        recordsToRecordObject.put("user_name", username);
        recordsToRecordObject.put("id", _id);
        recordsToRecordObject.put("name", movie.getString("name"));
        recordsToRecordObject.put("type", movie.getString("type"));
        recordsToRecordObject.put("type2", "null");
        recordsToRecordObject.put("src", movie.getString("src"));
        recordsToRecordObject.put("url", movie.getJSONArray("sources").getJSONObject(sourceIndex).getString("url"));
        recordsToRecordObject.put("browse_type", "tv");
        recordsToRecordObject.put("device_uuid", request.getHeader("user-agent"));
        recordsToRecordObject.put("device_version", System.getProperty("os.version"));
        recordsToRecordObject.put("device_platform", System.getProperty("os.name"));
        String recordsUrl = Configs.API + "/records/add";
        commonUtils.doPost(recordsUrl, recordsToRecordObject);

        return "play.html";
    }

    /**
     * 获取更多影视
     *
     * @param map        数据映射
     * @param type       影视第一种类型
     * @param page_index 当前页
     * @param key_word   关键词
     * @return 影视数据
     */
    @RequestMapping("/more")
    public String getMoreMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "type", defaultValue = "全部") String type, @RequestParam(value = "selected_type", defaultValue = "全部") String selected_type, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "key_word", defaultValue = "") String key_word) {
        //  获取用户名
        CommonUtils commonUtils = new CommonUtils();
        if (key_word.equals("null")) {
            key_word = "";
        }
        String cookieName = "userInfo";
        JSONObject userInfo = commonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = commonUtils.getRecords(request, "tv");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  每页大小
        Integer pageSize = 30;
        //  获取影视类型
        JSONArray movieTypes = new JSONArray();

        movieTypes.add(Arrays.asList("类型一", "全部", "央视台", "卫视台", "地方台", "港澳台", "海外台", "轮播台"));
        if (type.equals("地方台")) {
            movieTypes.add(Arrays.asList("类型二", "全部","广东台", "福建台", "天津台", "湖南台", "辽宁台", "河南台", "江西台", "内蒙古台", "新疆台", "上海台", "安徽台", "浙江台", "贵州台", "湖北台", "山西台", "山东台", "广西台", "北京台", "陕西台", "四川台", "吉林台", "重庆台", "河北台", "甘肃台", "江苏台", "海南台", "黑龙江台", "云南台", "宁夏台", "青海台"));
        } else if (type.equals("港澳台")) {
            movieTypes.add(Arrays.asList("类型二", "全部","香港台", "澳门台", "台湾台"));
        } else if (type.equals("海外台")) {
            movieTypes.add(Arrays.asList("类型二", "全部","韩国台", "英国台", "海外台", "美国台", "新加坡台", "印度台", "马来西亚台", "加拿大台", "法国台"));
        }

        map.addAttribute("movieTypes", movieTypes);
        map.addAttribute("type", type);
        map.addAttribute("selected_type", selected_type);
        map.addAttribute("key_word", key_word);
        map.addAttribute("title", type + "频道第" + page_index + "页-免费在线观看-掌上电视");
        return "more-movie.html";
    }

    /**
     * 搜索影视
     *
     * @param map        数据映射
     * @param page_index 当前页
     * @param sort_type  排序方式
     * @param key_word   关键词
     * @return 搜索结果页
     */
    @RequestMapping("/search")
    public String searchMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "sort_type", defaultValue = "0") String sort_type, @RequestParam(value = "key_word", defaultValue = "null") String key_word) {
        //  获取用户名
        CommonUtils commonUtils = new CommonUtils();
        String cookieName = "userInfo";
        JSONObject userInfo = commonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }
        map.addAttribute("username", username);
        map.addAttribute("sort_type", Integer.parseInt(sort_type));
        map.addAttribute("key_word", key_word);
        map.addAttribute("title", key_word + "-掌上电视电视搜索");
        return "search-movie.html";

    }

}