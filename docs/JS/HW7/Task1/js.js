var myArray = [1, 2, 5, 54, 543, 54];
myArray.find = function () {
    if (this.length > 3) {
        return ('OK!')
    }
    throw new Error ('too short');
}

console.log(myArray.find());

var myArray2 = [234, 324234, 454353, 4543, 4534];
console.log(myArray.find.call(myArray2));

try{
    var myArray3 = [234];
    console.log(myArray.find.call(myArray3));
}
catch (e) {
    console.log(e)
}
