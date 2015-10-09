require.config({
    paths: {
        'jquery': "./bower_components/jquery/dist/jquery",
        'domready': "./bower_components/requirejs-domready/domReady"
    }
})

require(['./calc', 'jquery', 'domready'], function(calc, $, domReady){

    var $calc = $('#calc');
    var $val1 = $calc.find($('#arg1'));
    var $val2 = $calc.find($('#arg2'));

    domReady(function(){
        $("#mul").click(function(){
            writeInfo(calc.mul(getVal($val1),getVal($val2)));
        })

        $("#add").click(function(){
            writeInfo(calc.add(getVal($val1),getVal($val2)));
        })
    })

    function getVal(id){
        var val = parseInt((id).val());
        if(!checkVal(val)){
            return null;
        }
        return val;
    }

    function checkVal(val){
        if(!val || val == 'NaN'){
            return false;
        }
        return true;
    }

    function writeInfo(info){
        $("#result").html(info);
    }
})

// commonJS
// var mod = require('./mod');
// mod.action();
