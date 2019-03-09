import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  activeContactId: number;

  receiveMessage($event) {
    this.activeContactId = $event;
  }

  constructor(public global: GlobalModule) { }

  ngOnInit() {

  }
}


