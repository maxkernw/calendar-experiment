import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularFire2';
import { AngularFireDatabaseModule } from 'angularFire2/database';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { FirebaseEffect } from './store';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';

export const firebaseCredentials = {
  apiKey: 'AIzaSyDJcX1IY4TpHTJd3aVOF53OmnEnyXe-KVc',
  authDomain: 'tegel-c3286.firebaseapp.com',
  databaseURL: 'https://tegel-c3286.firebaseio.com',
  projectId: 'tegel-c3286',
  storageBucket: 'tegel-c3286.appspot.com',
  messagingSenderId: '859468822835'
};

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([FirebaseEffect]),
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
