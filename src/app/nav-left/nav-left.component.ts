import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GlobalModule, IContact } from '../global';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})

export class NavLeftComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();
  contacts: IContact[] = [];

  constructor(public global: GlobalModule) { }

  ngOnInit() { }

  public isActive(i: number) {
    return i === this.global.activeContactId;
  }

  public selectActive(index) {
    this.global.activeContactId = index;
    this.global.activeContact = this.global.getContactById(index);
    this.messageEvent.emit(index);
  }

  public addLetterDivider(i: number) {
    if (i === 0) {
      return true;
    } else {
      if (this.global.locContacts[i].lastName[0].toUpperCase() !== this.global.locContacts[i - 1].lastName[0].toUpperCase()) {
        return true;
      } else {
        return false;
      }
    }
  }

  public removeContact(id: number) {
    const contact = this.global.getContactById(id);
    const removeIndex = this.global.locContacts.map((item) => item.id)
                       .indexOf(contact.id);
    this.global.isEditing = false;
    this.global.activeContactId = -1;
    this.global.activeContact = this.global.createEmptyContact();
    this.global.locContacts.splice(removeIndex, 1);
  }

}


