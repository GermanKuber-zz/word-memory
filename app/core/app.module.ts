
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from '../common/services/in-memory-data.service';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';

import { HeroService } from '../common/services/hero.service';
import { AppComponent } from './main/app.main.component';
import { DashboardRouterProvider } from '../modules/dashboard/dashboard.routing.component';
import { LoginRouterProvider } from '../modules/login/login.routing.component';
import { LoginComponent } from '../modules/login/login.component';
import { AdminRouterProvider } from '../modules/admin/admin.routing.component';
import { AdminComponent } from '../modules/admin/admin.component';
import { SignificateGame } from '../common/services/significateGame.service';
import { GameRouterProvider } from '../modules/game/game.routing.component';
import { GameComponent } from '../modules/game/game.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardRouterProvider,
    LoginRouterProvider,
    AdminRouterProvider,
  GameRouterProvider,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    GameComponent
  ],
  providers: [
    HeroService,
    SignificateGame
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
