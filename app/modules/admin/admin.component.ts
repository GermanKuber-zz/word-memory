import { Word, WordContainer } from '../../common/business/wordContainer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WordsService } from '../../common/services/words.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent {
  list: Array<WordContainer>;
  doLogin(event) {
    console.log(event);
  }
  public addWordForm = this.fb.group({
    word: ["", Validators.required],
    wordFirstColumns: ["", Validators.required],
    wordSecondColumns: ["", Validators.required],
    significate: ["", Validators.required]
  });
  constructor(
    public fb: FormBuilder,
    private wordsService: WordsService) {
   this.reload();
  }

  save(event: any): void {
    var word = new WordContainer();
    word.word.word = this.addWordForm.value.word;
    word.wordFirstColumns.word = this.addWordForm.value.wordFirstColumns;
    word.wordSecondColumns.word = this.addWordForm.value.wordSecondColumns;
    word.significate.word = this.addWordForm.value.significate;
    this.wordsService.newWord(word);
    this.addWordForm.reset();
   this.reload();
  }
  clearAll(): void {
    this.wordsService.clearAll();
    this.reload();
  }
  private reload():void{
     this.list = this.wordsService.get();
  }
}
