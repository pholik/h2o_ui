import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { GlobalModule, IContact } from '../global';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() set activeContactId(value: number) {
    if (this.global.activeContact.id) {
      this.contactForm.setValue(this.global.activeContact);
    }
  }

  @Output() activeContactIdChange: EventEmitter<number> = new EventEmitter<number>();

  isEdit = false;

  contactForm = this.fb.group({
    id: [this.global.activeContact.id],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phone: [null],
    email: [null],
    address: [null],
    note: [null]
  });

  constructor(public global: GlobalModule,
              private fb: FormBuilder, public cd: ChangeDetectorRef) { }

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
    } else if (!this.contactForm.value.id) {
      const newId = Math.max.apply(Math, this.global.locContacts.map(o => o.id )) + 1;
      const newContact = this.contactForm.value;
      newContact.id = newId;
      this.onCreate(newContact);
      this.global.activeContactId = newId;
      this.global.activeContact = newContact;
      this.global.isEditing = false;
      this.cd.detectChanges();
    }
    this.global.isEditing = false;
  }

  public prepareCreateForm() {
    this.contactForm.reset();
    this.global.activeContactId = -1;
    this.global.activeContact = this.global.createEmptyContact();
    this.global.activeContact.id = -1;
    this.global.isEditing = true;
  }

  public startEditing() {
    this.global.isEditing = this.global.isEditing ? false : true;
  }

}
