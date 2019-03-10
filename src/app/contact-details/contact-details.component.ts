import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalModule, IContact } from '../global';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() set activeContactId(value: number) {
    this.activeContact = this.global.getContactById(value);
    if (this.activeContact) {
      this.contactForm.setValue(this.activeContact);
    }
  }

  @Output() activeContactIdChange: EventEmitter<number> = new EventEmitter<number>();

  activeContact: IContact;
  isEdit = false;

  contactForm = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phone: [null],
    address: [null],
    note: [null]
  });

  constructor(public global: GlobalModule,
              private fb: FormBuilder) { }

  ngOnInit() { }

  private onUpdate(updatedContact: IContact) {
    this.global.updateContact(this.contactForm.value);
  }

  private onCreate(newContact) {
    this.global.addContact(newContact);
    this.contactForm.reset();
  }

  public onSubmit() {
    if (this.contactForm.value.id) {
      this.onUpdate(this.contactForm.value);
    } else {
      const newId = Math.max.apply(Math, this.global.locContacts.map(o => o.id )) + 1;
      const newContact = this.contactForm.value;
      newContact.id = newId;
      this.onCreate(newContact);
    }
    this.isEdit = false;
  }

  public prepareCreateForm() {
    this.contactForm.reset();
    // this.activeContactId = null;
    this.activeContact = this.global.createEmptyContact();
    this.isEdit = true;
    // this.activeContactIdChange.emit(-1);
  }

  public startEditing() {
    this.isEdit = this.isEdit ? false : true;
  }

}
