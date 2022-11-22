/* Escreva um algoritmo que leia um número inteiro e calcule e imprima a tabuada
(1 a 10). */

let valor = Number(window.prompt('Digite um número que quer saber a tabuada: '));

for(let contador = 1; contador <= 10; contador++) {
    window.alert(valor + " x " + contador + " = " + (valor * contador));

}

