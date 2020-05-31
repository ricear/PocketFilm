$(function () {
    //  获取影视相关推荐
    var _id = window.location.href.split('_id=')[1].split('&')[0]
    var recommendations_url = API + "/recommendations/get?movie_id=" + _id + "&type=movie&page_size=" + play_recommendations_page_size;
    get_recommendations_movie(recommendations_url, 'xiangguantuijian')
})