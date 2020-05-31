package com.grayson.album.controller;

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
public class MovieController {

    /**
     * 获取相册列表
     *
     * @param map 数据映射
     * @return 首页
     */
    @RequestMapping("/")
    public String getAlbums(ModelMap map, HttpServletRequest request) {
        CommonUtils commonUtils = new CommonUtils();
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = commonUtils.getCookieValue(request, cookieName);
        String username = null;
        String user_type = "common";
        String userInfoUrl = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
            userInfoUrl = Configs.API + "/user/info?_id=" + userInfo.getString("_id");
            JSONObject userInfoObject = commonUtils.doGet(userInfoUrl);
            user_type = userInfoObject.getJSONObject("userInfo").getString("type");
        }
        //  获取相册列表
        String albumsUrl = null;
        if (user_type.equals("administrator")) {
            albumsUrl = Configs.API + "/album/get";
        } else {
            albumsUrl = Configs.API + "/album/get?is_private=false";
        }
        System.out.println(albumsUrl);
        JSONObject albumsObject = commonUtils.doGet(albumsUrl);
        map.addAttribute("username", username);
        map.addAttribute("albums", albumsObject.getJSONArray("data"));
        map.addAttribute("count", albumsObject.getString("count"));
        map.addAttribute("title", "Grayson's movie");
        return "album_list";
    }

    /**
     * 获取照片
     *
     * @param map 数据映射
     * @return 首页
     */
    @RequestMapping("/photo")
    public String getPhotos(ModelMap map, HttpServletRequest request, @RequestParam(value = "album_name", defaultValue = "null") String albumName ) {
        CommonUtils commonUtils = new CommonUtils();
        //  获取用户名
        String cookieName = "userInfo";
        JSONObject userInfo = commonUtils.getCookieValue(request, cookieName);
        String username = null;
        if (userInfo != null) {
            username = userInfo.getString("username");
        }
        //  获取相册列表
        String title = "";
        String subtitle = "";
        String albumsUrl = Configs.API + "/photo/get?album_name=" + albumName;
        JSONObject albumsObject = commonUtils.doGet(albumsUrl);
        JSONObject albumsObjectJSONObject = null;
        //  如果相册名称为空，则显示全部照片
        if (albumName == "" || albumName == "null") {
            title = "全部";
        } else {
            albumsObjectJSONObject = albumsObject.getJSONObject("album");
            title = albumsObjectJSONObject.getString("name");
            subtitle = albumsObjectJSONObject.getString("description");
        }
        map.addAttribute("username", username);
        map.addAttribute("photos", albumsObject.getJSONArray("data"));
        map.addAttribute("count", albumsObject.getString("count"));
        map.addAttribute("title", title);
        map.addAttribute("subtitle", subtitle);
        return "photo_list";
    }

}