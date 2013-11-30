extract-zipfile
===============

Plugin to extract ZIP files in Cordova 3.X

Plugin receives the file name and path "/home/user/.../file.zip" and returns the path to the folder where ZIP is extracted.

Installation
------------

	$ cordova plugin add https://github.com/michogar/extract-zipfile.git

Use
---

	var ZipClient = new ExtractZipFilePlugin();

	/**
	*
	* @param {String} filename path complete to the file (e.g. '/home/user/file.zip')
	* @param {function} onSuccessCallback
	* @param {function} onErrorCallback
	*
	*/
	ZipClient.extractFile(filename, onSuccessCallback, onErrorCallback);

	/**
	*
	* @param {String} filepath
	*
	*/
	function onSuccessCallback(filepath) {
	
		<... code ...>

	}

	/**
	*
	* @param {Object} err
	*
	*/
	function onErrorCallback(err) {
	
		<... code ...>

	}

