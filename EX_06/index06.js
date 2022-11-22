/* Ler um valor e exibir se é positivo ou negativo (considere o valor zero como
    positivo) */    

let valor = Number(window.prompt('Digite o Número desejado:'));

if(valor < 0){
    window.alert('Este número é negativo:' + valor);
}
if(valor >= 0){
    window.alert('Este número é positivo:' + valor);
}