import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { registerAction } from "../../store/actions/register.action";
import { Observable } from "rxjs";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selector";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../../shared/current-user.interface";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";


interface RegisterForm {
  username: FormControl<string>
  email: FormControl<string>
  password: FormControl<string>
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
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
      const request: RegisterRequestInterface = {
        user : {
          username: formValue.username || '',
          email: formValue.email || '',
          password: formValue.password || ''
        }

      };

      this.store.dispatch(registerAction({request}));
      this.authService.register(request).subscribe((currentUser: CurrentUserInterface) => {
        console.log('currentUser', currentUser);
      });
    }
  }
}
