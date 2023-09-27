
let saldo = calculaRanckPartidas(200, 98)
let eloHeroi = calculaElo(saldo)

console.log(eloHeroi)


function calculaRanckPartidas(v, d) {
    let saldoRanked = v - d
    return saldoRanked
}


function calculaElo(v) {
    let elo = ""
    switch(true) {
    case (v <= 10):
      elo = "Ferro"
      break
    case (v > 10 && v <= 20):
      elo = "Bronze"
      break  
    case (v > 20 && v <= 50):
      elo = "Prata"
      break
    case (v > 50 && v <= 80):
      elo = "Ouro"  
      break
    case (v > 80 && v <= 90):
      elo = "Diamante"
      break
    case (v > 90 && v <= 100):
      elo = "Lendário" 
      break
      case (v >= 101):
        elo = "Imortal"
        break;
      default:
        console.log("Opção inválida")
    }
    
    let notificacao = ("O Herói tem de saldo de vitórias " + v + ", está no nível de " + elo);
    return notificacao;
  }