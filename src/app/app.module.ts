import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{SecondaryStudentModel} from 'src/app/model/SecondaryStudent.model';
import{SecondarySubject} from 'src/app/model/SecondarySubject.model';
import{SecondaryDataService} from 'src/app/service/secondary-data.service';
import { PrimaryComponent } from './primary/primary.component';
import {HttpClientModule, HttpResponse, HttpHeaders} from '@angular/common/http' ;
import { SecondaryComponent } from './secondary/secondary.component';
import { PrimaryStudentListComponent } from './primary/primary-student-list/primary-student-list.component';
import{SecondaryStudentListComponent} from './secondary/secondary-student-list/secondary-student-list.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    SecondaryComponent,
    PrimaryStudentListComponent,
    SecondaryStudentListComponent
  ],
  imports: [
FormsModule,
BrowserModule,HttpClientModule,
AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
