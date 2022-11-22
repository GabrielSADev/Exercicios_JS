/* Uma empresa quer verificar se um empregado está qualificado para a
aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve
ser satisfeito:
a. Ter no mínimo 65 anos de idade.
b. Ter trabalhado no mínimo 30 anos.
c. Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o nome do
empregado, o ano de seu nascimento e o ano de seu ingresso na empresa. O
programa deverá exibir a idade e o tempo de trabalho do empregado e a
mensagem 'Requerer aposentadoria' ou 'Não requerer'. */

let nome = (window.prompt('Digite seu nome:'));
let ano = Number(window.prompt('Digite seu ano de nascimento:'));
let ingresso = Number(window.prompt('Digite seu ano de ingresso na empresa:'));

let calculo01 = 2022 - ano;
let calculo02 = 2022 - ingresso;

if( calculo01 >= 60 || calculo02 >= 25){
    window.alert ('Sua idade: ' + calculo01 + 'seu tempo empregado: ' + calculo02);
    window.alert('REQUER APOSENTADORIA');
}
if (calculo01 >= 65){
    window.alert ('Sua idade: ' + calculo01 + 'seu tempo empregado: ' + calculo02);
    window.alert('REQUER APOSENTADORIA');
}
if(calculo01 < 65){
    window.alert ('Sua idade: ' + calculo01 + 'seu tempo empregado: ' + calculo02);
    window.alert('NÃO REQUER APOSENTADORIA');
}
if(calculo02 >= 30){
    window.alert ('Sua idade: ' + calculo01 + 'seu tempo empregado: ' + calculo02);
    window.alert('REQUER APOSENTADORIA');
}
if(calculo02 < 30){
    window.alert ('Sua idade: ' + calculo01 + 'seu tempo empregado: ' + calculo02);
    window.alert('NÃO REQUER APOSENTADORIA');
}