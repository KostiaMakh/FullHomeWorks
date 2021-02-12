var C = "New Name";
var D = "New Title";

var E = "weight";
var F = "animal";

class NewObj {
    constructor(var1, var2) {
        this.name = var1;
        this.title = var2;
    }

    showName() {
        return this.name;
    }

    showTitle() {
        return this.title;
    }
}

//new obj1//
var newObj1 = new NewObj(C, D);
console.log(newObj1.name);
console.log(newObj1.title);
console.log(newObj1.__proto__);
console.log(newObj1.__proto__.__proto__);
console.log(newObj1.showName());
console.log(newObj1.showTitle());
console.log("-------------------------------------------");
