class mineFirst {
    constructor (a, b, c) {
        this.name = a;
        this.title = b;
        this.height = c;
    }
    hello() {
        console.log('Hello method called');
    }
    sayHi(a){
        console.log('say HI ' + a + '!' + this.test());
    }
    test(){
        return(' this is test');
    }
}

var mineSecond = new mineFirst("NAME", "TITLE", "HIEGHT");
var nameUser = 'Vasiliy';
console.log(mineSecond.name);
console.log(mineSecond.title);
mineSecond.hello();
mineSecond.sayHi(nameUser);