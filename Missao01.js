/** ⚔️ MISSÃO 1
A Pedra Rúnica do Destino
📜 História
Um camponês encontrou uma pedra estranha nas ruínas da floresta.
A pedra possui apenas um número gravado.
Mas Mestre Ardan explica algo curioso:
“As runas antigas dividem os números em duas forças fundamentais:
a Ordem dos Pares e o Caos dos Ímpares.”
Se a pedra for identificada corretamente, ela revelará um símbolo escondido.
Caso contrário… pode liberar uma energia instável.
Os moradores observam em silêncio enquanto você analisa o número.
🎯 Objetivo da missão
Criar um programa que:
receba um número
descubra se ele é par ou ímpar **/

function analise(x){
	if(x % 2 == 0){
		return alert('Ordem dos pares!');
	}else return alert('Caos dos impares!');
}

let runa = Number(prompt('Coloque sua runa para analisa-la.'));

analise(runa)