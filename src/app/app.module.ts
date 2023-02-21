import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { RegisterComponent } from "./auth/components/register/register.component";

const routes: Routes = [
  {
    path : 'register',
    component: RegisterComponent
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
