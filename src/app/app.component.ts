import { Component } from '@angular/core';
import { GlobalService, IContact } from './shared/global.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalService]
})

export class AppComponent {

  title = 'h2o';
  contacts: IContact[] = [];

}


