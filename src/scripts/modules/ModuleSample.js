/**
 * Created by laury.lu on 2015/4/21.
 */
(function(){
    function add(a,b){
        return parseInt(a)+parseInt(b);
    }
    function minus(a,b){
        return parseInt(a)-parseInt(b);
    }
    var exports = {
        add:add,
        minus:minus
    };

    if(this===global){
        module.exports = exports

    }else{

        window.TUtils = exports
    }
})();