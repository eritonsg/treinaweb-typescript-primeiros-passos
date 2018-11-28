/** 
 * Javascript Orientado a objetos com TypeScript
 * Escrevendo interfaces
*/
interface IFAnimal {

    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;

}