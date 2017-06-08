import { Component } from '@angular/core';
import { Comment, User } from './class/chat';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'; // 追加

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
const COMMENTS: Comment[] = [ 
	new Comment(ANOTHER_USER, 'Suzukiの１つ目のコメントです。'),
	new Comment(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
	new Comment(CURRENT_USER, 'Tanakaの１つ目のコメントです。'),
	new Comment(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
	new Comment(CURRENT_USER, 'Tanakaの2つ目のコメントです。')
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  item: FirebaseObjectObservable<any[]>; // 追加
  public content = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;

  // DI（依存性注入する機能を指定）
  constructor(db: AngularFireDatabase) {
    this.item = db.object('/item');
  }

  // 新しいコメントを追加
  addComment(comment: string) {
     if (comment) {
       this.comments.push(new Comment(this.current_user, comment));
       this.content = '';
     }
  }

}
