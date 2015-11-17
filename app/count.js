if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var timeout;
    	var log = function(){
    		console.log(start++);

    		if(start <= end)
    			timeout = setTimeout(log,100);
		}
		log();

		return {
			cancel: function(){
				clearTimeout(timeout);
			}
		}
    }
  };
});