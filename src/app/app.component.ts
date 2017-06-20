import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  		<app-header></app-header> <!--追加-->
  		<app-chat></app-chat>
  `,  // templateに変更
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }

}
