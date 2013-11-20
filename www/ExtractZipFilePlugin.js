/*
 Author: Vishal Rajpal
 Filename: ZipPlugin.js
 Created Date: 21-02-2012
 Modified Date: 21-02-2013
 Modified to comply with Cordova by: Ran Friedlender
 */

var exec = require('cordova/exec');

var ExtractZipFilePlugin = function() {
};

ExtractZipFilePlugin.prototype.extractFile = function(file, successCallback, errorCallback) {
	exec(successCallback, errorCallback, "ExtractZIP", "unzip", [file]);
};

module.exports = ExtractZipFilePlugin;