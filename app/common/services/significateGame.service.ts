import { toArray } from 'rxjs/operator/toArray';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { WordContainer, SignificateWordContainer, Word } from '../business/wordContainer';
import { WordsService } from './words.service';
import { MathService } from './math.service.';



@Injectable()
export class SignificateGame {
  //TODO Eliminar Test
  private position = 0;
  private started: boolean = false;
  private defaultStartCount: number = 15;
  private listWord: Array<WordContainer>;
  constructor(private wordsService: WordsService,
    private mathService: MathService) {

  }

  start(count: number): SignificateWordContainer {
    this.started = true;
    this.listWord = this.wordsService.get();
    this.position = 0;
    return this.getNext();
  }
  getNext(): SignificateWordContainer {

    if (this.started) {
      var next = this.listWord[this.position++];
      var container = new SignificateWordContainer();
      container.word = next.word;
      container.choose = new Array<Word>();
      container.choose[0] = next.significate;
      container.correct = next.significate;
      var min = 0, max = this.listWord.length - 1;
      this.listNumbers = new Array<number>();
      container.choose.push(this.listWord[this.diferentNumber(min, max)].significate);
      container.choose.push(this.listWord[this.diferentNumber(min, max)].significate);
      container.choose.push(this.listWord[this.diferentNumber(min, max)].significate);
      return container;
    } else {
      this.start(this.defaultStartCount);
    }
  }
  private listNumbers: Array<number>;
  private diferentNumber(min, max): number {
    var number = this.mathService.randomIntFromInterval(min, max);
    var is = true;
    while (is) {
      var exist = false;
      for (var i = 0; i < this.listNumbers.length; i++) {
        var item = this.listNumbers[i];
        if (item == number) {
          exist = true;
        }
      }
      if (exist == false) {
        is = false;
      } else {
        number = this.mathService.randomIntFromInterval(min, max);
      }

    }
    this.listNumbers.push(number);
    return number;
  }
  stop(): void {
    this.started = false;
  }
}


class FactoryTest {

  get(): SignificateWordContainer[] {

    var list = new Array<SignificateWordContainer>();
    var retu = new SignificateWordContainer();
    retu.choose = new Array<Word>();
    var first = new Word();
    first.word = "Primera";
    first.id = 1;
    first.points = 0;
    var second = new Word();
    second.word = "Segunda";
    second.id = 2;
    second.points = 40;
    var t = new Word();
    t.word = "Tercera";
    t.id = 3;
    t.points = 20;
    var f = new Word();
    f.word = "Cuarta";
    f.id = 4;
    f.points = 0;
    retu.correct = second;
    retu.choose.push(first);
    retu.choose.push(second);
    retu.choose.push(t);
    retu.choose.push(f);

    retu.word = new Word();
    retu.word.id = 1;
    retu.word.word = "Probando";
    list.push(retu);

    return list;
  }
}
