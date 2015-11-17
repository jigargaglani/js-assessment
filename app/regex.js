if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (/([A-Za-z])\1/).test(str);
    },

    endsWithVowel : function(str) {
        return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers : function(str) {
        var res = str.match(/\d{3}/);
        return res ? res[0] : false;
    },

    matchesPattern : function(str) {
        return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },
    isUSD : function(str) {

    }
  };
});
