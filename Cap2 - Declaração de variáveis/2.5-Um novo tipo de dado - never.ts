/*
   Um novo tipo de dados: never
   Uma função que nunca irá retornar nada
*/ 

// A função não vai retornar nada
function mostrarerro(msg: string): never { 
    throw new Error("Ocorreu um erro: " + msg);
}

let meuNumero: number = 1;
if (meuNumero <= 0) { 
    mostrarerro("Número menor ou igual a zero.");
}
