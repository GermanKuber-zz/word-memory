export class WordContainer {
    word: Word;
    wordFirstColumns: Word;
    wordSecondColumns: Word;
    significate: Word;
}
export class Word {
    id: number;
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