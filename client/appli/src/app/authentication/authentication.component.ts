import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: [ './authentication.component.css' ]
})

export class AuthenticationComponent {

    public isLoggedIn = false;

    constructor(private service: AuthenticationService) {}

    onSubmit(form: NgForm) {
        if (form.invalid) {
          return;
        }
        this.isLoggedIn = this.service.verif(form.value.login, form.value.pwd);
    }

    logout() {
        this.isLoggedIn = false;
    }
}
