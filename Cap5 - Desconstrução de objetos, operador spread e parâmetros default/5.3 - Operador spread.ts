/*
   Decompondo objetos com funções e parâmetros opcionais
   Composição ou Construção de objetos
*/ 
let primeiroArray: number[] = [1, 2, 3];
let segundoArray: number[] = [5, 6, 7];

// Fazendo a junção das coleções
let arrayJuncao: number[] = [0, ...primeiroArray, 4, ...segundoArray];
console.log(arrayJuncao);

let vogais1: string[] = ["A", "E", "I"];
let vogais2: string[] = ["O", "U"];

// Fazendo a junção das coleções
let vogais = [...vogais1, ...vogais2];
console.log(vogais);

let meuObjeto = {
    id: 1,
    nome: "Eriton"
}

// Construindo um novo objeto
let novoObjeto = {
    ...meuObjeto,
    idade: 18,
    sexo: "Masculino"
}

console.log(JSON.stringify(novoObjeto));
