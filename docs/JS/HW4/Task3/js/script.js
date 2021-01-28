function calculateSolianka() {

    var normaMiasaPorc = 64;
    var normaSmMiasaPorc = 43;
    var normaOilPorc = 0.3;
    var normaGarlPorc = 0.45;
    var normaOnionPorc = 0.15;
    var normaTomatPorc = 0.15;
    var normaCucumberPorc = 0.5;
    var normaWaterPorc = 0.3;

    var calculationMetod = document.getElementById('selectComponent').value;
    var quantityOfSelectedComponent = parseInt(document.getElementById('quantityComponent').value);

    alert(calculationMetod + '\n' + quantityOfSelectedComponent);

    if (isNaN(quantityOfSelectedComponent)) {
        alert('Необходимо заполнить все поля');
    } else {
        if (calculationMetod===document.getElementById('metod1').value){
            selectNPortion (quantityOfSelectedComponent, normaMiasaPorc);
        }


}}

function selectNPortion (n, m){
    document.getElementById('outResult').innerText = "Количество порций - " + n + '\n' + "Мясо - " + Math.ceil(m*n) + '\n';
}
function selectNMeat (n){

}
function selectNSmMeat (n){

}

