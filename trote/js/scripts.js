function calcular(){
    let mascote, homenagem, leite, kit_avulso, sangue, suplementos
    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite").value
    kit_avulso =  document.getElementById("kit_avulso").value
    sangue = document.getElementById("sangue").value
    suplementos = document.getElementById("suplementos").value
    let soma = Number(mascote) + Number(homenagem) + Number(2 * leite) + Number(30 * kit_avulso) + Number(15 * suplementos) + Number(20 * sangue)
    //retorna o valor para o html
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
