/*
   Definindo constantes com CONST
*/ 
const MINHA_CONSTANTE = 10;

// A constante não pode alterar o seu valor
// São declaradas em javascript como var
MINHA_CONSTANTE = 7;
alert(MINHA_CONSTANTE);

const MeuObjeto = {
    id: 1,
    nome: "Curso TypeScript"
}

alert(JSON.stringify(MeuObjeto));

// Alterando os valores do objeto declarados como constantes
MeuObjeto.id = 2;
MeuObjeto.nome = "TypeScript"
alert(JSON.stringify(MeuObjeto));
