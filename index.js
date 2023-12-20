function calculoRankeada(vitorias, derrotas) {
    let rankeada = vitorias - derrotas
    return rankeada
}

let jogador = calculoRankeada(25,13)
let nivel = " "

if (jogador < 10) {
    nivel = "Ferro"
} else if (jogador >= 11 && jogador <= 20) {
    nivel = "Bronze"
} else if (jogador >= 21 && jogador <= 50) {
    nivel = "Ouro"
} else if (jogador >= 51 && jogador <= 80) {
    nivel = "Diamante"
} else if (jogador >= 91 && jogador <= 100) {
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${jogador} está no nível de ${nivel}`)