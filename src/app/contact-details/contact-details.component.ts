import { Component, OnInit, Input } from '@angular/core';
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

  activeContact: IContact;

  contactForm = this.fb.group({
    id: [null],
    firstName: [null],
    lastName: [null]
  });

  constructor(public global: GlobalModule,
              private fb: FormBuilder) { }

  ngOnInit() { }

  public onUpdate() {
    this.global.updateContact(this.contactForm.value);
  }
}
