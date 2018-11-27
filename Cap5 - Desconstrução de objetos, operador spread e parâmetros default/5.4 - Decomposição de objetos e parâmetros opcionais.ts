/*
   Decompondo objetos com funções e parâmetros opcionais
*/ 
let meuObjeto = {
    id: 1,
    nome: "Eriton",
    idade: 18
 };
 
 // Decompondo o objeto
 function mostrarDecomposicao(objDecomposto: { nome: string, idade: number }): void { 
    let { nome, idade } = objDecomposto;
    console.log(`Nome: ${nome}, Idade: ${idade}.`);
 }
 
 function mostrarDecomposicaoComParametroOpcional(objDecomposto: { id?: number, nome: string, idade: number, telefone?: string }): void { 
    // Atribuindo valor padrão a variável
    let { id = 0, nome, idade, telefone = "(99) 9999-9999" } = objDecomposto;
    console.log(`ID: ${id}, Nome: ${nome}, Idade: ${idade}, Telefone: ${telefone}.`);
 }
 
 mostrarDecomposicao(meuObjeto);
 