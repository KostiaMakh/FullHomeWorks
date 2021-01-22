function calculateSolianka(){
    proverkaMiaso()
    proverkaSmokeMeat()
    proverkaOil()
}

function proverkaMiaso() {
    var n= parseInt(document.getElementById('meat').value);
    if (n<450){
        alert('Слишком мало мяса!' + '\n' + 'Рекомендуем добавить ' +(450 - n)+ ' г. мяса;');
    }
    else if (n>450){
        alert('Слишком много мяса!' + '\n' + 'Рекомендуем отложить ' +(n-450)+ ' г. мяса;');
    }
}
function proverkaSmokeMeat() {
    var n = parseInt(document.getElementById('smokeMeat').value);
    if (n<300){
        alert('Слишком мало копченостей!' + '\n' + 'Рекомендуем добавить ' +(300 - n)+ ' г. копченостей;');
    }
    else if (n>300){
        alert('Слишком много копченостей!' + '\n' + 'Рекомендуем отложить ' +(n-300)+ ' г. копченостей;');
    }
}
function proverkaOil() {
    var n = parseInt(document.getElementById('sunflowerOil').value);
    if (n<2){
        alert('Слишком мало подсолнечного масла!' + '\n' + 'Рекомендуем добавить ' +(2 - n)+ ' ст.л.');
    }
    else if (n>2){
        document.getElementById('outResult').innerText = ('Слишком много подсолнечного масла!' + '\n' + 'Рекомендуем уменьшить на ' +(n-2)+ ' ст.л.');
        alert('Слишком много подсолнечного масла!' + '\n' + 'Рекомендуем уменьшить на ' +(n-2)+ ' ст.л.');
    }
}