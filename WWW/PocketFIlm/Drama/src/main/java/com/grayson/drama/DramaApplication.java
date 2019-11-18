package com.grayson.drama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class DramaApplication {

    public static void main(String[] args) {
        SpringApplication.run(DramaApplication.class, args);
    }

}
