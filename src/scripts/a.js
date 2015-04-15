var A = (function () {
    function A() {
    }
    A.prototype.doSth = function () {
        console.log('123');
        return '';
    };
    return A;
})();
var a = new A();
a.doSth();
console.log(1);
var b = 2;
//# sourceMappingURL=a.js.map