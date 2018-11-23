// Escopo de variáveis com o let
{ var a = 7; }
alert(a);

// Erro de referência
{ let b = 3 }
alert(b);

var resultado1 = 0;
for (var i = 0; i <= 10; i++) { 
    resultado1 = resultado1 + i;
 }

 alert(i);

var resultado2 = 0;
for (let j = 0; i <= 10; i++) { 
    resultado2 = resultado2 + i;
 }

 // Erro de referência
alert(j);

// Variáveis com o let não podem ser redeclaradas
var d = 7;
var d = 10;

let c = 6;
let c = 10;
