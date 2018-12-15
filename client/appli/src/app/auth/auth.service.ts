import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private isAuth = false; // Non connecté par défaut
    private token: string;  // Pour stocker le token si connexion réussie
    private authStatusListener = new Subject<boolean>(); // Pour alerter les composants lors d'un changement connexion/deconnexion

    // Injection de dependances = service doit être @Injectable
    constructor(private http: HttpClient, private router: Router) {}

    // Envoi une requete au serveur pour inscrire un nouveau membre
    createUser(email: string, password: string) {
        const url = 'http://localhost:8888/users/signup';
        const data = {
            email: email,
            password: password
        };
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        this.http.post(url, data, httpOptions).subscribe();
    }

    // Envoi une requête pour se connecter
    login(email: string, password: string) {
        const url = 'http://localhost:8888/users/login';
        const data = {email: email, password: password};
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.http.post<{token: string}>(url, data, httpOptions).subscribe( res => {
            console.log(res);
            this.token = res.token;
            // Si le serveur nous renvoie un token, c'est que la connexion est accepté
            // On enregistre la clé (token) en on alerte les composants interéssé du changement
            // grâce à authStatusListener (Observable/Subject)
            if (res.token) {
                this.authStatusListener.next(true);
                this.isAuth = true;
                this.router.navigate(['/']); // On redirige l'user sur la page d'accueil
            }
        });
    }

    getToken() {
        return this.token;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    getIsAuth() {
        return this.isAuth;
    }

    // Lors de la deconnexion, on remet le token à null et on reset les infos utiles
    logout() {
        this.token = null;
        this.isAuth = false;
        this.authStatusListener.next(false);
        this.router.navigate(['/login']); // On redirige l'user sur la page de login (ou autre)
    }
}
