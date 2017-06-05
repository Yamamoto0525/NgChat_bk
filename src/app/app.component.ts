import { Component } from '@angular/core';
import { Comment } from './class/chat';

const COMMENTS: Comment[] = [
  { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
  { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
  { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public content = '';
  public comments = COMMENTS;
}
