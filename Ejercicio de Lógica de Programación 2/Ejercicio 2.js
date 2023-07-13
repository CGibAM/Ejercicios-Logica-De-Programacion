while (true) {
    var celcius = prompt("Ingrese la temperatura en grados Celcius");

    if (typeof celcius !== "number") {
        alert("Ingrese un numero valido, por favor");
    } else {
        var celciusDegree = parseFloat(celcius);

        var farenheit = (celciusDegree * (9 / 5)) + 32;

        var kelvin = celciusDegree + 273.15;

        console.log(`La temperatura ingresada en grados farenheit es ${farenheit}
        La temperatura ingresada en Kelvin es ${kelvin}`)

        break;
    }

}



