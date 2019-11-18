var href = window.location.href;
var type = href.indexOf('type') >= 0 ? href.split('type=')[1].split('&')[0] : '全部'
var type2 = href.indexOf('type2') >= 0 ? href.split('type2=')[1].split('&')[0] : '全部'
var region = href.indexOf('region') >= 0 ? href.split('region=')[1].split('&')[0] : null
var release_date = href.indexOf('release_date') >= 0 ? href.split('release_date=')[1].split('&')[0] : null
var page_index = href.indexOf('page_index') >= 0 ? href.split('page_index=')[1].split('&')[0] : 1
var pageSize = href.indexOf('pageSize') >= 0 ? href.split('pageSize=')[1].split('&')[0] : 30
var sort_type = href.indexOf('sort_type') >= 0 ? href.split('sort_type=')[1].split('&')[0] : 0
var key_word = href.indexOf('key_word') >= 0 ? href.split('key_word=')[1].split('&')[0] : null
$(function () {
    //  获取影视数据
    var more_movie_url = API + "/piece/get/all?type=" + type + "&type2=" + type2 + "&page_index=" + page_index + "&page_size=" + pageSize + "&key_word=" + key_word + "";
    get_movies(more_movie_url, 'more-movies')
    //  获取影视资源数量
    var count_movie_url = API + "/count/get?source_type=piece&type=" + type + "&type2=" + type2 + "&page_index=" + page_index + "&page_size=" + pageSize + "&key_word=" + key_word + "";
    get_movies_count(count_movie_url, 'pages')
})

/**
 * 获取影视数量
 */
function get_movies_count(url, id) {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: url,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            var count = data.data
            $('#count').text(count)
            var page_index = href.indexOf('page_index') >= 0 ? href.split('page_index=')[1].split('&')[0] : 1
            var pageSize = href.indexOf('pageSize') >= 0 ? href.split('pageSize=')[1].split('&')[0] : 30
            var page_index = parseInt(page_index)
            var total_page = parseInt(parseInt(count) / parseInt(pageSize))
            var total_page = parseInt(count) % parseInt(pageSize) == 0 ? total_page : total_page + 1
            var pages = []
            if (total_page <= 10) {
                for (var i = 1; i <= total_page; i++) {
                    pages.push(i);
                }
            } else if (page_index <= 5) {
                for (var i = 1; i <= 10; i++) {
                    pages.push(i);
                }
            } else if (page_index > total_page - 5) {
                for (var i = total_page - 9; i <= total_page; i++) {
                    pages.push(i);
                }
            } else {
                for (var i = page_index - 5; i <= page_index + 5; i++) {
                    pages.push(i);
                }
            }
            var html = ''
            var more_type = 'more'
            if (key_word != null) {
                more_type = 'search'
            }
            if (page_index <= 1) {
                html = html + '<em>首页</em><em>上一页</em>'
            } else if (page_index > 1) {
                html = html + '<a href="/'+more_type+'?type=' + type + '&type2=' + type2 + '&re_gion=' + region + '&release_date=' + release_date + '&page_index=' + 1 + '&sort_type=' + sort_type + '&key_word=' + key_word + '" class="pagelink_a">首页</a><a href="/'+more_type+'?type=' + type + '&type2=' + type2 + '&re_gion=' + region + '&release_date=' + release_date + '&page_index=' + (page_index - 1) + '&sort_type=' + sort_type + '&key_word=' + key_word + '" class="pagelink_a">上一页</a>'
            }
            html = html
            for (i in pages) {
                var page = pages[i]
                if (page == page_index) {
                    html = html + '<span class="pagenow ee">' + page + '</span>'
                } else {
                    html = html + '<a target="_self" class="pagelink_b ee" href="/'+more_type+'?type=' + type + '&type2=' + type2 + '&re_gion=' + region + '&release_date=' + release_date + '&page_index=' + page + '&sort_type=' + sort_type + '&key_word=' + key_word + '">' + page + '</a>'
                }
            }
            html = html + '<span class="pagelink_b">' + page_index + '/' + total_page + '</span>'
            if (page_index == total_page) {
                html = html + '<em>下一页</em><em>尾页</em>'
            } else {
                html = html + '<a href="/'+more_type+'?type=' + type + '&type2=' + type2 + '&re_gion=' + region + '&release_date=' + release_date + '&page_index=' + (page_index + 1) + '&sort_type=' + sort_type + '&key_word=' + key_word + '" class="pagelink_a">下一页</a><a href="/'+more_type+'?type=' + type + '&type2=' + type2 + '&re_gion=' + region + '&release_date=' + release_date + '&page_index=' + total_page + '&sort_type=' + sort_type + '&key_word=' + key_word + '" class="pagelink_a">尾页</a>'
            }
            $('#pages').html(html)
        }
    })
}