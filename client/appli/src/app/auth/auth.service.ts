import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { serverUrl } from '../config/config';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private isAuth = false; // Non connecté par défaut
    private token: string;  // Pour stocker le token si connexion réussie
    private user: any;  // Récupérer l'utilisateur
    private authStatusListener = new Subject<boolean>(); // Pour alerter les composants lors d'un changement connexion/deconnexion

    // Injection de dependances = service doit être @Injectable
    constructor(private http: HttpClient, private router: Router) {}

    postToServer(url, data) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        this.http.post<any>(url, data, httpOptions).subscribe( res => {
            // Si le serveur nous renvoie un token, c'est que la connexion est accepté
            // On enregistre la clé (token) en on alerte les composants interéssé du changement
            // grâce à authStatusListener (Observable/Subject)
            if (res.userData && res.userData.token) {
                this.user = res.userData;
                this.token = res.userData.token;

                // Stocker dans le stockage local (HTML5 Local Storage) les infos sur
                // l'utilisateur et le token
                this.saveAuthData(JSON.stringify(res.userData));

                this.authStatusListener.next(true);
                this.isAuth = true;
                this.router.navigate(['/']); // On redirige l'user sur la page d'accueil
            }
        });
    }

    autoAuthUser() {
        const authInfo = this.getAuthData();
        if (authInfo) {
            this.token = authInfo.token;
            this.user = authInfo;
            this.isAuth = true;
            this.authStatusListener.next(true);
        }
    }

    private getAuthData() {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            const currentUser = JSON.parse(userData);
            if (!currentUser.token) {
                return;
            }
            return currentUser;
        }
    }

    private saveAuthData(userData: string) {
        localStorage.setItem('currentUser', userData);
    }

    private clearAuthData() {
        localStorage.removeItem('currentUser');
    }

    // Envoi une requete au serveur pour inscrire un nouveau membre
    createUser(newUser) {
        const url = serverUrl + 'users/signup';
        this.postToServer(url, newUser);
    }

    // Envoi une requête pour se connecter
    login(email: string, password: string) {
        const url = serverUrl + 'users/login';
        const data = { email: email, password: password };
        this.postToServer(url, data);
    }

    getToken() {
        return this.token;
    }

    getUser() {
        return this.user;
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
        this.clearAuthData();
        this.router.navigate(['/']); // On redirige l'user sur la page d'accueil'
    }
}
