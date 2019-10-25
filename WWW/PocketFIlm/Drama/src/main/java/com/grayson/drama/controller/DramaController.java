package com.grayson.drama.controller;

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
public class DramaController {

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
        JSONArray records = CommonUtils.getRecords(request, "drama");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        Integer pageSize = 18;
        //  推荐
        String recommendationsUrl = Configs.API + "/recommendations/get?browse_type=drama&page_size=" + pageSize;
        JSONObject recommendationsObject = CommonUtils.doGet(recommendationsUrl);
        map.addAttribute("recommendations", recommendationsObject.getJSONArray("data"));
        map.addAttribute("title", "掌上戏曲_免费在线观看京剧豫剧越剧秦腔民间小调二人转");
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
        JSONArray records = CommonUtils.getRecords(request, "drama");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        String url = Configs.API + "/drama/get/_id?_id=" + _id;
        JSONObject jsonObject = CommonUtils.doGet(url);
        JSONObject movie = jsonObject.getJSONObject("data");
        map.addAttribute("movie", movie);
        map.put("source_index", sourceIndex);
        map.put("type_index", typeIndex);
        map.put("source", movie.getJSONArray("sources").getJSONObject(sourceIndex));
        map.put("title", "《" + movie.get("name") + "》免费在线观看-掌上戏曲免费在线观看高清戏曲直播" + movie.get("name"));

        //  记录浏览历史
        JSONObject recordsToRecordObject = new JSONObject();
        recordsToRecordObject.put("user_name", username);
        recordsToRecordObject.put("id", _id);
        recordsToRecordObject.put("name", movie.getString("name"));
        recordsToRecordObject.put("type", movie.getString("type"));
        recordsToRecordObject.put("type2", "null");
        recordsToRecordObject.put("src", movie.getString("src"));
        recordsToRecordObject.put("url", jsonObject.getJSONObject("data").getJSONArray("sources").getJSONObject(sourceIndex).getJSONArray("types").getJSONObject(typeIndex).getString("url"));
        recordsToRecordObject.put("browse_type", "drama");
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
    public String getMoreMovie(ModelMap map, HttpServletRequest request, @RequestParam(value = "type", defaultValue = "全部") String type, @RequestParam(value = "page_index", defaultValue = "1") String page_index, @RequestParam(value = "key_word", defaultValue = "") String key_word) {
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "drama");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  每页大小
        Integer pageSize = 30;
        //  获取影视类型
        String typeUrl = Configs.API + "/drama/type/get/all";
        JSONObject typeObject = CommonUtils.doGet(typeUrl);
        JSONArray movieTypes = new JSONArray();
        movieTypes.add("全部");
        typeObject.getJSONArray("data").forEach(object -> {
            object = (JSONObject)object;
            movieTypes.add(((JSONObject) object).get("name"));
        });

        //  获取影视资源数量
        String countMovieUrl = Configs.API + "/count/get?source_type=drama&type=" + type + "&page_index=" + page_index + "&page_size=" + pageSize + "&key_word=" + key_word + "";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取影视数据
        String moreMovieUrl = Configs.API + "/drama/get/all?type=" + type + "&page_index=" + page_index + "&page_size=" + pageSize + "&key_word=" + key_word + "";
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
        map.addAttribute("page_index", pageIndex);
        map.addAttribute("page_size", pageSize);
        map.addAttribute("total_page", totalPage);
        map.addAttribute("key_word", key_word);
        map.addAttribute("pages", pages);
        map.addAttribute("title", type + "频道第" + page_index + "页-免费在线观看-掌上戏曲");
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
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }

        //  获取浏览记录
        JSONArray records = CommonUtils.getRecords(request, "drama");

        map.addAttribute("username", username);
        map.addAttribute("records", records);

        //  获取影视资源数量
        String countMovieUrl = Configs.API + "/count/get?type=全部&source_type=drama&key_word=" + key_word + "";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取影视数据
        Integer pageSize = 30;
        String moreMovieUrl = Configs.API + "/drama/get/all?type=全部&key_word=" + key_word + "&page_index=" + page_index + "&page_size=" + pageSize + "&sort_type=" + sort_type;
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
        map.addAttribute("title", key_word + "-掌上戏曲戏曲搜索");

        return "search-movie.html";

    }

}
