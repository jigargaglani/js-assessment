if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var list = [];
    	var files = data.files;
    	function getFiles(fileobj){
    		files = fileobj.files;
    	}

    	for (i = 0; i < files.length; i++) {
        	var file = files[i];
        	if (typeof(file) === 'string' && list.indexOf(file) == -1) {
        		list.push(file);
        	} else {
          		getFiles(files[i]);
        	}
      	}
      	return list;
    },

    permute: function(arr) {

    }
  };
});
