/**
 * Simplify sending requests in non-browser clients to the REST interface.
 */
var XHR = function () {

	// Relative endpoint URL for REST calls
	this._webappUrl = config.ixUrl.substring(0, config.ixUrl.length - 3);
	this._restUrl = this._webappUrl + '/rest/';

	/**
	 * Send a request and return results wrapped in a Promise object.
	 * @param method HTTP method, POST, PUT, GET.
	 * @param url Target URL
	 * @param data Optional data to be sent.
	 * @param contentType Optional type of data to be sent.
	 * @return Response object wrapped into Promise.
	 */
	this._send = function (method, url, data, contentType) {

		var me = this;

		// Authorization header
		if (config.authenticationMethod === 'Basic') {
			me.authHeader = "Basic " + btoa(config.loginUser + ":" + config.loginPwd);
		}
		else if (config.authenticationMethod === 'Bearer') {
			me.authHeader = "Bearer " + config.ticket;
		}


		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();

			// Unsupported with CORS: xhr.withCredentials = true;

			xhr.onload = function () {

				if (this.status == 200) {
					resolve({
						content: xhr.response,
						contentType: xhr.getResponseHeader('Content-Type')
					});
				}
				else {
					reject(new Error('HTTP ' + this.status));
				}
			};

			xhr.onerror = function () {
				reject(new Error('HTTP ' + this.status));
			};

			xhr.open(method, url);

			xhr.setRequestHeader('Authorization', me.authHeader);

			// Send request.
			if (data) {
				if (contentType) xhr.setRequestHeader('Content-Type', contentType);
				xhr.send(data);
			}
			else {
				xhr.send();
			}
		});
	};

	/**
	 * Send a POST request to the Indexserver REST API.
	 * @param path URI path of the rest resource, starts with '/'. Example: /IXServicePortIF/checkoutSord
	 * @param obj Object to be sent. 
	 * @return Response object wrapped into Promise.
	 */
	this.restcall = function (path, obj) {
		var data = obj ? JSON.stringify(obj) : null;
		return this._send('POST', this._restUrl + path, data, 'application/json')
			.then(this._parseResponse);
	};

	/**
	 * Send POST request with data object and files.
	 * @param path URI path of the rest resource, starts with '/'. Example: IXServicePortIF/checkinDocEnd
	 * @param obj Object to be sent. 
	 * @param files Files to be uploaded.
	 * @return Response object wrapped into Promise.
	 */
	this.restcallWithStreams = function (path, obj, files) {
		var data = new FormData();

		var jsObj = JSON.stringify(obj);
		data.append("data", jsObj);

		for (var i = 0; i < files.length; i++) {
			data.append("files", files[i]);
		}

		return this._send('POST', this._restUrl + path, data)
			.then(this._parseResponse);
	};

	/**
	 * Send file into a temporary storage for subsequent checkin.
	 * @param path URI path of the rest resource, starts with '/'. Example: IXServicePortIF/checkinDocEnd
	 * @param obj Object to be sent. 
	 * @param files Files to be uploaded.
	 * @return Response object wrapped into Promise.
	 */
	this.upload = function (file, contentType) {
		contentType = contentType || 'application/octet-stream';
		return this._send('POST', this._restUrl + 'BUtility/upload', file, contentType)
			.then(this._parseResponse);
	};

	/**
	 * Parse JSON formatted response.
	 * If the response contains an exception message, throw this message as Error.
	 * @param JSON response received from Indexserver
	 * @return Result object.
	 */
	this._parseResponse = function (response) {
		const result = JSON.parse(response.content);
		if (result.exception) {
			console.log(result.exception);
			throw new Error(result.exception);
		}
		return result.result;
	}

	/**
	 * Download file from the given resource path.
	 * @param path Resource path
	 * @return File data as Blob wrapped into a Promise.
	 */
	this.download = function (path) {
		return this._send('GET', this._restUrl + path)
			.then(response => {
				return new Blob([response.content], { type: response.contentType });
			});
	};

	/**
	 * Delete a Sord object finally.
	 * @pram Sord object or Sord ID/GUID.
	 * @return Empty Promise object.
	 */
	this.purgeSord = function (sordOrId) {

		if (!sordOrId) return;

		var objId = 0;

		if (typeof sordOrId === 'object') {
			objId = sordOrId.id;
		}
		else {
			objId = sordOrId;
		}

		var params = {
			objId: objId,
			deleteOptions: {
				deleteFinally: false
			}
		};

		return this.restcall('IXServicePortIF/deleteSord', params)
			.then(() => {
				params.deleteOptions.deleteFinally = true;
				return this.restcall('IXServicePortIF/deleteSord', params);
			});
	};
};

var xhr = new XHR();

