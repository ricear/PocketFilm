cordova.define("integrator-cordova-plugin-downloader.Downloader", function(require, exports, module) {
var exec = require('cordova/exec');

exports.download = function (arg0, success, error) {
    exec(success, error, 'Downloader', 'download', [arg0]);
};

});
