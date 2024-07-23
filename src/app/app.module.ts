import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [AppComponent, TodolistComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
