package com.grayson.www;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class WWWApplication {

    public static void main(String[] args) {
        SpringApplication.run(WWWApplication.class, args);
    }

}
