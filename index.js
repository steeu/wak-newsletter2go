
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
		return post('https://www.newsletter2go.de/de/api/send/email/', serialize(params))
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};

exports.sendEmail = sendEmail;