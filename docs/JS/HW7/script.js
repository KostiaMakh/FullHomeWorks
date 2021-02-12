function boundedEnum(context) {

    Array.prototype.forEach.call(context, (k, v) => {
        // for string class
        if (typeof context[v] === 'string') {
            console.log('String');
            console.log(context[v].split(''))
            // for Arrays class
        } else if (context[v].constructor === Array) {
            console.log('Array');
            var mineArray = context[v];
            Array.prototype.forEach.call(mineArray, (k, v) => {
                console.log(String.prototype.split.call(mineArray[v], ''))
            })
            // for object class
        } else if (context[v].constructor !== Object) {
            console.log('Function');
            console.log(context[v].constructor);
            var dfg= context[v].valueOf();
            console.log(dfg);
            console.log(String.prototype.split.call(dfg,('')));

        } else {
            console.log('Object')
            var m = Object.keys(context[v]);
            Array.prototype.forEach.call(m, (k, v) => {
                console.log(m[v].split(''));
            });
            // for set class
        }
    })
}
function myfunc() {
    boundedEnum(arguments);
}
myfunc("hello", {a: 3, b: 4}, [1, 2, 3, 4, 5], new Set([1, 2, 3, 4]))