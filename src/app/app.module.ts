import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepComponent } from './components/step/step.component';
import { MainComponent } from './components/main/main.component';
import {FormsModule} from '@angular/forms';
import { AnswerComponent } from './components/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    MainComponent,
    AnswerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
