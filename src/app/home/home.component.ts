import { Component, OnInit, Input } from '@angular/core';
import { GlobalModule } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input() activeContactId: number;

  receiveMessage($event) {
    this.activeContactId = $event;
  }

  constructor(public global: GlobalModule) { }

  ngOnInit() {

  }
}


