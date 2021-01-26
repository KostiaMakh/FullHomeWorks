function returnResultWithoutSort() {
    var mineArray2 = [1, 5, 5, 6, 3, 0.6564, -4534, -56, 0.5434, 65, 6456, 4334];
    var mineArreyChel2 = [];
    for  (let i=0; i<mineArray2.length; i++){
        if(parseInt(mineArray2[i])>0){
            mineArreyChel2.push(mineArray2[i]);
        }
    }
    var minimal1 = Math.min(...mineArreyChel2);

    console.log(minimal1);
    mineArreyChel2.

}
console.log(returnResultWithoutSort());