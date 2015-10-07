$(document).ready(function(){
    function writeInfo(info){
        $("#result").html(info);
    }

    $("#mul").click(function(){
        writeInfo(calc.mul(getVal('#arg1'),getVal('#arg2')));
    })

    $("#add").click(function(){
        writeInfo(calc.add(getVal('#arg1'),getVal('#arg2')));
    })

    function getVal(id){
        var val = parseInt($(id).val());
        if(!checkVal(val)){
            return null;
        }
        return val;
    }
    }

    function checkVal(val){
        if(!val || val == 'NaN'){
            return false;
        }
        return true;
    }
})
