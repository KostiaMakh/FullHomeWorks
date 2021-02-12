class newClass extends Array {

}

var a = new newClass;

var d=342;
a.push(d);
a.push(d);

console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log(a.__proto__.__proto__.__proto__);
console.log(a.__proto__.__proto__.__proto__.__proto__);
console.log('----------------------------------------');
console.log(a);

class mineClassNew {
    constructor(a) {
        this.name = a;
    }
    vest(){
        return ('out ');
    }
}
const MineNewCl = new mineClassNew;
MineNewCl.prototype.vest = function () {
    console.log('HELLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOO');
}
MineNewCl.vest();