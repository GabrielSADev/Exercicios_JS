/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00
se forem compradas pelo menos 12. Escreva um programa que leia o número de
maçãs compradas, calcule e escreva o custo total da compra */

let valor;
let numero = Number (window.prompt('Digite o número de maçãs desejadas: '));

if(numero < 12){
    valor = numero * 1.30;
    window.alert('Custo total da compra:' + valor);
}
if(numero >= 12){
    valor = numero * 1;
    window.alert('Custo total da compra:' + valor);
}