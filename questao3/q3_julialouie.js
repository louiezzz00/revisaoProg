function solucao() {
    let campo = document.getElementById("campo").value;
    let vetor = campo.split(",");
    let novoVetor = [];

    for(let i = vetor.length - 1; i >= 0; i--) {
        novoVetor.push(vetor[i]);
    }

    document.getElementById("saida").innerHTML = novoVetor.join(", ");
}