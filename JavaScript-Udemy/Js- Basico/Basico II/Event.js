window.addEventListener('focus', event => {
    console.log("focus")
})

document.addEventListener('click', event => {
    console.log('click')
})


let agora = new Date();

console.log(agora.getDate())

// para pegar a data do local do usuario
console.log(agora.toLocaleDateString("pt-BR"))

// Arrays
let carros = [
    "palio 98", 
    "Toro",
    "Uno",
    10,
    true,
    new Date(),
    function(){}
]

carros.forEach(function(value, index) {
    console.log( index, value )
})