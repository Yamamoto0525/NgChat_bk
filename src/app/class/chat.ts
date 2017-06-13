import * as moment from 'moment';

export class User {
  uid: number;
  name: string;

  constructor(uid: number, name: string) {
    this.uid = uid;
    this.name = name;
  }
}

export class Comment {
  user: User;
  initial: string;
  content: string;
  date: number;
  key?: string; // 追加
  edit_flag?: boolean; // 追加

  constructor(user: User, content: string) {
    this.user = user;
    this.initial = user.name.slice(0, 1);
    this.content = content;
    this.date = +moment();
  }

  // 取得した日付を反映し、更新フラグをつける
  setData(value: any): Comment {
    this.date = value.date;
    this.key = value.$key // 追加
    this.edit_flag = false; // 追加
    return this;
  }
}