/** 
 * Javascript Orientado a objetos com TypeScript
 * Visibilidade e Encapsulamento com GET e SET
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

    private _nome: string;
    private _idade: number;
    private _estaVivo: boolean;

    /* Múltiplos construtores não são permitidos
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.estaVivo = false;
    } */

    constructor(nome: string = "", idade: number = 0, estaVivo: boolean = false) {
        this.nome = nome;
        this.idade = idade;
        this._estaVivo = estaVivo;
    }

    nascer(): void {
        this._estaVivo = true;
        console.log("O animal nasceu.");
    };
     
    crescer(): void { 
        this._idade++;
        console.log("O animal cresceu.");
    };

    morrer(): void {
        this._estaVivo = false;
        console.log("O animal morreu.");
    };

    get nome(): string {
        return this._nome;
    };

    set nome(nome: string) {
        this._nome = nome;
    };

    get idade(): number {
        return this._idade;
    };

    set idade(novaIdade: number){
        if (novaIdade < 0) { 
            throw new Error("A idade não pode ser menor que zero.");
        } else if (novaIdade >= 0) {
            this._idade = novaIdade;
        }
    };

    get estaVivo(): boolean {
        return this._estaVivo;
    };

}

let cachorro: Animal = new Animal("Totó", 5, true);
cachorro.nascer();
cachorro.crescer();
cachorro.morrer();
console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.estaVivo);
