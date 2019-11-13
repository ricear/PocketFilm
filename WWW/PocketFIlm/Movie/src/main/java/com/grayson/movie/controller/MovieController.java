package com.grayson.movie.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.util.CommonUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import com.grayson.common.config.Configs;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.Null;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
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
        JSONArray records = CommonUtils.getRecords(request, "movie");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        Integer pageSize = 18;

        //  推荐
        String recommendationsUrl = Configs.API + "/recommendations/get/user?user_name=" + username + "&browse_type=movie&page_size=" + pageSize;
        //  热门推荐
        String hottestMoviesUrl = Configs.API + "/get/today?type=movie&sort_type=2&page_size=" + pageSize;
        JSONObject recommendationsObject = CommonUtils.doGet(recommendationsUrl);
        JSONObject hottestMoviesObject = CommonUtils.doGet(hottestMoviesUrl);
        map.addAttribute("recommendations", recommendationsObject.getJSONArray("data"));
        map.addAttribute("hottestMovies", hottestMoviesObject.getJSONArray("data"));

        //  电影
        String movies0Url = Configs.API + "/movie/get/all?type=0&page_size=" + pageSize;
        //  电视剧
        String movies1Url = Configs.API + "/movie/get/all?type=1&page_size=" + pageSize;
        //  综艺
        String movies2Url = Configs.API + "/movie/get/all?type=2&page_size=" + pageSize;
        //  动漫
        String movies3Url = Configs.API + "/movie/get/all?type=3&page_size=" + pageSize;
        //  少儿
        String movies4Url = Configs.API + "/movie/get/all?type=4&page_size=" + pageSize;
        //  今日更新
        String todayMoviesUrl = Configs.API + "/get/today?type=movie";
        //  今日更新数据量
        String todayCountUrl = Configs.API + "/count/get/today?type=movie";
        JSONObject movies0Object = CommonUtils.doGet(movies0Url);
        JSONObject movies1Object = CommonUtils.doGet(movies1Url);
        JSONObject movies2Object = CommonUtils.doGet(movies2Url);
        JSONObject movies3Object = CommonUtils.doGet(movies3Url);
        JSONObject movies4Object = CommonUtils.doGet(movies4Url);
        JSONObject todayMoviesObject = CommonUtils.doGet(todayMoviesUrl);
        JSONObject todayCountObject = CommonUtils.doGet(todayCountUrl);
        map.addAttribute("movies0", movies0Object.getJSONArray("data"));
        map.addAttribute("movies1", movies1Object.getJSONArray("data"));
        map.addAttribute("movies2", movies2Object.getJSONArray("data"));
        map.addAttribute("movies3", movies3Object.getJSONArray("data"));
        map.addAttribute("movies4", movies4Object.getJSONArray("data"));
        map.addAttribute("todayMovies", todayMoviesObject.getJSONArray("data"));
        map.addAttribute("todayCount", todayCountObject.getInteger("data"));
        map.addAttribute("title", "掌上影视_免费在线观看电影电视剧综艺动漫韩剧港剧台剧泰剧欧美剧日剧");
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
    public String playMovie(ModelMap map, HttpServletRequest request, @RequestParam("_id") String _id, @RequestParam("source_index") Integer sourceIndex, @RequestParam("type_index") Integer typeIndex) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "movie");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  影视详情
        String url = Configs.API + "/movie/get/_id?_id=" + _id;

        //  推荐
        Integer pageSize = 12;
        String recommendationsUrl = Configs.API + "/recommendations/get?movie_id=" + _id + "&type=movie&page_size=" + pageSize;
        JSONObject recommendationsObject = CommonUtils.doGet(recommendationsUrl);
        map.addAttribute("recommendations", recommendationsObject.getJSONArray("data"));

        JSONObject jsonObject = CommonUtils.doGet(url);
        JSONObject movie = jsonObject.getJSONObject("data");
        map.addAttribute("movie", movie);
        map.put("source_index", sourceIndex);
        map.put("type_index", typeIndex);
        JSONObject sourceObject = jsonObject.getJSONObject("data").getJSONArray("sources").getJSONObject(sourceIndex);
        map.put("source", sourceObject);
        String currentUrl = sourceObject.getJSONArray("types").getJSONObject(typeIndex).getString("url");
        String playUrl = CommonUtils.getParseUrl("movie", currentUrl);
        map.put("play_url", playUrl);
        map.put("title", "《" + jsonObject.getJSONObject("data").get("name") + "》免费在线观看-策驰影院免费在线观看高清电影" + jsonObject.getJSONObject("data").get("name"));

        //  记录浏览历史
        JSONObject recordsToRecordObject = new JSONObject();
        recordsToRecordObject.put("user_name", username);
        recordsToRecordObject.put("id", _id);
        recordsToRecordObject.put("name", movie.getString("name"));
        recordsToRecordObject.put("type", movie.getString("type"));
        recordsToRecordObject.put("type2", movie.getString("type2"));
        recordsToRecordObject.put("src", movie.getString("src"));
        recordsToRecordObject.put("url", jsonObject.getJSONObject("data").getJSONArray("sources").getJSONObject(sourceIndex).getJSONArray("types").getJSONObject(typeIndex).getString("url"));
        recordsToRecordObject.put("browse_type", "movie");
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
     * @param map          数据映射
     * @param type         影视第一种类型
     * @param type2        影视第二种类型
     * @param region       地区
     * @param release_date 发布日期
     * @param page_index   当前页
     * @param sort_type    排序方式
     * @param key_word     关键词
     * @return 影视数据
     */
    @RequestMapping("/more")
    public String getMoreMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "type", defaultValue = "0") String type, @RequestParam(value = "type2", defaultValue = "全部") String type2, @RequestParam(value = "re_gion", defaultValue = "全部") String region, @RequestParam(value = "release_date", defaultValue = "全部") String release_date, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "sort_type", defaultValue = "0") String sort_type, @RequestParam(value = "key_word", defaultValue = "") String key_word) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "movie");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  影视类型
        List<String> typeNames = new ArrayList<>();
        typeNames.addAll(Arrays.asList("电影", "电视剧", "综艺", "动漫", "少儿"));
        //  每页大小
        Integer pageSize = 30;
        //  获取影视类型
        String typeUrl = Configs.API + "/movie/type/get/all";
        JSONObject typeObject = CommonUtils.doGet(typeUrl);
        JSONArray movieTypesTemp = typeObject.getJSONArray("data");
        JSONArray movieTypes = new JSONArray();
        if (type.equals("0") || type.equals("1")) {
            //  电影、电视剧，只返回分类、地区、年代
            for (int i = 0; i < movieTypesTemp.size(); i++) {
                JSONObject jsonObject = movieTypesTemp.getJSONObject(i);
                if (jsonObject.get("type").equals("剧情")) continue;
                if (jsonObject.get("type").equals("分类")) {
                    if (type.equals("0")) {
                        Object[] newNames = jsonObject.getJSONArray("names").stream().filter(object -> {
                                    object = String.valueOf(object);
                                    return (object.equals("全部") || ((String) object).endsWith("片")) && (!((String) object).endsWith("会员影片"));
                                }
                        ).toArray();
                        jsonObject.put("names", newNames);
                    } else {
                        Object[] newNames = jsonObject.getJSONArray("names").stream().filter(object -> {
                                    object = String.valueOf(object);
                                    return (object.equals("全部") || ((String) object).endsWith("剧")) && (!((String) object).equals("电视剧"));
                                }
                        ).toArray();
                        jsonObject.put("names", newNames);
                    }
                }
                movieTypes.add(jsonObject);
            }
        } else {
            //  综艺、动漫，只返回地区、年代
            for (int i = 0; i < movieTypesTemp.size(); i++) {
                JSONObject jsonObject = movieTypesTemp.getJSONObject(i);
                if (jsonObject.get("type").equals("分类") || jsonObject.get("type").equals("剧情")) continue;
                movieTypes.add(jsonObject);
            }
        }

        //  获取影视资源数量
        String countMovieUrl = Configs.API + "/count/get?source_type=movie&type=" + type + "&type2=" + type2 + "&region=" + region + "&release_date=" + release_date + "&page_index=" + page_index + "&page_size=" + pageSize + "&sort_type=" + sort_type + "&key_word=" + key_word + "";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取影视数据
        String moreMovieUrl = Configs.API + "/movie/get/all?type=" + type + "&type2=" + type2 + "&region=" + region + "&release_date=" + release_date + "&page_index=" + page_index + "&page_size=" + pageSize + "&sort_type=" + sort_type + "&key_word=" + key_word + "";
        JSONObject movieObject = CommonUtils.doGet(moreMovieUrl);

        //  获取页数相关信息
        Integer pageIndex = Integer.parseInt(page_index);
        Integer totalPage = count / pageSize;
        totalPage = count % pageSize == 0 ? totalPage : totalPage + 1;
        List<Integer> pages = CommonUtils.getPages(count, pageIndex, pageSize, totalPage);

        map.addAttribute("movieTypes", movieTypes);
        map.addAttribute("count", count);
        map.addAttribute("movies", movieObject.getJSONArray("data"));
        map.addAttribute("type", type);
        map.addAttribute("type2", type2);
        map.addAttribute("region", region);
        map.addAttribute("release_date", release_date);
        map.addAttribute("page_index", pageIndex);
        map.addAttribute("page_size", pageSize);
        map.addAttribute("total_page", totalPage);
        map.addAttribute("sort_type", Integer.parseInt(sort_type));
        map.addAttribute("key_word", key_word);
        map.addAttribute("pages", pages);
        map.addAttribute("typeName", typeNames.get(Integer.parseInt(type)));
        map.addAttribute("title", typeNames.get(Integer.parseInt(type)) + "频道第"+page_index+"页-免费在线观看-掌上影视");
        return "more-movie.html";
    }

    /**
     * 搜索影视
     * @param map   数据映射
     * @param page_index    当前页
     * @param sort_type 排序方式
     * @param key_word  关键词
     * @return  搜索结果页
     */
    @RequestMapping("/search")
    public String searchMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "sort_type", defaultValue = "0") String sort_type, @RequestParam(value = "key_word", defaultValue = "null") String key_word) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "movie");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  获取影视资源数量
        String countMovieUrl = Configs.API + "/count/get?source_type=movie&key_word=" + key_word + "";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取影视数据
        Integer pageSize = 30;
        String moreMovieUrl = Configs.API + "/movie/get/all?key_word="+key_word+"&page_index=" + page_index + "&page_size=" + pageSize  + "&sort_type=" + sort_type;
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
        map.addAttribute("sort_type", Integer.parseInt(sort_type));
        map.addAttribute("key_word", key_word);
        map.addAttribute("pages", pages);
        map.addAttribute("title", key_word + "-掌上影视影片搜索");

        return "search-movie.html";

    }
    
}
