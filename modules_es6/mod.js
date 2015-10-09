// ES6

// export default function(){
//     console.log('Hello');
// }
// export var foo = function(){
//     console.log('Hello2');
// }

class Calc {
    add(x, y){
        return x + y;
    }

    mul(x, y){
        return x * y;
    }
}

class Car {
    start(){
        console.log("started");
    }
}

export var calc = new Calc();
export var CarClass = Car;
