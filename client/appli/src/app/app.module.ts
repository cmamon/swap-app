import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthentificationComponent } from './authentification/authentification.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UserListComponent,
        RegistrationComponent,
        AuthentificationComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
