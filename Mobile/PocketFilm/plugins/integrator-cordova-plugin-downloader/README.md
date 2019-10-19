Android Downloader Cordova plugin
========

This plugin is designed to support downloading files using Android DownloadManager.


Installation
--------

```bash
cordova plugin add integrator-cordova-plugin-downloader
```

Usage
--------

```javascript

var request = {
	uri: '',
    title: '',
    description: '',
    mimeType: '',
    visibleInDownloadsUi: true,
    notificationVisibility: 0,
          
    // Either of the next three properties
	destinationInExternalFilesDir: {
		dirType: '',
		subPath: ''
	},
	destinationInExternalPublicDir: {
		dirType: '',
		subPath: ''
	},
	destinationUri: '',
	headers: [{header: 'Authorization', value: 'Bearer iaksjfd89aklfdlkasdjf'}]
};

this.downloader.download(request)
		.then((location) => console.log('File download location:' + location))
  		.catch((error) => console.error(error));
```

## Credits and License ##

Based on Emil Bay's cordova-plugin-android-downloadmanager(<https://github.com/emilbayes/cordova-plugin-android-downloadmanager>) 


