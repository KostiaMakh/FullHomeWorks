function sum(a, b) {
    a = parseInt(document.getElementById("firstNumber").value);
    b = parseInt(document.getElementById("secondNumber").value);
    var s;
    if (isNaN(b)){
        var c=10;
            s=a+c;
            document.getElementById('finalResultHW4T1').innerText = "Число А = " + a + '\n' + "Число B = не задано, заменяем его на С = 10" + '\n' + 'Результат сложения числа А и С = ' + s;
        }
    else {
        s=a+b;
        return document.getElementById('finalResultHW4T1').innerText = "Число А = " + a + '\n' + "Число B = " + b + '\n' + 'Результат сложения числа А и В = ' + s;
    }
}


