/* Ler um valor e exibir a mensagem É MAIOR QUE 100! se o valor lido for maior
que 100, caso contrário exibir NÃO É MAIOR QUE 100! */

let valor = Number(window.prompt('Digite o Número desejado: '));

if(valor < 100) {
    window.alert('NÃO É MAIOR QUE 100!');
}
if(valor >= 100) {
    window.alert('É MAIOR QUE 100!');
}