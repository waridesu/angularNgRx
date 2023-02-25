import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from "../../types/backend-errors.interface";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | null = null;

  errorMessages: string[] = [];

  ngOnInit() {
    if (this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
        if(this.backendErrorsProps) {
          const messages = this.backendErrorsProps[name].join(', ');
          return `${name} ${messages}`;
        }
          return '';
      })
    }

  }
}
