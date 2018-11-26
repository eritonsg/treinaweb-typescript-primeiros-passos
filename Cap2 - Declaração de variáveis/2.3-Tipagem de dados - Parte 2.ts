/*
   Criando Tuplas
*/ 
let campeaoBrasileiro: [string, number] = ["Palmeiras", 2016];
let campeaoBrasileiro2: [string, number] = ["Corinthians", 2015];
let campeaoBrasileiro3: [string, number] = ["Cruzeiro", 2014];
let campeao: [string, number] = ["Fla", 2018];
campeao[0] = "Flamengo";
campeao[2] = 67;

alert(campeaoBrasileiro[0] + ', ' + campeaoBrasileiro[1]);
alert('Vitórias: ' + campeao[2]);

// Criando Enums com Typescript
enum Estado {
    Desabilitado = -1,
    Habilitado = 1
}

let meuEstado: Estado = Estado.Desabilitado;
alert("Estado: " + meuEstado);

let textoEstado = Estado[-1];
textoEstado = Estado[Estado.Habilitado];
alert("Texto estado: " + textoEstado);

// Declarando uma variável flexível
let v: any = "Texto";
v = 2;
alert(v);


