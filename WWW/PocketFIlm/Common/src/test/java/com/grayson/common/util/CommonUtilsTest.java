package com.grayson.common.util;

import org.junit.Test;

import static org.junit.Assert.*;

public class CommonUtilsTest {

    @Test
    public void saveHtml() {
        CommonUtils commonUtils = new CommonUtils();
        commonUtils.saveHtml("http://film.grayson.top/main", "html", "main.html");
    }
}