import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TempratureComponent} from './room/temprature/temprature.component';
//import {AlarmComponent} from './room/alarm/alarm.component';
//import {Ng5SliderModule} from 'ng5-slider';
import { HourAlarmComponent } from './room/hour-alarm/hour-alarm.component';
import { RoomComponent } from './room/room.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

 // { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TempratureComponent,
    //AlarmComponent,
    HourAlarmComponent,
    RoomComponent, //NKDatetimeModule,

  ],
  imports: [
    BrowserModule,
    //Ng5SliderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
