/*
   Convertendo tipos de dados (casting) com type assertions
*/ 

let teste: any = "Uma string qualquer";

// Convertendo para o tipo string com operador diamante
let texto = (<string>teste);
let tamanhoTexto = texto.length;
alert("Texto: " + texto + ". Tamanho: " + tamanhoTexto + ".");

// Convertendo para o tipo string com AS
let texto2 = teste as string;
let tamanhoTexto2 = texto2.length;
alert("Texto: " + texto2 + ". Tamanho: " + tamanhoTexto2 + ".");