export class WordContainer {
    word: Word;
    wordFirstColumns: Word;
    wordSecondColumns: Word;
    significate: Word;
    constructor(){
        this.word = new Word();
        this.wordFirstColumns = new Word();
        this.wordSecondColumns = new Word();
        this.significate = new Word();
    }
}
export class Word {
    id: string;
    word: string;
    points: number;
}
export class SignificateWordContainer {
    //Palabra en ingles
    word: Word;
    //Lista de palabras para adivinar
    choose: Array<Word>;
    //Palabra correcta
    correct: Word;
}