import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { HeroService } from '../../common/services/hero.service';
import { SignificateGame } from '../../common/services/significateGame.service';
import { SignificateWordContainer, Word } from '../../common/business/wordContainer';


@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {
  significateWordContainer: SignificateWordContainer;
  status: string;
  nextEnable: boolean = false;
  private isCorrect: boolean;
  constructor(private significateService: SignificateGame) {
  }

  ngOnInit(): void {
    this.significateWordContainer = this.significateService.start(10);

  }
  chooseWord(word: Word): void {
    if (word.id == this.significateWordContainer.correct.id) {
      this.isCorrect = true;
      this.status = "Correcto";
    } else {
      this.isCorrect = false;
      this.status = "Error";
    }
    this.nextEnable = true;
  }
  next(): void {
    this.nextEnable = false;
    this.significateWordContainer = this.significateService.getNext();
  }
}



