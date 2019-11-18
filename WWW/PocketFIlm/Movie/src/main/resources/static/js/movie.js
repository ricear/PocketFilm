$(function () {
    //  今日更新
    var today_movies_url = API + "/get/today?type=movie";
    //  今日更新数据量
    var today_count_url = API + "/count/get/today?type=movie";
    get_today_movies(today_count_url, today_movies_url)
    //  电影
    var movies0_url = API + "/movie/get/all?type=0&page_size=" + pageSize;
    get_movies(movies0_url, 'dianying')
    //  电视剧
    var movies1_url = API + "/movie/get/all?type=1&page_size=" + pageSize;
    get_movies(movies1_url, 'dianshiju')
    //  综艺
    var movies2_url = API + "/movie/get/all?type=2&page_size=" + pageSize;
    get_movies(movies2_url, 'zongyi')
    //  动漫
    var movies3_url = API + "/movie/get/all?type=3&page_size=" + pageSize;
    get_movies(movies3_url, 'dongman')
    //  少儿
    var movies4_url = API + "/movie/get/all?type=4&page_size=" + pageSize;
    get_movies(movies4_url, 'shaoer')
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
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.update_status + '</span><gm class="gs">0' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        } else if (j < 10) {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.update_status + '</span><gm>0' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        } else {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.update_status + '</span><gm>' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        }
                    }
                    html = html + '</div></ul>'
                    $('#jinrigengxin').html(html)
                }
            })
        }
    })
}