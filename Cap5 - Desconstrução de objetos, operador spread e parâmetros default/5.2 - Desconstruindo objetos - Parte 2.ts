/*
   Desconstrudindo uma coleção de objetos
*/ 
let meuObjeto = {
    id: 1,
    nome: "Eriton",
    idade: 18
}

// Desconstruindo o objeto
let { id, nome, idade } = meuObjeto;
console.log(id);
console.log(nome);
console.log(idade);

console.log(`ID: ${id}, Nome: ${nome}, Idade: ${idade}.`);

// Desconstruindo uma parte do objeto
let { id, ...outroObjeto } = meuObjeto;
console.log(JSON.stringify(outroObjeto));
