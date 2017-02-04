import { toArray } from 'rxjs/operator/toArray';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { WordContainer, SignificateWordContainer, Word } from '../business/wordContainer';
import { StorageService, LocalStorageEnum } from './storage.service.';
import { MathService } from './math.service.';



@Injectable()
export class WordsService {
  private listWords: Array<WordContainer>;
  constructor(private storageService: StorageService,
    private mathService: MathService) {
  }
  get(): Array<WordContainer> {
    return this.storageService.get<Array<WordContainer>>(LocalStorageEnum.WordsList);
  }
  newWord(word: WordContainer): void {
    word.word.id = this.mathService.generateGuid();
    word.significate.id = this.mathService.generateGuid();
    word.wordFirstColumns.id = this.mathService.generateGuid();
    word.wordSecondColumns.id = this.mathService.generateGuid();
    this.storageService.addToList(LocalStorageEnum.WordsList, word);
  }
  clearAll(): void {
    this.storageService.remove(LocalStorageEnum.WordsList);
  }
}

