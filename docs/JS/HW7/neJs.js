function boundedEnum(context) {

    Array.prototype.forEach.call(context, (k, v) => {
        // for string class
        if (context[v].constructor === String){
            console.log('String');
            console.log(context[v].split(''));
            // for object class

        } else if (context[v].constructor === Object){
            console.log('Object')
            var m = Object.keys(context[v]);
            Array.prototype.forEach.call(m, (k, v) => {
                console.log(m[v].split(''));
            })
            // for Array class
        } else if (context[v].constructor === Array){
            console.log('Array');
            var mineArray = context[v];
            Array.prototype.forEach.call(mineArray, (k, v) => {
                console.log(String.prototype.split.call(mineArray[v], ''))
            })
            // for Set class
        } else if (context[v].constructor === Set){
            console.log('Set');
            var newArray3 = [...context[v]];
            Array.prototype.forEach.call(newArray3, (k, v) => {
                console.log(String.prototype.split.call(newArray3[v], ''))
            })
            }
    })
}
function myfunc() {
    boundedEnum(arguments);
}
myfunc("hello", {a: 3, b: 4}, [1, 2, 3, 4, 5], new Set([1, 2, 3, 4]))