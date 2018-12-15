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
        // Si le formulaire n'est pas valide lors du clic sur le bouton
        // il ne faut surtout pas continuer
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.email, form.value.pwd);
    }
}
