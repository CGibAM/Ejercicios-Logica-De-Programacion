var numero; 

while (true) {
    numero = parseInt(prompt("Seleccione un numero:"));
    
    if (typeof numero !== "number") {
        alert("Seleccione un numero porfavor");
    } else {
        break;
    }
}

fibonacci(numero);

function fibonacci(numero){
    const val=[0,1];

    for (let i=2; i<numero; i++){
        val[i] = val[i-1] + val [i-2]; 
    }

    val.forEach(e=>{
        console.log(e);
    })
};