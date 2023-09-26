
let saldo = calculaRanckPartidas(200, 98)
let eloHeroi = calculaElo(saldo)

console.log(eloHeroi)


function calculaRanckPartidas(v, d) {
    let saldoRanked = v - d
    return saldoRanked
}


function calculaElo(v) {
    let elo = ""
    if (v <= 10) {
        elo = "Ferro"
    } else if ((v > 10) && (v <= 20)) {
        elo = "Bronze"
    } else if ((v > 20) && (v <= 50)) {
        elo = "Prata"
    } else if ((v > 50) && (v <= 80)) {
        elo = "Ouro"
    } else if ((v > 80) && (v <= 90)) {
        elo = "Diamante"
    } else if ((v > 90) && (v <= 100)) {
        elo = "Lendário"
    } else {
        elo = "Imortal"
    }

    notificacao = ("O Herói tem de saldo de " + v + " está no nível de " + elo)
    return notificacao

}