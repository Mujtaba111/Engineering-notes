import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from 'src/about/about.component';
import { AuthModule } from 'src/auth/auth.module';
import { CivilComponent } from 'src/civil/civil.component';
import { CourseComponent } from 'src/course/course.component';
import { CseComponent } from 'src/cse/cse.component';
import { HomeComponent } from 'src/home/home.component';
import { ItComponent } from 'src/it/it.component';
import { JoinnowComponent } from 'src/joinnow/joinnow.component';
import { MechanicalComponent } from 'src/mechanical/mechanical.component';
import { AllPrimeNGModule } from 'src/plugins/all-primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviousPapersComponent } from './previous-papers/previous-papers.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    JoinnowComponent,
    AboutComponent,
    CseComponent,
    CivilComponent,
    MechanicalComponent,
    ItComponent,
    HomeComponent,
    PreviousPapersComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllPrimeNGModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
