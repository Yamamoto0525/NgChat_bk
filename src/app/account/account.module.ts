import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // 追加
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [ // 追加
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes), // 追加
  ],
  declarations: [LoginComponent, SignUpComponent]
})
export class AccountModule { }