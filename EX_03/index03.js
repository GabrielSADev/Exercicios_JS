/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final
deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.
Fórmula para o cálculo da média final é:
a. Mediafinal = n1 * 2 + n2 * 3 + n3 * 5 / 10 */

let nota01 = Number(window.prompt('Bem vindo aluno, digite sua primeira nota:'));
let nota02 = Number(window.prompt('Digite sua segunda nota:'));
let nota03 = Number(window.prompt('Digite o valor da sua terceira nota:'));

let Mediafinal = nota01 * 2 + nota02 * 3 + nota03 * 5 / 10;

window.alert ('Este é o valor de sua média: ' + Mediafinal);