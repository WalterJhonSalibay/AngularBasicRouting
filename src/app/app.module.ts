import { Component,NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";


const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},

];

@NgModule({
 imports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
	],

	 declarations: [
      AppComponent,
	  LoginComponent,
	  SignupComponent,
	  DisplayhelloworldComponent

  ],
  providers: [
    provideAnimationsAsync(),
    ],

  bootstrap: [
    AppComponent
  ],

  exports: [RouterModule],

})

export class AppModule { }
