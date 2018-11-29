/** 
 * Javascript Orientado a objetos com TypeScript
 * Aplicando LSP - Liskov Substitution Principle
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

    protected _nome: string;
    protected _idade: number;
    protected _estaVivo: boolean;

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

/**
 * Utilizando herança
 * Não aceita herança múltipla
 * */ 
class Cachorro extends Animal {

    private _quantidadeEscavacoes: number = 0;

    cavar(): void {
        if (this._quantidadeEscavacoes <= 3) {
            console.log("O cachorro está cavando.");    
        } else {
            console.log("O cachorro não pode mais cavar.");
            this._estaVivo = false;
        }
        
    }

};

class Tucano extends Animal { 

    tamanhoBico: number;
    private _quantidadeVoos: number = 0;

    voar(): void {
        if (this._quantidadeVoos <= 3) {
            console.log("O Tucano está voando.");
        } else { 
            console.log("O Tucano não pode mais voar.");
            this._estaVivo = false;
        }
    }

};

// Aplicando o princípio da substituição
let tucano: Animal = new Tucano("Tutú", 1, true);
tucano.nascer();
tucano.crescer();
console.log(tucano.nome);
console.log(tucano.idade);
(tucano as Tucano).voar();
(tucano as Tucano).voar();
(tucano as Tucano).voar();
(tucano as Tucano).voar();
console.log(tucano.estaVivo);
