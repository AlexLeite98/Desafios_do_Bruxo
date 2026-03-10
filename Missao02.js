/** ⚔️ MISSÃO 2
O Recrutamento do Rei
📜 História
Enquanto você conversa com Ardan, um mensageiro real chega à aldeia trazendo notícias preocupantes.
Criaturas começaram a aparecer nas estradas do reino.
O rei ordenou que novas tropas fossem recrutadas imediatamente.
Capitão Roderick está tentando organizar voluntários na praça da aldeia.
O problema é que muitos jovens querem se alistar… mas nem todos têm idade suficiente.
Roderick suspira ao vê-lo.
“Bruxo, preciso de um método rápido para verificar quem pode entrar no exército.
A regra é simples: apenas quem tem 18 anos ou mais pode lutar.”
Se você conseguir criar um sistema de verificação, poderá ajudar a organizar o recrutamento.
🎯 Objetivo da missão
Criar um programa que:
1 receba a idade de uma pessoa
2 diga se ela pode se alistar ou não **/
//console.log(`${}`); \n

function alistamento(x, y){
	if(y >= 18){
		return alert(`${x} foi aprovado, pode se alistar!`);
	}else return alert(`${x} foi reprovado, muito novo, não pode se alistar!`)
}

let nome = prompt('Qual é o seu nome?');
let idade = Number(prompt('Qual a sua idade?'));

alistamento(nome,idade)
