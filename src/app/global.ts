export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
  }

export class GlobalApp {

    constructor() {}

    public localStorageItem(id: string): string {
        return localStorage.getItem(id);
    }

    public getContacts(): IContact[] {
        return JSON.parse(localStorage.getItem('contacts'));
    }
}