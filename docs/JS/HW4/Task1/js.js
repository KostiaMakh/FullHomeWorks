function sum(a,b) {
    if (b==undefined){
        return function(c){return a+c;}
    }else {
        return a+b;
    }
}

for (let i = 0; i <= 5; i++) { //! Эту строку можно изменить
    for (let j = 0; j <=4; j++) {
        if (i === 5 && j === 5) {
            //! Эту строку можно изменить
        }

        console.log(i, j);
    }
}
