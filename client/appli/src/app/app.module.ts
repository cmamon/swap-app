import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule } from '@angular/material';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AuthentificationService } from './authentification.service';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatListModule,
        MatPaginatorModule,
        MatTableModule,
        MatToolbarModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        UserListComponent,
        RegistrationComponent,
        AuthentificationComponent
    ],
    providers: [
        AuthentificationService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
