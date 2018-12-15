import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResearchService } from '../../research.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.css']
})
export class ResearchListComponent implements OnInit, OnDestroy {
  properties = [];
  services = [];

  userIsAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(private researchService: ResearchService, private authService: AuthService) { }

  ngOnInit() {
    this.properties = this.researchService.getProperties();
    this.services = this.researchService.getServices();

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

}
