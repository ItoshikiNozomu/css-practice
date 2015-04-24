/**
 * Created by laury.lu on 2015/4/21.
 */

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function minus(a, b) {
    return parseInt(a) - parseInt(b);
}

function doAsync(callback){
    //return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('async job complete');
           // resolve(1);
            callback(1);
        },1000);
   // });
}

function doPromise(){
    return new Promise(function (resolve,reject) {
        setTimeout(function(){
            resolve(1);
        },1000)
    })
}
var exports = {
    add: add,
    minus: minus,
    doAsync:doAsync,
    doPromise:doPromise
};


module.exports = exports

