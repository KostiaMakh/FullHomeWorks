function boundedEnum(context){
    Array.prototype.forEach.call(context,(k, v)=>{


    })
}

function myfunc(){
    boundedEnum(arguments);
}
myfunc("hello",{a:3,b:4}, [1,2,3,4,5], new Set([1,2,3,4]))