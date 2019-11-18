$(function () {
    //  今日更新
    var today_movies_url = API + "/get/today?type=piece";
    //  今日更新数据量
    var today_count_url = API + "/count/get/today?type=piece";
    get_today_movies(today_count_url, today_movies_url)
    //  电影
    var movies0_url = API + "/piece/get/all?type=赵家班&page_size=" + pageSize;
    get_movies(movies0_url, 'zhaojiaban')
    //  电视剧
    var movies1_url = API + "/piece/get/all?type=郭德纲&page_size=" + pageSize;
    get_movies(movies1_url, 'guodegang')
    //  综艺
    var movies2_url = API + "/piece/get/all?type=德云社&page_size=" + pageSize;
    get_movies(movies2_url, 'deyunshe')
    //  动漫
    var movies3_url = API + "/piece/get/all?type=小品&page_size=" + pageSize;
    get_movies(movies3_url, 'xiaopin')
    //  少儿
    var movies4_url = API + "/piece/get/all?type=电影&page_size=" + pageSize;
    get_movies(movies4_url, 'dianying')
})

/**
 * 获取今日更新数据
 * @param url
 */
function get_today_movies(today_count_url, today_movies_url) {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: today_count_url,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            today_count = data.data
            $.ajax({
                type: 'GET',
                contentType: "application/json",
                url: today_movies_url,
                dataType: 'json',
                cache: false,
                timeout: 600000,
                success: function (data) {
                    data = data.data
                    var html = ''
                    html = html + '<h3 class="title index-color">&nbsp;今日更新<span class="genxin"><a href="/?m=label-new.html" target="_blank" title="今日更新'+today_count+'部影片">'+today_count+'</a>部</span></h3><ul>'
                    for (i in data) {
                        j = parseInt(i) + 1
                        todayMovie = data[i]
                        html = html + '<div>'
                        if (j <= 3) {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.type2 + '</span><gm class="gs">0' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        } else if (j < 10) {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.type2 + '</span><gm>0' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        } else {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.type2 + '</span><gm>' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        }
                    }
                    html = html + '</div></ul>'
                    $('#jinrigengxin').html(html)
                }
            })
        }
    })
}