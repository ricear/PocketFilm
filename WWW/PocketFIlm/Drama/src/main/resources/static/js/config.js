// var API_HOST = 'http://api.grayson.top'
var API_HOST = 'http://103.45.178.220:9000'
var API = API_HOST + '/api'

var username = JSON.parse($.cookie('userInfo'))['username']
var pageSize = 18
var browse_type = 'drama'
var recordsPageSize = 10
var play_recommendations_page_size=12
var moreMoviesPageSize = 30