import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule} from "@angular/forms";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { ViewEncapsulation} from "@angular/core";


import { AppComponent } from './app.component';
import {DataService} from "./data.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AccordionModule,
    DropdownModule,
    CalendarModule,


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
