package com.grayson.www.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.config.Configs;
import com.grayson.common.util.CommonUtils;
import com.grayson.www.pojo.Feedback;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;

@Controller
@RequestMapping("/")
public class WWWController {

    /**
     * 首页
     *
     * @return 首页
     */
    @RequestMapping("/")
    public String getMovie(ModelMap map, HttpServletRequest request) {
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        map.addAttribute("userInfo", userInfo);
        return "index.html";
    }

    /**
     * 登陆
     *
     * @return 登陆
     */
    @RequestMapping("/login")
    public String login(ModelMap map, HttpServletRequest request) {
        return "login.html";
    }

    /**
     * 注册
     *
     * @return 注册
     */
    @RequestMapping("/register")
    public String register() {
        return "register.html";
    }

    /**
     * 反馈
     *
     * @return 反馈
     */
    @RequestMapping("/feedback")
    public String feedback(ModelMap map, HttpServletRequest request, @RequestParam(value = "page_index", defaultValue = "1") String page_index) {

        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        map.addAttribute("userInfo", userInfo);

        Integer pageSize = 18;
        //  反馈信息
        String feedbackListUrl = Configs.API + "/feedback/get/all?page_index=" + page_index + "&page_size=" + pageSize;
        JSONObject feedbackObject = CommonUtils.doGet(feedbackListUrl);

        //  获取反馈信息数量
        String countMovieUrl = Configs.API + "/count/get/feedback";
        JSONObject countMovieObject = CommonUtils.doGet(countMovieUrl);
        Integer count = countMovieObject.getInteger("data");

        //  获取页数相关信息
        Integer pageIndex = Integer.parseInt(page_index);
        Integer totalPage = count / pageSize;
        totalPage = count % pageSize == 0 ? totalPage : totalPage + 1;
        List<Integer> pages = CommonUtils.getPages(count, pageIndex, pageSize, totalPage);

        map.addAttribute("feedbackList", feedbackObject.getJSONArray("data"));
        map.addAttribute("page_index", pageIndex);
        map.addAttribute("page_size", pageSize);
        map.addAttribute("total_page", totalPage);
        map.addAttribute("pages", pages);
        map.addAttribute("title", "掌上影视 - 反馈");
        return "feedback.html";
    }

    /**
     * 添加反馈
     *
     * @return 添加反馈
     */
    @RequestMapping("/feedback/add")
    public String feedbackRelease(ModelMap map, HttpServletRequest request, @RequestBody String g_content) {
        String cookieName = "userInfo";
        JSONObject userInfo = CommonUtils.getCookieValue(request, cookieName);
        String user_name = userInfo.getString("username");
        String content = null;
        try {
            content = URLDecoder.decode(g_content.split("&")[2].split("=")[1],"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String device_uuid = request.getHeader("user-agent");
        String device_version = System.getProperty("os.version");
        String device_platform = System.getProperty("os.name");
        Feedback feedback = new Feedback();
        feedback.setUser_name(user_name);
        feedback.setContent(content);
        feedback.setDevice_uuid(device_uuid);
        feedback.setDevice_version(device_version);
        feedback.setDevice_platform(device_platform);
        String feedbackAddUrl = Configs.API + "/feedback/add";
        CommonUtils.doPost(feedbackAddUrl, JSONObject.parseObject(JSON.toJSONString(feedback)));
        return "feedback-add.html";
    }

}
