package com.grayson.drama.scheduler;

import com.grayson.common.config.Configs;
import com.grayson.common.util.CommonUtils;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 定时器类
 */
@Component
public class MovieScheduler {

    /**
     * 每隔1分钟渲染并保存首页核心内容
     */
    @Scheduled(fixedRate = 1000*60*30)
    public void saveMainHtml() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
        CommonUtils commonUtils = new CommonUtils();
        System.out.println("开始渲染：" + dateFormat.format(new Date()));
        String filePath = Configs.MAIN_HTML_SAVE_FILE_PATH + "/Drama/src/main/resources/static/html";
        String fileName = "main.html";
        commonUtils.saveHtml("http://drama.grayson.top/main", filePath, fileName);
        System.out.println("渲染结束：" + dateFormat.format(new Date()));
    }

}
