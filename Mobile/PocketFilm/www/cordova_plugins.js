cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-app-version.AppVersionPlugin",
    "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
    "pluginId": "cordova-plugin-app-version",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-file-opener2.FileOpener2",
    "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
    "pluginId": "cordova-plugin-file-opener2",
    "clobbers": [
      "cordova.plugins.fileOpener2"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "integrator-cordova-plugin-downloader.Downloader",
    "file": "plugins/integrator-cordova-plugin-downloader/www/Downloader.js",
    "pluginId": "integrator-cordova-plugin-downloader",
    "clobbers": [
      "cordova.plugins.Downloader"
    ]
  },
  {
    "id": "cordova-plugin-streaming-media.StreamingMedia",
    "file": "plugins/cordova-plugin-streaming-media/www/StreamingMedia.js",
    "pluginId": "cordova-plugin-streaming-media",
    "clobbers": [
      "streamingMedia"
    ]
  },
  {
    "id": "cordova-plugin-exoplayer.ExoPlayer",
    "file": "plugins/cordova-plugin-exoplayer/www/exoplayer.js",
    "pluginId": "cordova-plugin-exoplayer",
    "clobbers": [
      "ExoPlayer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-app-version": "0.1.9",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-file-opener2": "2.2.0",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "3.1.2",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-screen-orientation": "3.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-x-socialsharing": "5.4.7",
  "integrator-cordova-plugin-downloader": "0.0.1",
  "cordova-plugin-streaming-media": "2.2.0",
  "cordova-plugin-exoplayer": "2.5.4"
};
// BOTTOM OF METADATA
});