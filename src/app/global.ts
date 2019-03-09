export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
  }

export class GlobalModule {

    constructor() {}

    public localStorageItem(id: string): string {
        return localStorage.getItem(id);
    }

    public getContacts(): IContact[] {
        return JSON.parse(localStorage.getItem('contacts'));
    }

    public getContactById(id: number): IContact[] {
        return JSON.parse(localStorage.getItem('contacts')).filter(x => x.id === id)[0];
    }
}