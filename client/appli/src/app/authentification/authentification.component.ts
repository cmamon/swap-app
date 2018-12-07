import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: [ './authentification.component.css' ]
})

export class AuthentificationComponent {

    public isLoggedIn = false;

    constructor(private service: AuthentificationService) {}

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
