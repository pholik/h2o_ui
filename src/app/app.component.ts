import { Component } from '@angular/core';
import { GlobalModule, IContact } from './global';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalModule]
})

export class AppComponent {

  title = 'h2o';
  contacts: IContact[] = [];

}


