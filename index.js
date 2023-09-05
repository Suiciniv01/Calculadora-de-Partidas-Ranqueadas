function saldoDeVitorias(a, b){
    let saldo = Math.abs(a - b);
    let rank = "";

    if(saldo < 10){
        rank = "Ferro";
    } else if(saldo < 20){
        rank = "Bronze";
    } else if(saldo < 50 ){
        rank = "Prata";
    } else if(saldo < 80 ){
        rank = "Ouro";
    } else if(saldo < 90 ){
        rank = "Diamante";
    } else if(saldo <= 100){
        rank = "Lendário";
    } else{
        rank = "Imortal";
    }

    if(saldo < 0){
        saldo = Math.abs(saldo);
        console.log("O Herói tem um saldo de " + saldo + " derrotas e esta do nível " + rank)
    }else{
        console.log("O Herói tem um saldo de " + saldo + " vitorias e está no nível " + rank);
    }

}

let vitorias = prompt("Quantidade de vitórias: ");
let derrotas = prompt("Quantidade de derrotas: ");

saldoDeVitorias(vitorias, derrotas);