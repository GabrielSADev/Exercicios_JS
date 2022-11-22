/* Ler o nome de 2 times e o número de gols marcados na partida (para cada time).
exibir o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra
EMPATE. */

let time01 = (window.prompt('Digite o nome do primeiro time:'));
let gols01 = Number(window.prompt('Agora digite o número de gols feito(s) por esse time: '));

let time02 = (window.prompt('Digite o nome do segundo time:'));
let gols02 = Number(window.prompt('Agora digite o número de gols feito(s) por esse time: '));

if(gols01 > gols02){
    window.alert('este é o time ganhador: ' + time01 + ' com ' + gols01 + ' gols');
}
if(gols02 > gols01){
    window.alert('este é o time ganhador: ' + time02 + ' com ' + gols02 + ' gols');
}