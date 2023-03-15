import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "../../current-user.interface";
import { select, Store } from "@ngrx/store";
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from "../../../auth/store/selector";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  standalone: true
})
export class TopBarComponent implements  OnInit{
  isLoggedIn$: Observable<boolean | null> | undefined
  isAnonymous$: Observable<boolean> | undefined
  currentUser$: Observable<CurrentUserInterface | null> | undefined

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
