class cell {
    constructor() {
        this.cor = "prata";
    }

    ligar(){
        console.log("uma ligação")
        return "ligando"
    }
}

let obj = new cell();

console.log(obj.cor)