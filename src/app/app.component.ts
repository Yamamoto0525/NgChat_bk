import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
        <app-header></app-header>
        <router-outlet></router-outlet> <!--変更-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

}
