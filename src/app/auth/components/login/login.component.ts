import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selector";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../../shared/current-user.interface";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";
import { LoginRequestInterface } from "../../types/login-request.interface";
import { loginAction } from "../../store/actions/login.action";


interface RegisterForm {
  email: FormControl<string>
  password: FormControl<string>
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup<RegisterForm> | undefined;
  isSubmitting$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendErrorsInterface | null> | undefined;

  constructor(private fb: NonNullableFormBuilder,
              private store: Store,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.formInit();
    this.initValues();
  }

  formInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit() {
    const formValue = this.form?.value;

    if (formValue && this.form?.valid) {
      const request: LoginRequestInterface = {
        user : {
          email: formValue.email || '',
          password: formValue.password || ''
        }

      };

      this.store.dispatch(loginAction({request}));

    }
  }
}
