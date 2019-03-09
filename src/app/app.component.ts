import { Component, OnInit } from '@angular/core';
import { GlobalModule, IContact } from './global';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalModule]
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

  constructor(public global: GlobalModule) { }

  ngOnInit() {
    localStorage.setItem('contacts', JSON.stringify(this.generateContacts(4)));
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
  }

  public addLetterDivider(i: number) {
    if (i === 0) {
      return true;
    } else {
      if (this.global.getContacts()[i].lastName[0] !== this.global.getContacts()[i - 1].lastName[0]) {
        return true;
      } else {
        return false;
      }
    }
  }

  public write(obj) {
    console.log(obj)
  }

}


