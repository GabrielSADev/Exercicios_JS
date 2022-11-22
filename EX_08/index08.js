/* Ler dois valores (considere que não serão lidos valores iguais) e exibir o maior
deles. */

let valor1 = Number (window.prompt('Digite o primeiro valor:'));
let valor2 = Number (window.prompt('Digite o segundo valor:'));

if(valor1 > valor2){
    window.alert('O PRIMEIRO VALOR É MAIOR QUE O SEGUNDO');
}
if (valor2 > valor1){
    window,alert('O SEGUNDO VALOR É MAIOR QUE O PRIMEIRO');
}