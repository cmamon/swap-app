import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent {
  private login : string;
  private pwd : string;
  private isLoggedIn: boolean = false;

  constructor() { }

  onSubmit() {
    //No verif
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = true;
  }
}
