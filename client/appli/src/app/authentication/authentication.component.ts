import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: [ './authentication.component.css' ]
})

export class AuthenticationComponent {
    loginForm: NgForm;

    constructor(private auth: AuthenticationService, private router: Router) {}

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        this.router.navigate(['']);

        this.auth.check(this.loginForm.value.login, this.loginForm.value.pwd);
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate(['/']);
        //         },
        //         error => {
        //             console.log(error);
        //         }
        // );
    }

    logout() {
        this.auth.isLoggedIn = false;
    }
}
