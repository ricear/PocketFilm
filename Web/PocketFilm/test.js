/**
 * @Author: Grayson
 * @Date: 2019/6/3
 */

var http = require("http");
var fs = require("fs");

function rc4(a, b) {
    for (var c, d = [
    ], e = 0, f = '', g = 0; g < 256; g++) d[g] = g;
    for (g = 0; g < 256; g++) e = (e + d[g] + a.charCodeAt(g % a.length)) % 256,
        c = d[g],
        d[g] = d[e],
        d[e] = c;
    g = 0,
        e = 0;
    for (var h = 0; h < b.length; h++) g = (g + 1) % 256,
        e = (e + d[g]) % 256,
        c = d[g],
        d[g] = d[e],
        d[e] = c,
        f += String.fromCharCode(b.charCodeAt(h) ^ d[(d[g] + d[e]) % 256]);
    return f
}
function translate(a, b) {
    for (var c = [
    ], d = 0; d < a.length; d++) {
        var e = 0;
        e = a[d] >= 'a' && a[d] <= 'z' ? a[d].charCodeAt(0) - 'a'.charCodeAt(0)  : a[d] - '0' + 26;
        for (var f = 0; f < 36; f++) if (b[f] == e) {
            e = f;
            break
        }
        e > 25 ? c[d] = e - 26 : c[d] = String.fromCharCode(e + 97)
    }
    return c.join('')
}

function decode64(a) {
    if (!a) return '';
    a = a.toString();
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array( - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 62, - 1, - 1, - 1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, - 1, - 1, - 1, - 1, - 1, - 1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, - 1, - 1, - 1, - 1, - 1);
    for (g = a.length, f = 0, h = ''; f < g; ) {
        do b = i[255 & a.charCodeAt(f++)];
        while (f < g && b == - 1);
        if (b == - 1) break;
        do c = i[255 & a.charCodeAt(f++)];
        while (f < g && c == - 1);
        if (c == - 1) break;
        h += String.fromCharCode(b << 2 | (48 & c) >> 4);
        do {
            if (d = 255 & a.charCodeAt(f++), 61 == d) return h;
            d = i[d]
        } while (f < g && d == - 1);
        if (d == - 1) break;
        h += String.fromCharCode((15 & c) << 4 | (60 & d) >> 2);
        do {
            if (e = 255 & a.charCodeAt(f++), 61 == e) return h;
            e = i[e]
        } while (f < g && e == - 1);
        if (e == - 1) break;
        h += String.fromCharCode((3 & d) << 6 | e)
    }
    return h
}

function encode64(a) {
    if (!a) return '';
    a = a.toString();
    var b,
        c,
        d,
        e,
        f,
        g,
        h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (d = a.length, c = 0, b = ''; c < d; ) {
        if (e = 255 & a.charCodeAt(c++), c == d) {
            b += h.charAt(e >> 2),
                b += h.charAt((3 & e) << 4),
                b += '==';
            break
        }
        if (f = a.charCodeAt(c++), c == d) {
            b += h.charAt(e >> 2),
                b += h.charAt((3 & e) << 4 | (240 & f) >> 4),
                b += h.charAt((15 & f) << 2),
                b += '=';
            break
        }
        g = a.charCodeAt(c++),
            b += h.charAt(e >> 2),
            b += h.charAt((3 & e) << 4 | (240 & f) >> 4),
            b += h.charAt((15 & f) << 2 | (192 & g) >> 6),
            b += h.charAt(63 & g)
    }
    return b
}

var e = [19,1,4,7,30,14,28,8,24,17,6,35,34,16,9,10,13,22,32,29,31,21,18,3,2,23,25,27,11,20,5,15,12,0,33,26];
a1= '4';
a2= '1';
a3 = 'b4et' ;
a4 = 'boa4';
TypeEnum = {
    "flv": 'flv',
    'mp4hd': 'mp4',
    'mp4hd2': 'flv',
    'mp4hd3': 'flv',
    '3gphd': 'mp4',
    '3gp': 'flv',
    'flvhd': 'flv'
}

var vid = 'XMzc5OTM0OTAyMA'
var URL_1 = "http://play.youku.com/play/get.json?vid="+vid+"&ct=12";

function Download_m3u8(b)
{
    var vid = 'XMzc5OTM0OTAyMA'
    var URL_2 = "http://pl.youku.com/playlist/m3u8?vid="+vid+"&type={type}&ts={ts}&keyframe=1&ep={ep}&sid={sid}&token={token}&ctype=12&ev=1&oip={oip}";

    var ts=parseInt((new Date).getTime() / 1000);
    console.log("ts:        "+ts);

    var type=TypeEnum['mp4hd'];
    console.log("type:        "+type);

    var f = rc4(translate(a3 + 'o0b' + a1, e).toString(), decode64(b.data.security.encrypt_string));
    var sid = f.split('_') [0];
    console.log("sid:        "+sid);

    var token = f.split('_') [1];
    console.log("token:        "+token);

    var ep = encodeURIComponent(encode64(rc4(translate(a4 + 'poz' + a2, e).toString(), sid + '_' + vid + '_' + token)));
    console.log("ep:        "+ep);

    var oip = b.data.security.ip;
    console.log("oip:        "+oip);

    var url_2=URL_2.replace(/{vid}/,vid).replace(/{ts}/,ts).replace(/{type}/,type).replace(/{sid}/,sid).replace(/{token}/,token).replace(/{ep}/,ep).replace(/{oip}/,oip);
    console.log(url_2);

    http.get(url_2,function(res)
    {
        res.on("error",function(err)
        {
            console.log(err);
        });

        var dataArray=[];
        res.on("data",function(data)
        {
            //console.log(data);
            dataArray.push(data);
        });

        res.on("end",function()
        {
            var fd = fs.openSync(target,"w");
            for(var key in dataArray)
            {
                fs.writeSync(fd,dataArray[key],0,dataArray[key].length,null);
            }
            fs.closeSync(fd);

            console.log("Done!");
        });
    })
}

var target = process.argv[3]+".m3u8";
//console.log(target);

var vid = 'XMzc5OTM0OTAyMA'
var url_1=URL_1.replace(/{vid}/,vid);

console.log(url_1);
http.get(url_1,function(res){
    res.on("error",function(err)
    {
        console.log(err);
    });

    var jsonString="";
    res.on("data",function(data)
    {
        jsonString+=data.toString();
    });

    res.on("end",function(){
        var jsonObject=JSON.parse(jsonString);
        //console.log(jsonObject.data);
        Download_m3u8(jsonObject);
    })
});