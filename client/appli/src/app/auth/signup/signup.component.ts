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
        const newUser = {
            email: form.value.email,
            password: form.value.pwd,
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            phone: form.value.phone,
            city: form.value.city,
            address: form.value.address
        };
        this.authService.createUser(newUser);
    }
}
