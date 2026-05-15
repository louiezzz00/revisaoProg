function solucao(){
    let campo = document.getElementById("campo").value;
    let separar = campo.split(" ");
    let menor = separar[0];
    let maior = separar[0];

    for (let i = 1; i < separar.length; i++) {
    if (separar[i].length > maior.length) {
        maior = separar[i];
    }

    if (separar[i].length < menor.length) {
        menor = separar[i];
    }
}

    document.getElementById("saida"). innerHTML = "Número de letras: "+separar.length+
    ". A maior palavra é: "+maior+
    ". A menor palavra é: "+menor+".";
}