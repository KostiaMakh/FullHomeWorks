function minePyramida() {
    var mineMasive = [];
    var a = document.getElementById('inputData').value;
    var i = 0;
    var tire = " - ";
    var reshetka = " # ";

    if (isNaN(parseInt(a))) {
        alert("Необходимо ввести число!")
    } else {
        for (i = 0; i <= parseInt(a) - 1; i++) {
            mineMasive.push(tire.repeat((parseInt(a) - i) / 2) + reshetka.repeat(i + 1) + tire.repeat((parseInt(a) - i) / 2) + '\n');
        }
        alert(mineMasive.join(''));

    }
}