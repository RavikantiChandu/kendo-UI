import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import {DiCustomGridComponent} from './Components/di-custom-grid.component'
import { DiCustomGridColumnComponent } from './Components/di-custom-grid-column.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogsModule } from '@progress/kendo-angular-dialog';


@NgModule({
  declarations: [
    AppComponent,
    DiCustomGridComponent,   
    DiCustomGridColumnComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    NgbModule,
    DialogsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
