if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var deff = $.Deferred();
        deff.resolve(value);
        return deff.promise();
    },

    manipulateRemoteData : function(url) {
    	var res;
        var deff = $.Deferred();

    	$.ajax(url).then(function(result){
            var people = [];
            for(i = 0; i < result["people"].length; i++){
                people.push(people.name);
            }
            deff.resolve(people.sort());
    	});
        return deff.promise();
    }
  };
});
