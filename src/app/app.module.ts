import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CounterComponent} from './counter/counter.component';
import {FormComponent} from "./form/form.component";
import {PostsComponent} from "./posts/posts.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
