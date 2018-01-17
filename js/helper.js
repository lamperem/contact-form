/**
 * @author     Gustavo Lopez <@lamperem>
 * @version    1.0.0
 */

(function() {

	var debug = function(message){
			console.log('Debug: ' + message);
		},
		errorRequest = function(){},
		responseRequest = function(response){			
			//debug(response);
		},		
		getRequest = function(url, success, error){
		    var req = false;
		    try{
		        // most browsers
		        req = new XMLHttpRequest();
		    } catch (e){
		        // IE
		        try{
		            req = new ActiveXObject("Msxml2.XMLHTTP");
		        } catch(e) {
		            // try an older version
		            try{
		                req = new ActiveXObject("Microsoft.XMLHTTP");
		            } catch(e) {
		                return false;
		            }
		        }
		    }
		    if (!req) return false;
		    if (typeof success != 'function') success = function () {};
		    if (typeof error!= 'function') error = function () {};
		    req.onreadystatechange = function(){
		        if(req.readyState == 4) {
		            return req.status === 200 ? 
		                success(req.responseText) : error(req.status);
		        }
		    }
		    req.open("GET", url, true);
		    req.send(null);
		    return req;			
		},
		catchParameters = function(){
			var name = document.getElementById('name').value,
				email = document.getElementById('email').value,
				message = document.getElementById('message').value;
				url = 'php/send.php?' + 'name=' + name + '&email=' + email + '&message=' + message;
			
			//debug(name + email + message);
			getRequest(url,responseRequest,errorRequest);

		},
		attachFormSubmit = function(id,action,debug){
		    var form = document.getElementById(id);
		    form.addEventListener('submit',function(ev){
		    	ev.preventDefault();
		    	if (typeof action != 'function') action = function () {};
		    	if (typeof debug != 'function') debug = function () {};
		    	//debug('submit form action');
		    	action();	    	
		    });
		};

	document.addEventListener("DOMContentLoaded", function(ev) { 
	  attachFormSubmit('contactus',catchParameters,debug);
	});

})();