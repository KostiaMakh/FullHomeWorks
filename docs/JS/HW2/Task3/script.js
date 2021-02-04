const obj ={};
function get(varName) {
    return obj[varName];
    return null;
}
function  set (varName, value) {
    console.log(` hello from bot ${start}`);

    obj[varName]=value;
}
console.log(get('name'));
console.log(get('name', "valia"));
console.log(get('nam2', "valia4"));

alert("Hallo!")