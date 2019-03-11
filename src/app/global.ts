import { concat } from 'rxjs';
import { names } from '../assets/names';

export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    note: string;
  }

export class GlobalModule {
    locContacts: IContact[];
    activeContactId: number;
    activeContact: IContact = this.createEmptyContact();
    isEditing = false;

    constructor() {
        this.locContacts = this.generateContacts(100);
    }

    private generateContacts(iter: number) {
        let i: number;
        const contacts: IContact[] = [];
        for (i = 1; i <= iter; i++) {
          const randOne = Math.floor(Math.random() * names.length) + 0;
          const randTwo = Math.floor(Math.random() * names.length) + 0;
          const n = (Math.floor(Math.random() * 1000000000)).toString();
          const genPhone = n.substring(0, 3) + '-' + n.substring(3, 6) + '-' + n.substring(6, 9);
          const genNote = `Lorem ipsum dolor sit amet, an nibh ocurreret deterruisset cum,
           lorem euripidis at mel. Diam semper prodesset nec ad. Duo sint putant euripidis eu.
           Ex tritani verterem intellegat vel, per amet primis tamquam in.`;
          contacts.push({
            id: i,
            firstName: names[randOne],
            lastName: names[randTwo],
            phone: genPhone,
            email: names[randOne].toLowerCase() + '.' + names[randTwo].toLowerCase() + '@h2o.ai',
            address: randOne.toString() + ' ' + names[randOne] + ' Street, ' + (randOne * randTwo).toString(),
            note: genNote
          });
        }
        return contacts;
      }

    public localStorageItem(id: string): string {
        return localStorage.getItem(id);
    }

    public getContacts(): IContact[] {
        return JSON.parse(localStorage.getItem('contacts'));
    }

    public getContactById(id: number): IContact {
        return this.locContacts.filter(x => x.id === id)[0];
    }

    public updateContact(updatedContact: IContact): void {
      const contact = this.getContactById(updatedContact.id);
      for (const key of Object.keys(contact)) {
        contact[key] = updatedContact[key];
      }
    }

    public addContact(newContact: IContact): void {
      this.locContacts.push(newContact);
    }

    public createEmptyContact(): IContact {
      return {
        id: null,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        address: null,
        note: null
      };
    }
}
