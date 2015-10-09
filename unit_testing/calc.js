class Calculator{
    add(x, y){
        if(!x){
            return y;
        }
        if(!y){
            return x;
        }
        return x*1 + y*1;
    }

    multiply(x, y){
        return x * y;
    }
}

var calc = new Calculator();
