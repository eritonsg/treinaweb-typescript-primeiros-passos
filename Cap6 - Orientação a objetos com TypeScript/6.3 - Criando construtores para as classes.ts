/** 
 * Javascript Orientado a objetos com TypeScript
 * Criando construtores para as classes
*/
interface IFAnimal {

    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;

}

class Animal implements IFAnimal {

    nome: string;
    idade: number;
    estaVivo: boolean;

    /* Múltiplos construtores não são permitidos
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.estaVivo = false;
    } */

    constructor(nome: string = "", idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
     }

    nascer(): void {
        this.estaVivo = true;
        console.log("O animal nasceu.");
     };
    crescer(): void { 
        this.idade++;
        console.log("O animal cresceu.");
    };
    morrer(): void {
        this.estaVivo = false;
        console.log("O animal morreu.");
     };

}

let cachorro: Animal = new Animal("Totó", 5, true);
cachorro.crescer();
console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.estaVivo);