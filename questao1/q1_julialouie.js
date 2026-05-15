function solucao(n){
    let valor = document.getElementById("campo").value;
    resultado = [];
    for(let x = 0; x <= valor; x++){
        if(valor[x] % 3 === 0){
            
        }else if(valor[x] % 5 === 0){

        }else if(valor[x] % 3 === 0 && valor[x] % 5 === 0){

        }else if(valor[x] % 7 === 0){

        }
    }
    document.getElementById("saida").innerHTML = resultado;
}
