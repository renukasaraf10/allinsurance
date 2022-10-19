import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentsComponent } from './datacommunication/parents/parents.component';
import { ChildComponent } from './datacommunication/parents/child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FComponent } from './f/f.component';
import { SComponent } from './s/s.component';
import { ButtonModule } from 'primeng/button';

import {DialogModule} from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';
import { SampaldataComponent } from './sampaldata/sampaldata.component';
import { DatacomeComponent } from './datacome/datacome.component';
import { PradataComponent } from './pradata/pradata.component';
import { ForpraComponent } from './forpra/forpra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,

    ParentsComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    FComponent,
    SComponent,
    SampaldataComponent,
    DatacomeComponent,
    PradataComponent,
    ForpraComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TriStateCheckboxModule,
    MessagesModule ,
    ConfirmDialogModule,
    DialogModule,
    HttpClientModule,
   ConfirmDialogModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule


    
    
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
