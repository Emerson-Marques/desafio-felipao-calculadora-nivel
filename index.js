

// Função para calcular as partidas e determinar o nível

function calcLevel (vitorias, derrotas) {
    let nVictories = vitorias - derrotas;
    let nivel;


if (vitorias <= 10){
    nivel = 'Ferro';
}else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
}else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'prata';
}else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
}else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
}else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
}else {
    nivel = 'Imortal';
}

// return

return { nVictories, nivel };

}

// Simulação de vitórias

const vitorias = 90;
const derrotas = 28;

const resultado = calcLevel (vitorias, derrotas);

console.log(`O Herói tem de saldo ${resultado.nVictories} e está no nível de ${resultado.nivel}`);



