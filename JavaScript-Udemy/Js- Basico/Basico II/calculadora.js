function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`)
}

let resultado = calc(2, 2, "*");

console.log(resultado);



// arrow function
let calcular = (x1,x2,operator) => {
    return eval(`${x1} ${operator} ${x2}`)
}

let reslult = calcular(5,5, "+");

console.log(reslult)