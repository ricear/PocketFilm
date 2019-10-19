package com.grayson.www.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.config.Configs;
import com.grayson.common.util.CommonUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.net.URLDecoder;
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

}
