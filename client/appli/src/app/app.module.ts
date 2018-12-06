import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './users/user-list/user-list.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        AppRoutingModule
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
