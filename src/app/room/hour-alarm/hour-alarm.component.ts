import {Component, NgModule, OnInit} from '@angular/core';
//import {Options} from 'ng5-slider';
//import {TimeAlert} from '../../time';


@Component({
  selector: 'app-hour-alarm',
  templateUrl: './hour-alarm.component.html',
  styleUrls: ['./hour-alarm.component.css']
})
@NgModule()

export class HourAlarmComponent implements OnInit {
  /*@Input() TimAlert: TimeAlert;
  minValue: number;
  maxValue: number;
  options: Options = {
    floor: 0,
    ceil: 15,
    step: 5,
    translate: (value: number): string => {
      return value + 'minutes';
    }
  };*/

  constructor(){}
  ngOnInit() {}/*{
    this.minValue = this.TimAlert.minTime;
    this.maxValue = this.TimAlert.maxTime;

    console.log(this.minValue);
    console.log(this.maxValue);
  }*/

 /* onUpdate() {
    console.log(this.minValue + " " + this.maxValue);
  }*/
}
