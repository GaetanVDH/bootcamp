var calc = (function(){
    'use strict'
    function add(x, y){
        console.log("add");
        return x + y;
    }

    function mul(x, y){
        console.log("mul");
        return x * y;
    }

    return {
        add: add,
        mul: mul
    }
})();
