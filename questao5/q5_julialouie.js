function solucao() {
    let campo = document.getElementById("campo").value;
    let temMaiuscula = false;
    let temNumero = false;
    let temEspecial = false;

    if (campo.length < 8) {
        document.getElementById("saida").innerHTML = "Senha inválida (mínimo 8 caracteres)";
        return;
    }

    for (let i = 0; i < campo.length; i++) {
        let senha = campo[i];
        if (senha >= "A" && senha <= "Z") {
            temMaiuscula = true;
        }

        if (senha >= "0" && senha <= "9") {
            temNumero = true;
        }

        if ("!@#$%&*".includes(senha)) {
            temEspecial = true;
        }
    }

    if (temMaiuscula && temNumero && temEspecial) {
        document.getElementById("saida").innerHTML =
            "Senha válida";
    } else {
        document.getElementById("saida").innerHTML =
            "Senha inválida";
    }
}