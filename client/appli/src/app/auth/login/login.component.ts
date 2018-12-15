import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

// Pas besoin de selector car on utilise <router-outlet>
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private authService: AuthService) {}

    onLogin(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // Si le formulaire est valide, on utilise le service pour envoyer une requete de connexion
        this.authService.login(form.value.email, form.value.pwd);

    }
}
