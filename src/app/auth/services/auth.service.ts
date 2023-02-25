import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from "../types/register-request.interface";
import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "../../shared/current-user.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthResponseInterface } from "../types/auth-response.interface";
import { LoginRequestInterface } from "../types/login-request.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`;

    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return  response.user
  }
}
