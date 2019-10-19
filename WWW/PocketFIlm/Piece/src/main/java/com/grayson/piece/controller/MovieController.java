package com.grayson.piece.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.config.Configs;
import com.grayson.common.util.CommonUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/")
public class MovieController {

    /**
     * 获取推荐影视数据
     *
     * @param map 数据映射
     * @return 首页
     */
    @RequestMapping("/")
    public String getMovie(ModelMap map, HttpServletRequest request) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "piece");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        Integer pageSize = 18;
        //  推荐
        String recommendationsUrl = Configs.API + "/recommendations/get?browse_type=piece&page_size=" + pageSize;
        //  赵家班
        String movies0Url = Configs.API + "/piece/get/all?type=赵家班&page_size=" + pageSize;
        //  郭德纲
        String movies1Url = Configs.API + "/piece/get/all?type=郭德纲&page_size=" + pageSize;
        //  德云社
        String movies2Url = Configs.API + "/piece/get/all?type=德云社&page_size=" + pageSize;
        //  小品
        String movies3Url = Configs.API + "/piece/get/all?type=小品&page_size=" + pageSize;
        //  电影
        String movies4Url = Configs.API + "/piece/get/all?type=电影&page_size=" + pageSize;
        //  今日更新
        String todayMoviesUrl = Configs.API + "/get/today?type=piece";
        //  今日更新数据量
        String todayCountUrl = Configs.API + "/count/get/today?type=piece";
        JSONObject recommendationsObject = CommonUtils.doGet(recommendationsUrl);
        JSONObject movies0Object = CommonUtils.doGet(movies0Url);
        JSONObject movies1Object = CommonUtils.doGet(movies1Url);
        JSONObject movies2Object = CommonUtils.doGet(movies2Url);
        JSONObject movies3Object = CommonUtils.doGet(movies3Url);
        JSONObject movies4Object = CommonUtils.doGet(movies4Url);
        JSONObject todayMoviesObject = CommonUtils.doGet(todayMoviesUrl);
        JSONObject todayCountObject = CommonUtils.doGet(todayCountUrl);
        map.addAttribute("recommendations", recommendationsObject.getJSONArray("data"));
        map.addAttribute("movies0", movies0Object.getJSONArray("data"));
        map.addAttribute("movies1", movies1Object.getJSONArray("data"));
        map.addAttribute("movies2", movies2Object.getJSONArray("data"));
        map.addAttribute("movies3", movies3Object.getJSONArray("data"));
        map.addAttribute("movies4", movies4Object.getJSONArray("data"));
        map.addAttribute("todayMovies", todayMoviesObject.getJSONArray("data"));
        map.addAttribute("todayCount", todayCountObject.getInteger("data"));
        map.addAttribute("title", "掌上小品_免费在线观看赵家班郭德纲德云社小品电影");
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
    public String playMovie(ModelMap map, HttpServletRequest request, @RequestParam("_id") String _id) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "piece");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        String url = Configs.API + "/piece/get/_id?_id=" + _id;
        JSONObject jsonObject = CommonUtils.doGet(url);
        JSONObject movie = jsonObject.getJSONObject("data");
        map.addAttribute("movie", movie);
        map.put("title", movie.get("name") + "免费在线观看-掌上小品免费在线观看最新搞笑小品" + movie.get("name"));

        //  记录浏览历史
        JSONObject recordsToRecordObject = new JSONObject();
        recordsToRecordObject.put("user_name", username);
        recordsToRecordObject.put("id", _id);
        recordsToRecordObject.put("name", movie.getString("name"));
        recordsToRecordObject.put("type", movie.getString("type"));
        recordsToRecordObject.put("type2", "null");
        recordsToRecordObject.put("src", movie.getString("src"));
        recordsToRecordObject.put("url", movie.getString("url"));
        recordsToRecordObject.put("browse_type", "piece");
        recordsToRecordObject.put("device_uuid", request.getHeader("user-agent"));
        recordsToRecordObject.put("device_version", System.getProperty("os.version"));
        recordsToRecordObject.put("device_platform", System.getProperty("os.name"));
        String recordsUrl = Configs.API + "/records/add";
        CommonUtils.doPost(recordsUrl, recordsToRecordObject);

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
    public String getMoreMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "type", defaultValue = "全部") String type, @RequestParam(value = "type2", defaultValue = "全部") String type2, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "key_word", defaultValue = "null") String key_word) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "piece");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  每页大小
        Integer pageSize = 30;
        //  获取影视类型
        String typeUrl = Configs.API + "/piece/type/get/all";
        JSONObject typeObject = CommonUtils.doGet(typeUrl);
        JSONArray movieTypes = new JSONArray();
        JSONArray movieTypes2 = new JSONArray();
        movieTypes.add("全部");
        typeObject.getJSONArray("data").forEach(object -> {
            object = (JSONObject) object;
            Object name = ((JSONObject) object).get("name");
            movieTypes.add(name);
            if (name.equals(type)) {
                movieTypes2.add("全部");
                movieTypes2.addAll(((JSONObject) object).getJSONArray("types"));
            }
        });

        //  获取影视资源数量
        String countMovieUrl = Configs.API + "/count/get?source_type=piece&type=" + type + "&type2=" + type2 + "&page_index=" + page_index + "&page_size=" + pageSize + "&key_word=" + key_word + "";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取影视数据
        String moreMovieUrl = Configs.API + "/piece/get/all?type=" + type + "&type2=" + type2 + "&page_index=" + page_index + "&page_size=" + pageSize + "&key_word=" + key_word + "";
        JSONObject movieObject = CommonUtils.doGet(moreMovieUrl);

        //  获取页数相关信息
        Integer pageIndex = Integer.parseInt(page_index);
        Integer totalPage = count / pageSize;
        totalPage = count % pageSize == 0 ? totalPage : totalPage + 1;
        List<Integer> pages = CommonUtils.getPages(count, pageIndex, pageSize, totalPage);

        map.addAttribute("movieTypes", movieTypes);
        map.addAttribute("movieTypes2", movieTypes2);
        map.addAttribute("movieTypes2Count", movieTypes2.size());
        map.addAttribute("count", count);
        map.addAttribute("movies", movieObject.getJSONArray("data"));
        map.addAttribute("type", type);
        map.addAttribute("type2", type2);
        map.addAttribute("page_index", pageIndex);
        map.addAttribute("page_size", pageSize);
        map.addAttribute("total_page", totalPage);
        map.addAttribute("key_word", key_word);
        map.addAttribute("pages", pages);
        map.addAttribute("title", type + "频道第" + page_index + "页-免费在线观看-掌上小品");
        return "more-movie.html";
    }

    /**
     * 搜索影视
     *
     * @param map        数据映射
     * @param page_index 当前页
     * @param key_word   关键词
     * @return 搜索结果页
     */
    @RequestMapping("/search")
    public String searchMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "key_word", defaultValue = "null") String key_word) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "piece");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  获取影视资源数量
        String countMovieUrl = Configs.API + "/count/get?type=全部&source_type=piece&key_word=" + key_word + "";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取影视数据
        Integer pageSize = 30;
        String moreMovieUrl = Configs.API + "/piece/get/all?type=全部&key_word=" + key_word + "&page_index=" + page_index + "&page_size=" + pageSize;
        JSONObject movieObject = CommonUtils.doGet(moreMovieUrl);

        //  获取页数相关信息
        Integer pageIndex = Integer.parseInt(page_index);
        Integer totalPage = count / pageSize;
        totalPage = count % pageSize == 0 ? totalPage : totalPage + 1;
        List<Integer> pages = CommonUtils.getPages(count, pageIndex, pageSize, totalPage);

        map.addAttribute("count", count);
        map.addAttribute("movies", movieObject.getJSONArray("data"));
        map.addAttribute("page_index", pageIndex);
        map.addAttribute("page_size", pageSize);
        map.addAttribute("total_page", totalPage);
        map.addAttribute("key_word", key_word);
        map.addAttribute("pages", pages);
        map.addAttribute("title", key_word + "-掌上小品小品搜索");

        return "search-movie.html";

    }

}
