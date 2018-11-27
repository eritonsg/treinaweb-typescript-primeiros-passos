/*
   Desconstrudindo uma coleção de objetos
*/ 
let meusNumeros: number[] = [1, 2, 3, 4];
console.log(meusNumeros[3]);

// Desconstruindo a coleção meusNumeros e atribuindo valores a uma variável
let [primeiro, segundo, terceiro, quarto] = meusNumeros;
console.log(primeiro);
console.log(segundo);
console.log(terceiro);
console.log(quarto);

// Valor 1
let [outroPrimeiro] = meusNumeros;
console.log(outroPrimeiro);

// Desconstruindo a coleção
let [maisUmPrimeiro, , maisUmTerceiro,] = meusNumeros;
console.log(maisUmPrimeiro);
console.log(maisUmTerceiro);

// Valor 4
let [, , , ultimo] = meusNumeros;
console.log(ultimo);

// Outra forma de desconstrução
let [primeiroNumero, ...demaisNumeros] = meusNumeros;
console.log(demaisNumeros);
