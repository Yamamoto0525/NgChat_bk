import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'; // 追加
import { AngularFireDatabaseModule } from 'angularfire2/database'; // 追加
import { AngularFireAuthModule } from 'angularfire2/auth'; // 追加
import { environment } from '../environments/environment'; // 追加

import { AppComponent } from './app.component';
import { ChatDatePipe } from './pipe/chat-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFireDatabaseModule, // 追加
    AngularFireAuthModule, // 追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
