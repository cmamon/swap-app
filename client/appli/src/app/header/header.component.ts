import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

    userIsAuthenticated = false; // Non connecté par défaut
    private authListenerSubs: Subscription; // Pour écouter un changement connecté/déconnecté

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth(); // connecté ou pas ?
        this.authListenerSubs = this.authService // On se met en écoute d'un changement
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
                this.userIsAuthenticated = isAuthenticated;
            });
    }

    ngOnDestroy() {
        this.authListenerSubs.unsubscribe(); // On se désabonne
    }

    // Lors du clic sur Logout on appelle la méthode logout de notre service
    onLogout() {
        this.authService.logout();
    }

}
