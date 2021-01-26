function returnResult() {
    var mineArray = [1, 5, 5, 6, 3, 0.6564, -4534, -56, 0.5434, 65, 6456, 4334];
    var mineArreyChel = [];
    for  (let i=0; i<mineArray.length; i++){
        if(parseInt(mineArray[i])>0){
            mineArreyChel.push(mineArray[i]);
        }
    }
    mineArreyChel.sort(function(a,b){
        return a-b})

    console.log(mineArreyChel)
    return mineArreyChel[0] + mineArreyChel[1];

}
console.log(returnResult())
