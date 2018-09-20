import {Component, OnInit} from '@angular/core';
import {Room} from '../room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  room: Room = {
    RName: 'cold room 1',
    RTemp: 14,
    /*TAlert: {
      min: 15,
      max: 25
    },
    TiAlert: {
      minTime: 5,
      maxTime: 10
    }*/
  };

  constructor() {
  }

  ngOnInit() {
  }

}
