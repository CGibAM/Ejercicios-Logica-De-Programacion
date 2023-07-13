var dato1 = parseInt(prompt("Ingrese el primer dato"));1
var dato2 = parseInt(prompt("Ingrese el segundo dato"));2
var dato3 = parseInt(prompt("Ingrese el tercer dato"));3

var arregloNum = [dato1,dato1,dato2,dato3];

var menorAMay = arregloNum.slice().sort((a,b)=>a-b);

var mayorAmen = arregloNum.slice().sort((a,b)=>b-a);

console.log(arregloNum);
console.log(mayorAmen);
console.log(menorAMay);
