/**
 * Created by 魏鹏 on 2018/3/5.
 */

var mongoose=require('mongoose');

/**
 * 影视的表结构
 */

module.exports=new mongoose.Schema({
    // id
    id: {
        type: String,
        default: '',
    },
    // 影视海报图片路径
    src: {
        type: String,
        default: '',
    },
    // 影视名
    name: {
        type: String,
        default: '',
    },
    // 更新时间
    update_time: {
        type: String,
        default: '',
    },
    // 主演
    actors: {
        type: Array,
        default: [],
    },
    // 影视类型(电影、电视剧、综艺、动漫)
    type: {
        type: String,
        default: '',
    },
    // 影视类型(具体影视类型)
    type2: {
        type: String,
        default: '',
    },
    // 评分
    score: {
        type: String,
        default: '',
    },
    // 发布日期
    release_date: {
        type: String,
        default: '',
    },
    // 介绍
    description: {
        type: String,
        default: '',
    },
    // 影视源
    sources: {
        type: Array,
        default: [],
    },
    // 地区
    region: {
        type: String,
        default: '',
    },

});
