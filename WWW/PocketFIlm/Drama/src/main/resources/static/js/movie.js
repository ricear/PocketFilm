$(function () {
    //  今日更新
    var today_movies_url = API + "/get/today?type=drama";
    //  今日更新数据量
    var today_count_url = API + "/count/get/today?type=drama";
    get_today_movies(today_count_url, today_movies_url)
    //  电影
    var movies0_url = API + "/drama/get/all?type=京剧&page_size=" + pageSize;
    get_movies(movies0_url, 'jingju')
    //  电视剧
    var movies1_url = API + "/drama/get/all?type=豫剧&page_size=" + pageSize;
    get_movies(movies1_url, 'yuju')
    //  综艺
    var movies2_url = API + "/drama/get/all?type=秦腔&page_size=" + pageSize;
    get_movies(movies2_url, 'qinqiang')
    //  动漫
    var movies3_url = API + "/drama/get/all?type=民间小调&page_size=" + pageSize;
    get_movies(movies3_url, 'minjianxiaodiao')
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
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.type + '</span><gm class="gs">0' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        } else if (j < 10) {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.type + '</span><gm>0' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        } else {
                            html = html + '<li><a href="/play?_id=' + todayMovie._id + '&source_index=0&type_index=0" target="_blank" title="todayMovie.name"><span class="bz">' + todayMovie.type + '</span><gm>' + j + '</gm><span class="az">' + todayMovie.name + '</span></a></li>'
                        }
                    }
                    html = html + '</div></ul>'
                    $('#jinrigengxin').html(html)
                }
            })
        }
    })
}