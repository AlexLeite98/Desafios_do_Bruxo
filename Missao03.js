/** ⚔️ MISSÃO 3
O Exame dos Aprendizes
📜 História
Na taverna da aldeia, Mira comenta sobre um problema.
Alguns jovens de Brighthollow tentaram entrar na Ordem de Oxenhall, mas precisam passar por um teste.
Cada aprendiz fez duas provas:
uma de conhecimento arcano
outra de controle de runas
O resultado depende da média das duas notas.
Mira entrega um pergaminho com números escritos.
“Se puder calcular rapidamente quem passou, poderemos enviar apenas os aprovados para a capital.”
🎯 Objetivo da missão
Criar um programa que:
receba duas notas
calcule a média
mostre o resultado **/
//console.log(`${}`); \n

function media(x, y){
	let media = (x + y)/2;
	
	if(media >= 8){
		return alert('Aprovado');
	}else alert('Reprovado');
}

