function user (name, age, gender, weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = '100 kg.';

}

var user1 = new user('Игорь', '27лет', 'мужчина');

user1.tall="190 sm";

console.log (user1.name);
console.log (user1.age);
console.log (user1.gender);
console.log (user1.weight);
console.log (user1.tall);

console.log(user1.__proto__)
console.log(user.__proto__)

class hello {
    constructor(a, b, c) {
        this.name=a;
        this.age=b;
        this.weight=c;
    }
}
var hello2 = new hello("вадик", "43 лет", "435 кг");
console.log(hello2.name + ", " + hello2.age+ ", " + hello2.weight);