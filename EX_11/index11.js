/*  Um posto está vendendo combustíveis com a seguinte tabela de descontos:
a. Álcool: até 20 litros, desconto de 3% por litro; acima de 20 litros, descontode 5% por litro.
b. Gasolina: até 20 litros, desconto de 4% por litro; acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos e o tipo de
combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e
imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da
gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90 */

let opc = Number(window.prompt('Bem vindo ao posto, digite 1=A para álcool e 2=G para gasolina'));

switch(opc){

    case 1:
        let alcool = Number(window.prompt('Agora digite a quantidade de litros de alcool desejada:'));
        let conta01 = alcool * 2.90;
        if(alcool <= 20){
            let desconto01 = (3 * conta01) / 100;
            let resultado01 = conta01 - desconto01;
        window.alert ('Este é o valor final a ser pago: ' + resultado01);
        }
        if(alcool > 20){
            let desconto02 = (5 * conta01) / 100;
            let resultado02 = conta01 - desconto02;
            window.alert ('Este é o valor final a ser pago: ' + resultado02);
        }
    break;

    case 2:
        let gasolina = Number(window.prompt('Agora digite a quantidade de litros de gasolina desejada:'));
        let conta03 = gasolina * 3.30;
        if(gasolina <= 20){
            let desconto03 = (4 * conta03) / 100;
            let resultado03 = conta03 - desconto03;
        window.alert ('Este é o valor final a ser pago: ' + resultado03);
        }
        if(gasolina > 20){
            let desconto04 = (6 * conta03) / 100;
            let resultado04 = conta03 - desconto04;
            window.alert ('Este é o valor final a ser pago: ' + resultado04);
        }
    break;

    default:
    window.alert('Valor incorreto, por favor insira um(1) ou dois(2)');
    break;
}