var numero; 

while (true) {
    numero = parseInt(prompt("Seleccione un numero:"));
    
    if (typeof numero !== "number") {
        alert("Seleccione un numero porfavor");
    } else {
        break;
    }
}

console.log(factorial(numero));

function factorial(numero){
    if (numero<=1){
        return 1;
    }
    return numero*(factorial(numero-1))
};