interface  MyFunc{
    doSth():string;

}
class A implements  MyFunc{
    doSth():string{
        console.log('123');
        return '';
    }
}

var a = new A();
a.doSth();
console.log(1);
var b = 2;