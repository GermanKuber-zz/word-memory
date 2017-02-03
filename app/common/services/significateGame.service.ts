import { toArray } from 'rxjs/operator/toArray';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { WordContainer, SignificateWordContainer, Word } from '../business/wordContainer';



@Injectable()
export class SignificateGame {
  //TODO Eliminar Test
  private idGen = 0;
  private started: boolean = false;
  private defaultStartCount: number = 15;
  start(count: number): SignificateWordContainer {
    this.started = true;
    return this.getNext();
  }
  getNext(): SignificateWordContainer {
    if (this.started) {
      var factore = new FactoryTest();
      var returnValue =  factore.get()[0];
      returnValue.word.word= `${this.idGen} - ${returnValue.word.word}`
      ++this.idGen;
      return returnValue;
    } else {
      this.start(this.defaultStartCount);
    }
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
