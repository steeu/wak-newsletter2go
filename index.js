
var baseURL = 'https://www.newsletter2go.de/de/api/';


/**
 * http post request
 * @param url    {String} Newsletter2Go API URL
 * @param params {String} serialized parameter string
 * @return       {Object} API response object
 */
 
var post = function(url, params) {
	try {
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

var serialize = function(obj) {
	try {
		var str = [];
		
		// traverse object
		for(var p in obj) {
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		}
			
		return str.join("&");
	} catch (e) {
		WAKTOOLS.log(e);
		return e;	
	}
}


/**
 * send email
 * @param params {Object} parameter object
 * @return       {Object} API response object
 */
 
var sendEmail = function(params) {
	try {
		return post(baseURL + 'send/email/', serialize(params))
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
 
var createNewsletter = function(params) {
	try {
		return post(baseURL + 'create/newsletter/', serialize(params))
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
 
var setGroupToNewsletter = function(params) {
	try {
		return post(baseURL + 'set/grouptonewsletter/', serialize(params))
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
 
var getGroupsByNewsletter = function(params) {
	try {
		return post(baseURL + 'get/groupsbynewsletter/', serialize(params))
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
 
var deleteAllGroupsFromNewsletter = function(params) {
	try {
		return post(baseURL + 'delete/allgroupsfromnewsletter/', serialize(params))
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
 
var sendNewsletter = function(params) {
	try {
		return post(baseURL + 'send/newsletter/', serialize(params))
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
 
var getStatistics = function(params) {
	try {
		return post(baseURL + 'get/statistics/', serialize(params))
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
 
var createRecipient = function(params) {
	try {
		return post(baseURL + 'create/recipient/', serialize(params))
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
 
var deleteRecipient = function(params) {
	try {
		return post(baseURL + 'create/recipient/', serialize(params))
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};


exports.sendEmail                     = sendEmail;
exports.createNewsletter              = createNewsletter;
exports.setGroupToNewsletter          = setGroupToNewsletter;
exports.getGroupsByNewsletter         = getGroupsByNewsletter;
exports.deleteAllGroupsFromNewsletter = deleteAllGroupsFromNewsletter;
exports.sendNewsletter                = sendNewsletter;
exports.getStatistics                 = getStatistics;
exports.createRecipient               = createRecipient;
exports.deleteRecipient               = deleteRecipient;