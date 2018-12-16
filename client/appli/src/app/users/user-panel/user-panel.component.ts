import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.css']
})

export class UserPanelComponent implements OnInit {
    userIsAuthenticated = false;
    private authStatusSub: Subscription;
    private user: any;

    constructor(private authService: AuthService,
                private userService: UserService
    ) {}

    ngOnInit() {

        let email = this.authService.getUser().data.email;
        this.userService.getUserByEmail(email).subscribe(userData => {
            this.user = userData;
        });

        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
          .getAuthStatusListener()
          .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
          });
    }

    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }

    getUser() {
        return this.user;
    }
}
