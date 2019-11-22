/**
 * Created by 魏鹏 on 2018/3/5.
 */

var mongoose=require('mongoose');

/**
 * 影视类型的表结构
 */

module.exports=new mongoose.Schema({

    // 类型
    type: {
        type: String,
        default: '',
    },
    // 名称
    names: {
        type: Array,
        default: [],
    },

});
