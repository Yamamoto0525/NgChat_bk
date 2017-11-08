import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatDatePipe } from './pipe/chat-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ 
    CommonModule,
    FormsModule,
  	ChatDatePipe
  ],
  declarations: [
  	ChatDatePipe
  ]
})
export class SharedModule { }
