//# 1️⃣ Desafio Classificador de nível de Herói
//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
let heroi = "DEKU";
let xp = 135500

//Se XP for menor do que 1.000 = Ferro
if ( xp <= 1000){
    console.log("O Herói de nome "+ heroi, "está no nível de Ferro")
    //Se XP for entre 1.001 e 2.000 = Bronze
} else if (xp >= 1001 && xp <= 2000){
    console.log("O Herói de nome "+ heroi, "está no nível de Bronze")
    //Se XP for entre 2.001 e 5.000 = Prata
} else if (xp >=2001 && xp <= 5000){
    console.log ("Ó Herói de nome "+ heroi, "está no nivel de Prata")
    //Se XP for entre 5.001 e 7.000 = Ouro
}else if (xp >= 5001 && xp <=7000){
    console.log("O Herói de nome "+ heroi, "está no nivel de Ouro")
    //Se XP for entre 7.001 e 8.000 = Platina
}else if (xp >= 7001 && xp<= 8000){
    console.log ("O Heroi de nome " +heroi, "está no nivel de Platina")
    //Se XP for entre 8.001 e 9.000 = Ascendente
}else if (xp >= 8001 && xp <=9000){
    console.log("O Herói de nome " + heroi, "está no nivel de Ascedente")
    //Se XP for entre 9.001 e 10.000= Imortal
}else if (xp >=9001 && xp <=10000){
    console.log("O Herói de nome " +heroi, " está no nivel de Imortal")
    //Se XP for maior ou igual a 10.001 = Radiante
} else if (xp >=10001){ 
    console.log("O Herói de nome " +heroi, "está no nível de Radiante")
}

//## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"
