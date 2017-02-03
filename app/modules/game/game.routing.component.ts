
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';




const routes: Routes = [
  {
    path: 'game',
    component: GameComponent
  }
];


export const GameRouterProvider = RouterModule.forRoot(routes)
