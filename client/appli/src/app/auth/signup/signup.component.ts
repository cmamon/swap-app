import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    constructor(private authService: AuthService) {}

    onSignup(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // Si le formulaire est valide, on utilise le service pour envoyer une inscription
        this.authService.createUser(form.value.email, form.value.pwd);
    }
}
