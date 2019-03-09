import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GlobalModule, IContact } from '../global';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})

export class NavLeftComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();

  title = 'h2o';
  contacts: IContact[] = [];

  activeContact: number = null;

  constructor(public global: GlobalModule) { }

  ngOnInit() { }

  public isActive(i: number) {
    return i === this.activeContact;
  }

  public selectActive(index) {
    this.activeContact = index;
    this.messageEvent.emit(this.activeContact);
  }

  public addLetterDivider(i: number) {
    if (i === 0) {
      return true;
    } else {
      if (this.global.locContacts[i].lastName[0] !== this.global.locContacts[i-1].lastName[0]) {
        return true;
      } else {
        return false;
      }
    }
  }

}


