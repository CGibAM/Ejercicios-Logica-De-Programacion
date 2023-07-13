var numero;

var ganador = false;

while (ganador === false) {
    numero = parseInt(prompt("Seleccione un numero del 1 al 100:"));

    if (numero === 800){
        ganador = true;
    }else if (typeof numero === "number" && (numero > 0 && numero < 101)) {
        secreto(numero);
    }else{
        alert("Seleccione un numero valido porfavor");
    }
}


function secreto(num) {
    var secreto = (Math.floor(Math.random() * (100) + 1));
    console.log(secreto);

    if (secreto === num) {
        console.log("Felicidades, adivinaste el número secreto.");
        ganador = true;
    } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
}