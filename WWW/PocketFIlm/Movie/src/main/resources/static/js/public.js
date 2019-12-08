$(function () {
    //  浏览记录
    var records_url = API + "/records/get/all?user_name=" + username + "&browse_type=" + browse_type + "&page_size=" + recordsPageSize;
    get_records(records_url)
})

/**
 * 获取浏览记录
 * @param url
 */
function get_records(url) {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: url,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            data = data.data
            var html = ''
            html = html + '<dt><span>观看记录</span></dt>'
            for (i in data) {
                j = parseInt(i) + 1
                record = data[i]
                html = html + '<dd class="even"><span>' + record.type2 + '</span><a href="/play?_id=' + record.id + '&source_index=0&type_index=0" class="hx_title">' + record.name + '</a></dd>'
            }
            $('#history_box').html(html)
        }
    })
}

/**
 * 获取推荐数据(电影)
 */
function get_recommendations_movie(url, id) {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: url,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            data = data.data
            if (data.length > 0) {
                var html = '<div class="index-area clearfix"><h3 class="title index-color">&nbsp;相关推荐</h3><ul>'
                for (i in data) {
                    movie = data[i].movie[0]
                    html = html + '<div class="qcontainer"><div class="film"><div class="face front"><li class="p2 MPli"><a class="link-hover" target="_blank" href="/play?_id=' + movie._id + '&source_index=0&type_index=0" title="' + movie.name + '"><img class="lazy" data-original="' + movie.src + '" src="' + movie.src + '" alt="' + movie.name + '"><span class="index5njcom titletj5nj"><i>' + movie.name + '</i></span><p class="other"><i>' + movie.update_status + '</i></p></a></li></div><div class="face back"><li class="p2 MPli"><a class="link-hover" target="_blank" href="/play?_id=' + movie._id + '&source_index=0&type_index=0" title="' + movie.name + '"><img class="lazy" data-original="' + movie.src + '" src="http://5nj.com/template/Datll/images/load.gif" alt="' + movie.name + '"><span class="video-bg"></span><span class="lzbz"><p class="name">' + movie.name + '</p><p class="actor">'
                    actors = movie.actors;
                    for (j in actors) {
                        actor = actors[j]
                        html = html + '<span>' + actor + '&nbsp;</span>'
                    }
                    html = html + '</p><p class="actor">' + movie.type2 + '</p><p class="actor">' + movie.release_date + '/' + movie.region + '</p></span><p class="other"><i></i></p></a></li></div></div></div>'
                }
                html = html + '</ul></div>'
                $('#' + id).html(html)
            }
        }
    })
}

/**
 * 获取电影数据
 */
function get_movies(url, id) {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: url,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            data = data.data
            var html = ''
            for (i in data) {
                movie = data[i]
                html = html + '<div class="qcontainer"><div class="film"><div class="face front"><li class="p2 MPli"><a class="link-hover" target="_blank" href="/play?_id=' + movie._id + '&source_index=0&type_index=0" title="' + movie.name + '"><img class="lazy" data-original="' + movie.src + '" src="' + movie.src + '" alt="' + movie.name + '"><span class="index5njcom titletj5nj"><i>' + movie.name + '</i></span><p class="other"><i>' + movie.update_status + '</i></p></a></li></div><div class="face back"><li class="p2 MPli"><a class="link-hover" target="_blank" href="/play?_id=' + movie._id + '&source_index=0&type_index=0" title="' + movie.name + '"><img class="lazy" data-original="' + movie.src + '" src="http://5nj.com/template/Datll/images/load.gif" alt="' + movie.name + '"><span class="video-bg"></span><span class="lzbz"><p class="name">' + movie.name + '</p><p class="actor">'
                actors = movie.actors;
                for (j in actors) {
                    actor = actors[j]
                    html = html + '<span>' + actor + '&nbsp;</span>'
                }
                html = html + '</p><p class="actor">' + movie.type2 + '</p><p class="actor">' + movie.release_date + '/' + movie.region + '</p></span><p class="other"><i></i></p></a></li></div></div></div>'
            }
            $('#' + id).html(html)
        }
    })
}