$(function () {
    //  推荐
    var recommendations_url = API + "/recommendations/get/user?user_name=" + username + "&browse_type=drama&page_size=" + pageSize;
    //  热门推荐
    var hottest_movies_url = API + "/drama/get/all?page_size=" + pageSize;
    //  今日更新
    var today_movies_url = API + "/get/today?type=drama";
    //  今日更新数据量
    var today_count_url = API + "/count/get/today?type=drama";
    get_recommendations(recommendations_url, hottest_movies_url, today_movies_url, today_count_url, 'cainixihuan', 'rementuijian', 'jinrigengxin')
})

/**
 * 获取推荐数据
 */
function get_recommendations(recommendations_url, hottest_movies_url, today_movies_url, today_count_url, recommendations_id, hottest_movies_id, today_movies_id) {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: recommendations_url,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            recommendations = data.data
            if (recommendations.length > 0) {
                var html = '<div class="index-tj-l"><h3 class="title index-color clearfix">&nbsp;猜你喜欢</h3><ul>'
                for (i in recommendations) {
                    recommendation = recommendations[i]
                    html = html + '<div class="qcontainer1">'
                    for (j in recommendation.movie) {
                        movie = recommendation.movie[j]
                        html = html + '<div class="film1"><div class="face1 front1"><li class="p2 MPli1"><a class="link-hover" target="_blank" href="/play?_id=' + movie._id + '&source_index=0&type_index=0" title="' + movie.name + '"><img class="lazy" data-original="' + movie.src + '" src="http://5nj.com/template/Datll/images/load.gif" alt="' + movie.name + '"><span class="index5njcom titletj5nj"><i>' + movie.name + '</i></span></a></li></div><div class="face1 back1"><li class="p2 MPli1"><a class="link-hover" target="_blank" href="/play?_id=' + movie._id + '&source_index=0&type_index=0" title="' + movie.name + '"><img class="lazy" data-original="' + movie.src + '" src="http://5nj.com/template/Datll/images/load.gif" alt="' + movie.name + '"><span class="video-bg"></span><span class="lzbz"><p class="name">' + movie.name + '</p><p class="actor">' + movie.type + '</p></span><p class="other"><i></i></p></a></li></div></div>'
                    }
                    html = html + '</div></ul>'
                }
                $('#main').html(html)
                $('#rementuijian').show()
            }
        }
    })
}