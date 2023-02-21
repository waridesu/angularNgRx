 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from "@angular/forms";


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
  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: ''
    })
    console.log(this.form.valid);
  }

  onSubmit() {
    console.log(this.form?.value);
  }
}
