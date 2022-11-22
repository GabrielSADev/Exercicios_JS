/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
escrever um algoritmo para ler o custo de fábrica de um carro, calcular e exibir o
custo final ao consumidor. */

let custo = Number(window.prompt('Digite o valor do custo de fábrica:'));

let distribuidor = (custo * 28) / 100;
let impostos = (custo * 45) / 100;
let valorfinal = custo + distribuidor + impostos;

window.alert ('Este é o valor final de seu veículo:' + valorfinal);

