package com.grayson.piece;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class PieceApplication {

    public static void main(String[] args) {
        SpringApplication.run(PieceApplication.class, args);
    }

}
