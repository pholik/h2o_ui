import { Component, OnInit } from '@angular/core';
import { GlobalApp, IContact } from './global';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalApp]
})

export class AppComponent implements OnInit {

  title = 'h2o';
  contacts: IContact[] = [];
  names = ['Adam',
  'Andrewe',
  'Anthonye',
  'Archbould',
  'Arthure',
  'Ambrose',
  'Alexander',
  'Barthe',
  'Bartram',
  'Bryan',
  'Christofer',
  'Cuthbert',
  'Charles',
  'Deane',
  'Den',
  'Edwarde',
  'Edmunde',
  'Euyn',
  'Francis',
  'Gabriell',
  'Gawen',
  'George',
  'Gerard',
  'Germayne',
  'Gilbert',
  'Gillian',
  'Godfrey',
  'Gyeles',
  'Harye',
  'Hector',
  'Henry',
  'Helyng',
  'Hewgh',
  'Jamys',
  'Jarard',
  'Jarret',
  'Jaspar',
  'John',
  'Jasper',
  'Kobert',
  'Lancelot',
  'Lamwell',
  'Leonard',
  'Lewis',
  'Laurence',
  'Lyones',
  'Lyonell',
  'Mathew',
  'Marke',
  'Martayn',
  'Marmaduke',
  'Michell',
  'Myghall',
  'Mydfurthe',
  'Nycoles',
  'Odnall',
  'Oswyne',
  'Oswold',
  'Patryke',
  'Percyvall',
  'Peires',
  'Peter',
  'Randell',
  'Ralph',
  'Ranolde',
  'Reginolde',
  'Robert',
  'Richard',
  'Robert',
  'Roger',
  'Rowland',
  'Rynyone',
  'Sampson',
  'Stevne',
  'Symond',
  'Thomas',
  'Tristram',
  'Tymothie',
  'Umfray',
  'Walter',
  'William'];

  activeContact: number = null;

  constructor(public app: GlobalApp) { }

  ngOnInit() {
    localStorage.setItem('contacts', JSON.stringify(this.generateContacts(200)));
    this.contacts = this.generateContacts(200);
  }

  private generateContacts(iter: number) {
    let i: number;
    let contacts: IContact[] = [];
    for (i = 1; i <= iter; i++) {
      const randOne = Math.floor(Math.random() * this.names.length) + 0;
      const randTwo = Math.floor(Math.random() * this.names.length) + 0;
      contacts.push({
        id: i,
        firstName: this.names[randOne],
        lastName: this.names[randTwo]
      });
    }
    return contacts;
  }

  public isActive(i: number) {
    return i === this.activeContact;
  }

  public selectActive(index) {
    this.activeContact = index;
    console.log(this.activeContact)
  }

  public addLetterDivider(i: number) {
    if (i === 0) {
      return true;
    } else {
      if (this.contacts[i].lastName[0] !== this.contacts[i - 1].lastName[0]) {
        return true;
      } else {
        return false;
      }
    }
  }

}


