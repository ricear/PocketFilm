package com.grayson.tv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class TVApplication {

    public static void main(String[] args) {
        SpringApplication.run(TVApplication.class, args);
    }

}
