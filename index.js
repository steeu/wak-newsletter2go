
/**
 * newsletter to go api https://www.newsletter2go.ch/features/newsletter-api-rest/
 * @param key    {String} Newsletter2Go API key
 */
 
Newsletter2Go = function(key) {
	try {
		this.host = 'https://www.newsletter2go.de';
		this.key = key;		
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * http post request
 * @param url    {String} Newsletter2Go API URL
 * @param params {String} serialized parameter string
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.post = function(url, params) {
	try {
	    var result;
	    
	    if (os.isWindows) {
    		var http = new XMLHttpRequest({host: __CONFIG.PROXY_HOST, port: __CONFIG.PROXY_PORT});

            // open request
    		http.open('POST', url, true);
    		// send the proper header information along with the request
    		http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    		http.setRequestHeader('Content-length', params.length);
    		http.setRequestHeader('Connection', 'close');
    		// callback function when the state changes.
    		http.onreadystatechange = function() { 
    		    if (http.readyState == 4 && http.status == 200) {
    		        result = JSON.parse(http.response);
    		    }
    		};
    		// send request
    		http.send(params); 		
	    } else if (os.isLinux || os.isMac) {
	        var worker;

          	// execute curl	
         	worker = SystemWorker.exec('curl --data ' + params + ' ' + url, null);
         	// parse output
         	if (WAKTOOLS.isJSON(worker.output.toString())) {
         	    result = JSON.parse(worker.output.toString());
            } else {
                result = worker.output.toString();
            };
	    };
	    
	    return result;
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * serialize parameter object
 * @param params {Object} parameter object
 * @return       {String} serialized parameter string
 */

Newsletter2Go.prototype.serialize = function(params) {
	try {
		var str = [],
			params = params || {};

		// add api key to params
		params.key = this.key;
		// traverse object
		for(var p in params) {
			if (params.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
			}
		}
			
		return str.join("&");
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * create newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.createNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/create/newsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * create receipent
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.createRecipient = function(params) {
	try {
		return this.post(this.host + '/de/api/create/recipient/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * delete all groups from newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.deleteAllGroupsFromNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/delete/allgroupsfromnewsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * delete receipent
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.deleteRecipient = function(params) {
	try {
		return this.post(this.host + '/de/api/create/recipient/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * get groups
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getGroups = function(params) {
	try {
		return this.post(this.host + '/de/api/get/groups/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};


/**
 * get groups by newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getGroupsByNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/get/groupsbynewsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * get all recipients
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getRecipients = function(params) {
	try {
		return this.post(this.host + '/de/api/get/recipients/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * get newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/get/newsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * get all newsletters
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getNewsletters = function(params) {
	try {
		return this.post(this.host + '/de/api/get/newsletters/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * get statistics
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getStatistics = function(params) {
	try {
		return this.post(this.host + '/de/api/get/statistics/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * send email
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.sendEmail = function(params) {
	try {
		return this.post(this.host + '/de/api/send/email/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * send newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.sendNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/send/newsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
 * set group to newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.setGroupToNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/set/grouptonewsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};

exports.Newsletter2Go = Newsletter2Go;