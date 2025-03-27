function calcular(){
    let mascote, homenagem, leite, Kit_avulso, sangue, suplemento
    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite").value
    Kit_avulso =  document.getElementById("Kit_avulso").value
    sangue = document.getElementById("sangue").value
    suplemento = document.getElementById("suplemento").value
    let soma = Number(mascote) + Number(homenagem) + Number(2 * leite) + Number(30 * Kit_avulso) + Number(15 * suplemento) + Number(20 * sangue)
    //retorna o valor para o html
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
