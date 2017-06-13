import { Component } from '@angular/core';
import { Comment, User } from './class/chat';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; // 更新

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
// COMMENTSを削除

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // itemを削除
  public FB_comments: FirebaseListObservable<any[]>; // 追加
  public content = '';
  public comments: Comment[] = []; // 更新
  public current_user = CURRENT_USER;

  // DI（依存性注入する機能を指定）
  constructor(db: AngularFireDatabase) {
    // itemを削除
    this.FB_comments = db.list('/comments'); // 追加
    this.FB_comments.subscribe((snapshots: any[]) => {
      this.comments = []; // コメントを初期化
      snapshots.forEach((snapshot: any) => {
        // 取得したデータを反映
        this.comments.push(new Comment(snapshot.user, snapshot.content).setData(snapshot));
      });
    });
  }

  // 新しいコメントを追加
  addComment(comment: string) {
     if (comment) {
       this.FB_comments.push(new Comment(this.current_user, comment)); // 更新
       this.content = '';
     }
  }

  // 編集フィールドの切り替え
  toggleEditComment(num: number) {
    this.comments[num].edit_flag = (this.comments[num].edit_flag) ? false : true;
  }

  // コメントを更新する
  saveEditComment(num: number, key: string) {
    this.FB_comments.update(key, {
      content: this.comments[num].content, 
      date: this.comments[num].date
    }).then( () => {
      alert('コメントを更新しました');
      this.comments[num].edit_flag = false;
    });
  }

  // コメントをリセットする
  resetEditComment(num: number) {
    this.comments[num].content = '';
  }

  // コメントを削除する
  deleteComment(key: string) {
    this.FB_comments.remove(key).then(() => {
      alert('コメントを削除しました');
    });
  }

}
