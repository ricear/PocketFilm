package com.grayson.album.config;

import com.grayson.album.intercepter.MVCIntercepter;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 影视配置器
 */
@Configuration
public class MVCConfigurer extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        super.addInterceptors(registry);
        registry.addInterceptor(new MVCIntercepter()).addPathPatterns("/**");
    }
}
