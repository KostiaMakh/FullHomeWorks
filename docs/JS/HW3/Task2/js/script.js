
function calculateSolianka(){

    var meat= parseInt(document.getElementById('meat').value);
    var smokeMeat = parseInt(document.getElementById('smokeMeat').value);
    var oil = parseInt(document.getElementById('sunflowerOil').value);
    var garlic = parseInt(document.getElementById('garlic').value);
    var onion = parseInt(document.getElementById('onion').value);

    var mineFormulaSolianka = proverkaMiaso(meat)+proverkaSmokeMeat(smokeMeat)+proverkaOil(oil)+proverkaGarlic(garlic)+proverkaOnion(onion);

    if (isNaN(meat) || isNaN(smokeMeat) || isNaN(oil) || isNaN(garlic) || isNaN(onion)){
        alert('Необходимо заполнить все поля');
    }
    else {
    if (meat==='' && smokeMeat==='' && oil==='' && garlic==='' && onion==='') {
        alert(onion)
        alert('Ура!' + '\n' + 'Вы собрали идеальную солянку.');
    }
    else alert(mineFormulaSolianka);
}
}

function proverkaMiaso(n) {
    if (n<450){
        return('Слишком мало мяса!' + '\n' + 'Рекомендуем добавить ' +(450 - n)+ ' г. мяса;'+ '\n');
    }
    else if (n>450){
        return('Слишком много мяса!' + '\n' + 'Рекомендуем уменьшить колчество мяса на ' +(n-450)+ ' г.;'+ '\n');
    }
    else {
        return '';
    }
}
function proverkaSmokeMeat(n) {
    if (n<300){
        return('Слишком мало копченостей!' + '\n' + 'Рекомендуем добавить ' +(300 - n)+ ' г. копченостей;'+ '\n');
    }
    else if (n>300){
        return('Слишком много копченостей!' + '\n' + 'Рекомендуем уменьшить копченостей на ' +(n-300)+ ' г.;'+ '\n');
    }
    else {
        return '';
    }
}
function proverkaOil(n) {
    if (n<2){
        return('Слишком мало подсолнечного масла!' + '\n' + 'Рекомендуем добавить ' +(2 - n)+ ' ст.л. масла;'+ '\n');
    }
    else if (n>2){
        return('Слишком много подсолнечного масла!' + '\n' + 'Рекомендуем уменьшить количество масла на ' +(n-2)+ ' ст.л.'+ '\n');
    }
    else {
        return '';
    }
}
function proverkaGarlic(n) {
    if (n<2){
        return('Слишком мало чеснока!' + '\n' + 'Рекомендуем добавить ' +(2 - n)+ ' головку.'+ '\n');
    }
    else if (n>4){
        return('Слишком много чеснока!' + '\n' + 'Рекомендуем уменьшить на количество головок чеснока на ' +(n-4)+ ' шт.;'+ '\n');
    }
    else {
        return '';
    }
}
function proverkaOnion(n) {
    if (n<1){
        return('Слишком мало лука!' + '\n' + 'Рекомендуем добавить ' +(2 - n)+ ' луковички.'+ '\n');
    }
    else if (n>3){
        return('Слишком много лука!' + '\n' + 'Рекомендуем уменьшить на ' +(n-4)+ ' количество луковиц;'+ '\n');
    }
    else {
        return '';
    }
}