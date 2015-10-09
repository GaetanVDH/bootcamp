
'use strict'
class Calc {
    constructor(){

    }

    add(x, y){
        return x + y;
    }

    mul(x, y){
        return x * y;
    }
}

// var calc = (function(){

//     return{
//         add:add,
//         mul:mul
//     }
// })();

var calc = new Calc();

module.exports = calc;
