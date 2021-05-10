import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Firstcomponent} from './first/first.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { DirectiveEgComponent } from './directive-eg/directive-eg.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { HousesComponent } from './houses/houses.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {AngularFireModule} from 'angularfire2';
import  {AngularFireDatabaseModule}from 'angularfire2/database';
import  {environment} from '../environments/environment';
import {TodoComponent} from './todo/todo.component';
//defining routes
const ROUTES:Routes=[{path:'homeo',component:HomeComponent},
{path:'greet',component:GreetComponent},
{path:'houses',component:HousesComponent}]
@NgModule({
  declarations: [
    AppComponent,
    Firstcomponent,
    DirectiveEgComponent,
    HomeComponent,
    GreetComponent,
    HousesComponent,
    TemplateDrivenComponent,
    TodoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //registering routes
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
