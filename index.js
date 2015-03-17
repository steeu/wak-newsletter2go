
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
 * create newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.createNewsletter = function(params) {
	try {
<<<<<<< HEAD
		return this.post(this.host + '/de/api/create/newsletter/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/create/newsletter/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/create/recipient/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/create/recipient/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/delete/allgroupsfromnewsletter/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/delete/allgroupsfromnewsletter/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/create/recipient/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/create/recipient/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/get/groups/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/get/groups/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/get/groupsbynewsletter/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/get/groupsbynewsletter/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
<<<<<<< HEAD
 * get all recipients
=======
 * get newsletter
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
<<<<<<< HEAD
Newsletter2Go.prototype.getRecipients = function(params) {
	try {
		return this.post(this.host + '/de/api/get/recipients/', this.serialize(params));
=======
Newsletter2Go.prototype.getNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/get/newsletter/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
	}
};


/**
<<<<<<< HEAD
 * get newsletter
=======
 * get all newsletters
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
<<<<<<< HEAD
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
=======
Newsletter2Go.prototype.getNewsletters = function(params) {
	try {
		return this.post(this.host + '/de/api/get/newsletters/', this.serialize(params))
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
	}
};


/**
 * get statistics
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.getStatistics = function(params) {
	try {
<<<<<<< HEAD
		return this.post(this.host + '/de/api/get/statistics/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/get/statistics/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
	    if (os.isWindows) {
    		var http = new XMLHttpRequest({host: __CONFIG.PROXY_HOST, port: __CONFIG.PROXY_PORT}),
    		    url = url + '?' + params,
    			result;

            // log request
            console.log('[NEWSLETTER-2-GO] Make api request [url] ' + url);
            // open request
    		http.open("POST", url, true);
    		// send the proper header information along with the request
    		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    		http.setRequestHeader("Content-length", params.length);
    		http.setRequestHeader("Connection", "close");
    		// callback function when the state changes.
    		http.onreadystatechange = function() { 
    		    if (http.readyState == 4 && http.status == 200) {
    		        result = JSON.parse(http.response);
    		    }
    		};
    		// send request
    		http.send();
    		
    		return result;
	    } else {
	        var url = url + '?' + params,
    			result;
    			
    		// execute shell command
	        result = execute('curl -X POST ' + url);
	        
	        return result;
	    };
=======
		var http = new XMLHttpRequest(),
			result;
		
		http.open("POST", url, true);
		// send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Content-length", params.length);
		http.setRequestHeader("Connection", "close");
		// callback function when the state changes.
		http.onreadystatechange = function() { 
		    if (http.readyState == 4 && http.status == 200) {
		        result = JSON.parse(http.response);
		    }
		};
		http.send(params);
		
		return result;
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/send/email/', this.serialize(params));
=======
		return this.post(this.host + '/de/api/send/email/', this.serialize(params))
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
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
<<<<<<< HEAD
		return this.post(this.host + '/de/api/send/newsletter/', this.serialize(params));
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
=======
		return this.post(this.host + '/de/api/send/newsletter/', this.serialize(params))
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
 * set group to newsletter
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
Newsletter2Go.prototype.setGroupToNewsletter = function(params) {
	try {
		return this.post(this.host + '/de/api/set/grouptonewsletter/', this.serialize(params))
	} catch (e) {
		WAKTOOLS.log(e);
		return e;
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
	}
};


<<<<<<< HEAD
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


/**
 * execute shell commands
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
var execute = function(command, stdIn){

	var result = {
		'console':{
			'stdIn':'',
			'stdOut':'',	
			'stdErr':''},
		'worker':{
			'hasStarted':false,
			'exitStatus':null,
			'forced':null}
	};
	
	result.console.stdIn = command;
	var worker = new SystemWorker(result.console.stdIn);
	worker.setBinary(true);
	worker.onmessage = function(e){
		if(!result.console.stdOut){
			result.console.stdOut = new Buffer(e.data.length);
			e.data.copy(result.console.stdOut);
		}else{
			var temp = new Buffer(result.console.stdOut.length + e.data.length);
			result.console.stdOut.copy(temp);
			e.data.copy(temp, result.console.stdOut.length);
			result.console.stdOut = temp.slice(0);
		}
	};
	worker.onerror = function(e){
		try{
			result.console.stdErr += e.data.toString('utf8');
		}catch(e){
    		for(var i = 0;i < e.messages.length;++i){
    			console.error('%s', e.messages[i]);			
    		}
		}
	};
	worker.onterminated = function(e){
		result.worker.hasStarted = e.hasStarted;
		result.worker.exitStatus = e.exitStatus;
		result.worker.forced = e.forced;			
		exitWait();
	};
	if(typeof stdIn === 'string' || stdIn instanceof Buffer){
		worker.postMessage(stdIn);
		worker.endOfInput();
	}			
	worker.wait();	

	return result;
}


=======
>>>>>>> 98d438e08875fcca85ea24fff8d35cf6ae5d381d
exports.Newsletter2Go = Newsletter2Go;