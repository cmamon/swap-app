import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ResearchService } from 'src/app/research/research.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-research-item',
  templateUrl: './research-item.component.html',
  styleUrls: ['./research-item.component.css']
})
export class ResearchItemComponent implements OnInit, OnDestroy {
  @Input() resultat;
  @Input() type: string;
  today: Date;
  reservations = [];
  availabilities = [];
  reserved = false;

  userIsAuthenticated = false; // Non connecté par défaut
  private authListenerSubs: Subscription; // Pour écouter un changement connecté/déconnecté

  myFilter = (d: Date): boolean => {
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    const date = {day: day, month: month, year: year};

    if (this.availabilities.includes(d.getDay())) {
      return false;
    }
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

  onSubmit(form: NgForm, e) {
    if (form.invalid) {
      return;
    }
    this.reserved = true;
    // JSON.parse(localStorage.getItem('currentUser')).email

    const propOrServ = (this.resultat.propId) ? 'property' : 'service';
    const propOrServId = (this.resultat.propId) ? this.resultat.propId : this.resultat.servId;

    const data = {email: 'test',
                  propOrServ: propOrServ,
                  propOrServId: propOrServId,
                  day: form.value.dateChoice.getDate(),
                  month: form.value.dateChoice.getMonth(),
                  year: form.value.dateChoice.getFullYear()};

                  console.log(data);

    this.researchService.onReserved(data);
  }

  onOpened() {
    let id;
    if (this.resultat.propId) {
      id = this.resultat.propId;
    } else {
      id = this.resultat.servId;
    }
    this.reservations = this.researchService.getReservations(id);
    this.availabilities = this.researchService.getAvailabilities(id);
  }

}
