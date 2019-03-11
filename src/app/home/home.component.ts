import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../shared/global.service';

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

  constructor(public global: GlobalService) { }

  ngOnInit() {

  }
}


