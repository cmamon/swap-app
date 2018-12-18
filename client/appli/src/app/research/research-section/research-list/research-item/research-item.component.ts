import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ResearchService } from 'src/app/research/research.service';

@Component({
  selector: 'app-research-item',
  templateUrl: './research-item.component.html',
  styleUrls: ['./research-item.component.css']
})
export class ResearchItemComponent implements OnInit, OnDestroy {
  @Input() resultat;
  @Input() type: string;
  today: Date;
  reservations = [
    {
      day: 26,
      month: 11,
      year: 2018
    }
  ];

  userIsAuthenticated = false; // Non connecté par défaut
  private authListenerSubs: Subscription; // Pour écouter un changement connecté/déconnecté

  myFilter = (d: Date): boolean => {
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    const date = {day: day, month: month, year: year};

    for (let i = 0; i < this.reservations.length; i++) {
      if (this.reservations[i].day === date.day &&
          this.reservations[i].month === date.month &&
          this.reservations[i].year === date.year) {
        return false;
      }
    }

    return true;
  }

  constructor(private authService: AuthService,
              private router: Router,
              private researchService: ResearchService) { }

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

  onOpened() {
    
  }

}
