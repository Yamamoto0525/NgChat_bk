import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 追加
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // 追加
  ],
  exports: [
  	HeaderComponent 
  ],  
  declarations: [
  	HeaderComponent 
  ]
})
export class CoreModule {

	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
	  if (parentModule) {
	    throw new Error(
	      'CoreModule is already loaded. Import it in the AppModule only');
	  }
	}

 }
