export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
  }

export class GlobalModule {
    locContacts: IContact[];
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

    constructor() {
        localStorage.setItem('contacts', JSON.stringify(this.generateContacts(4)));
        this.locContacts = this.generateContacts(10);
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
      let a = this.getContactById(updatedContact.id);
      for (let key in a) {
        a[key] = updatedContact[key];
      }
    }
}
