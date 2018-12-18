import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-item',
  templateUrl: './research-item.component.html',
  styleUrls: ['./research-item.component.css']
})
export class ResearchItemComponent implements OnInit, OnDestroy {
  @Input() resultat;
  @Input() type: string;
  today: Date;

  userIsAuthenticated = false; // Non connecté par défaut
  private authListenerSubs: Subscription; // Pour écouter un changement connecté/déconnecté

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth(); // connecté ou pas ?
    this.authListenerSubs = this.authService // On se met en écoute d'un changement
        .getAuthStatusListener()
        .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
    this.today = new Date();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe(); // On se désabonne
  }

  onClickB() {
    this.router.navigate(['/login']);
  }

  onBuy() {

  }

}
