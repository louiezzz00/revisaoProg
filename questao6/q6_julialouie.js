function solucao() {
    let campo = document.getElementById("campo").value;
    let vetor = campo.split(", ");
    let novoVetor = [];

    for(let i = 0; i < vetor.length; i++){
        let existe = false;
        for(let x = 0; x < novoVetor.length; x++) {
            if(vetor[i] === novoVetor[x]) {
                existe = true;
            }
        }
        if(existe === false) {
            novoVetor.push(vetor[i]);
        }
    }
    document.getElementById("saida").innerHTML = novoVetor.join(", ");
}