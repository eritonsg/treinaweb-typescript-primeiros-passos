/** 
 * Javascript Orientado a objetos com TypeScript
 * Criando classes e objetos
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

    nascer(): void {
        console.log("O animal nasceu.");
     };
    crescer(): void { 
        console.log("O animal cresceu.");
    };
    morrer(): void {
        console.log("O animal morreu.");
     };

}

let cachorro: Animal = new Animal();
cachorro.nome = "Totó";
cachorro.crescer();
console.log(cachorro.nome);

let cachorro2: Animal = new Animal();
cachorro.nome = "Bob";
cachorro2.crescer();
console.log(cachorro2.nome);