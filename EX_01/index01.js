/* Escreva um algoritmo para ler o salário mensal atual de um funcionário e o
percentual de reajuste. Calcular e exibir o valor do novo salário. */

let salario = Number(window.prompt('Digite o valor do seu salário:'));
let reajuste = Number(window.prompt('Agora digite o percentual de reajuste:'));

let conta = (reajuste * salario) / 100;
let result = salario + conta;

window.alert('O seu salário atual será de:'+ result);

