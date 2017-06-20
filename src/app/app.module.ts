import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModuleを削除
import { CoreModule } from './core/core.module'; // 追加
import { SharedModule } from './shared/shared.module'; // 追加
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component'; // 追加
// ChatDatePipeを削除

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    // ChatDatePipeを削除
  ],
  imports: [
    BrowserModule,
    // FormsModuleを削除
    CoreModule, // 追加
    SharedModule, // 追加
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
