import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../../shared/current-user.interface";
import { PersistenceService } from "../../../shared/services/persistence.service";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/get-current-user.action";

@Injectable()
export class GetCurrentUserEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService: PersistenceService) {
  }
  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
        const token = this.persistenceService.get('accessToken')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError(() =>
            of(getCurrentUserFailureAction())
          )
        )
      }
      )
  ))
}
