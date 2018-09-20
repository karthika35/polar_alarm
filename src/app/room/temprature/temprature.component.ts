import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {

 @Input() Temp: number;
 @Input() Name: string;
  today = new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm a', 'en-US', '+0530');
  }

  ngOnInit() {
    //console.log(this.jstoday);
  }

}
