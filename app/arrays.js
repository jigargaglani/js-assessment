if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for(i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var temparr = [];
        for(i = 0; i < arr.length; i++){
            if(arr[i] !== item) temparr.push(arr[i]);
        }
        return temparr;
    },

    removeWithoutCopy : function(arr, item) {
        for(i = 0; i < arr.length; i++){
            if(arr[i] === item) {
                arr.splice(i,1);
                i = i - 1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length - 1, 1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var newArr = arr1.concat(arr2);
        return newArr;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var cnt = 0;
        for (i=0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                cnt++;
            }
        }
        return cnt;
    },

    duplicates : function(arr) {
        var sortedArr = arr.sort();
        var dupArr = [];
        for(i = 0; i < arr.length - 1; i++){
            if(sortedArr[i] == sortedArr[i+1]){
                if(dupArr.indexOf(sortedArr[i]) == -1)
                    dupArr.push(sortedArr[i]);
            }
        }
        return dupArr;
    },

    square : function(arr) {
        var squares = [];
        for (i = 0; i < arr.length; i++) {
            squares.push(arr[i]*arr[i]);
        }
        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var indexes = [];
        for(i = 0; i < arr.length; i++){
            if (arr[i] === target)
                indexes.push(i);
        }
        return indexes;
    }
  };
});
