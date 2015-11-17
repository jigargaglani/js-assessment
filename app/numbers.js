if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        return parseInt(num,10).toString(2);
    },

    multiply: function(a, b) {
        var decLen = a.toString().split('.').length > 1 ? a.toString().split('.')[1].length : 0;
        var decLen_2 = b.toString().split('.').length > 1 ? b.toString().split('.')[1].length : 0;
        var totLen = parseInt(decLen,10) + parseInt(decLen_2,10);
        return parseFloat((parseFloat(a*b)).toPrecision(totLen));
    }
  };
});

