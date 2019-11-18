package com.grayson.common.util;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.grayson.common.config.Configs;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.scheduling.annotation.Async;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Null;
import java.io.*;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

/**
 * 工具类
 */
public class CommonUtils {

    /**
     * 获取解析地址
     *
     * @param movieType 影视类型
     * @param url       影视播放地址
     * @return 解析后的播放地址
     */
    public String getParseUrl(String movieType, String url) {
        String parseUrl = "";
        if (movieType == "movie") {
            if (url.startsWith("aHR0")) {
                parseUrl = Configs.JX40 + url;
            } else {
                parseUrl = Configs.RDHK + url;
            }
        } else if (movieType == "tv") {
            if (url.contains("player")) {
                parseUrl = url;
            } else {
                parseUrl = Configs.FO97 + url;
            }
        } else if (movieType == "drama") {
            parseUrl = Configs.RDHK + url;
        } else if (movieType == "piece") {
            parseUrl = Configs.RDHK + url;
        }
        return parseUrl;
    }

    /**
     * 获取浏览记录
     *
     * @param request     HTTP请求
     * @param browse_type 浏览类型
     * @return 浏览记录
     */
    @Async
    public JSONArray getRecords(HttpServletRequest request, String browse_type) {
        String cookieName = "userInfo";
        JSONObject userInfo = getCookieValue(request, cookieName);
        if (userInfo != null) {
            String username = userInfo.getString("username");
            Integer recordsPageSize = 10;
            //  浏览记录
            String recordsUrl = Configs.API + "/records/get/all?user_name=" + username + "&browse_type=" + browse_type + "&page_size=" + recordsPageSize;
            JSONObject recordsObject = doGet(recordsUrl);
            JSONArray records = recordsObject.getJSONArray("data");
            return records;
        }
        return new JSONArray();
    }

    /**
     * 判断 request 中是否存在指定名称的 cookie
     *
     * @param request    HTTP 请求
     * @param cookieName cookie 名称
     * @return
     */
    public Boolean existCookie(HttpServletRequest request, String cookieName) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null) return false;
        for (Cookie cookieTemp : cookies) {
            if (cookieTemp.getName().equals("userInfo")) {
                return true;
            }
        }
        return false;
    }

    /**
     * 从 request 中获取指定名称的 cookie 的值
     *
     * @param request    HTTP 请求
     * @param cookieName cookie 名称
     * @return
     */
    public static JSONObject getCookieValue(HttpServletRequest request, String cookieName) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookieTemp : cookies) {
                if (cookieTemp.getName().equals("userInfo")) {
                    String value = URLDecoder.decode(cookieTemp.getValue());
                    return JSONObject.parseObject(value);
                }
            }
        }
        return null;
    }

    /**
     * 获取页码数据
     *
     * @param count     数据总数
     * @param pageIndex 当前页
     * @param pageSize  每页大小
     * @return 页码数据
     */
    public static List<Integer> getPages(Integer count, Integer pageIndex, Integer pageSize, Integer totalPage) {
        List<Integer> pages = new ArrayList<>();
        if (totalPage <= 10) {
            for (int i = 1; i <= totalPage; i++) {
                pages.add(i);
            }
        } else if (pageIndex <= 5) {
            for (int i = 1; i <= 10; i++) {
                pages.add(i);
            }
        } else if (pageIndex > totalPage - 5) {
            for (int i = totalPage - 9; i <= totalPage; i++) {
                pages.add(i);
            }
        } else {
            for (int i = pageIndex - 5; i <= pageIndex + 5; i++) {
                pages.add(i);
            }
        }
        return pages;
    }

    /**
     * 执行POST请求
     *
     * @param url  请求地址
     * @param json 数据
     * @return
     */
    @Async
    public static String doPost(String url, JSONObject json) {
        String result = "";
        HttpPost post;
        post = new HttpPost(url);
        try {
            CloseableHttpClient httpClient = HttpClients.createDefault();

            post.setHeader("Content-Type", "application/json;charset=utf-8");
            post.addHeader("Authorization", "Basic YWRtaW46");
            StringEntity postingString = new StringEntity(json.toString(), "utf-8");
            post.setEntity(postingString);
            HttpResponse response = httpClient.execute(post);

            InputStream in = response.getEntity().getContent();
            BufferedReader br = new BufferedReader(new InputStreamReader(in, "utf-8"));
            StringBuilder strber = new StringBuilder();
            String line = null;
            while ((line = br.readLine()) != null) {
                strber.append(line + '\n');
            }
            br.close();
            in.close();
            result = strber.toString();
            if (response.getStatusLine().getStatusCode() != HttpStatus.SC_OK) {
                result = "服务器异常";
            }
        } catch (Exception e) {
            System.out.println("请求异常");
            throw new RuntimeException(e);
        } finally {
            post.abort();
        }
        return result;
    }

    /**
     * 执行GET请求
     *
     * @param url 求求地址
     * @return 返回的数据
     */
    @Async
    public JSONObject doGet(String url) {
        HttpClient client = HttpClients.createDefault();
        // 要调用的接口方法
        HttpGet get = new HttpGet(url);
        JSONObject jsonObject = null;
        try {
            get.addHeader("content-type", "text/xml");
            org.apache.http.HttpResponse res = client.execute(get);
            String response1 = EntityUtils.toString(res.getEntity());
            if (res.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                jsonObject = JSONObject.parseObject(response1);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return jsonObject;
    }

}
