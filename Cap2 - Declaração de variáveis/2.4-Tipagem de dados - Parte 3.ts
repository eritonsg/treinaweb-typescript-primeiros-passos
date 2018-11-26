/*
   Tipagem de dados - Parte 3
   Void sem nenhuma tipagem
*/ 
// O tipo void somente é compatível com null e undefined
function funcaoNula(): void { 
    return null;
}

var retorno: void = funcaoNula();
var teste: void = undefined;
alert(teste);

var teste2: number = undefined;
alert(teste2);
