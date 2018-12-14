import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: [ './authentication.component.css' ]
})

export class AuthenticationComponent {
    constructor(private auth: AuthenticationService) {}

    onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }
        if (this.auth.check(form.value.login, form.value.pwd)) {
            this.auth.isLoggedIn = true;
        } else {
            this.auth.isLoggedIn = false;
        }
    }

    logout() {
        this.auth.isLoggedIn = false;
    }
}
