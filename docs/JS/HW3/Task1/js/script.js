function getMin() {
    var masData = [];
    do {
        var inputN = prompt('Введите эллемент масива');
        if (isNaN(inputN)) {
            alert('необходимо ввести какое-то число!');
        } else {
            masData.push(parseInt(inputN));
        }
    }
    while (inputN != null);
    masData.pop();

    alert('Введенный массив: ' + masData + '\n' + '\n' + 'Наименьшее число из введеноого массива: ' + Math.min(...masData));
}
