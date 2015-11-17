if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        var newFn = function(newstr){
            return str +', ' + newstr;
        }
        return newFn;
    },

    makeClosures : function(arr, fn) {
        var sqArr = [];
        var calFn = function(val){
            return function(){ 
                return fn(val); 
            };
        };

        for(i = 0; i < arr.length; i++){
            sqArr.push(calFn(arr[i]));
        }
        return sqArr;
    },

    partial : function(fn, str1, str2) {
        return function(newStr){
            return fn(str1, str2, newStr);
        };
    },

    useArguments : function() {
        var sum = 0;

        for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }

        return sum;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
