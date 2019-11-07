package com.grayson.www.pojo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * 反馈信息 pojo 类
 */
public class Feedback {

    public String user_name;
    public String content;
    public String device_uuid;
    public String device_version;

    public String getUser_name() {
        return this.user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDevice_uuid() {
        return this.device_uuid;
    }

    public void setDevice_uuid(String device_uuid) {
        this.device_uuid = device_uuid;
    }

    public String getDevice_version() {
        return this.device_version;
    }

    public void setDevice_version(String device_version) {
        this.device_version = device_version;
    }

    public String getDevice_platform() {
        return this.device_platform;
    }

    public void setDevice_platform(String device_platform) {
        this.device_platform = device_platform;
    }

    public String device_platform;
}
