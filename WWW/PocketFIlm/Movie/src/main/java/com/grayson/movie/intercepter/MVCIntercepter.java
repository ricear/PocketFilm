package com.grayson.movie.intercepter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.config.Configs;
import com.grayson.common.util.CommonUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 影视拦截器
 */
public class MVCIntercepter implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //  设置response查询的码表
        response.setCharacterEncoding("UTF-8");
        //  通过一个头"Content-type"告知客户端使用何种码表
        response.setHeader("Content-type", "text/html;charset=UTF-8");
        String cookieName = "userInfo";
        Boolean existCookie = CommonUtils.existCookie(request, cookieName);
        String url = request.getRequestURI().toString();
        if (!existCookie && url.contains("play")) {
            response.sendRedirect(Configs.LOGIN_API);
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
