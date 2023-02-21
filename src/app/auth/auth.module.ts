import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterLinkWithHref } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
