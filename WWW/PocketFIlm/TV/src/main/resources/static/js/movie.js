$(function () {
    //  推荐
    var recommendations_url = API + "/recommendations/get/user?user_name="+username+"&browse_type=tv&page_size=" + pageSize;
    get_movies(recommendations_url, 'rementuijian')
    //  央视台
    var movies0_url = API + "/tv/get/all?type=央视台&page_size=" + pageSize;
    get_movies(recommendations_url, 'yangshitai')
    //  卫视台
    var movies1_url = API + "/tv/get/all?type=卫视台&page_size=" + pageSize;
    get_movies(movies1_url, 'weishitai')
    //  地方台
    var movies2_url = API + "/tv/get/all?type=地方台&page_size=" + pageSize;
    get_movies(movies2_url, 'difangtai')
    //  港澳台
    var movies3_url = API + "/tv/get/all?type=港澳台&page_size=" + pageSize;
    get_movies(movies3_url, 'gangaotai')
    
})