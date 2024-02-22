import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-book';
  constructor(api: ApiService) {

    api.getNotes().subscribe(k => console.log(k));
  }

}
