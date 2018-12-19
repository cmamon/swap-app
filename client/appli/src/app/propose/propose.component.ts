import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProposeService } from './propose.service';

@Component({
    selector: 'app-propose',
    templateUrl: './propose.component.html',
    styleUrls: ['./propose.component.css']
})
export class ProposeComponent implements OnInit {
    private keywords = [];
    selectedDay: string = '0';
    selectedType: string = 'good';

    constructor(private proposeServ: ProposeService, private router: Router) {}

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const rawKeywords = form.value.keywords.split(',');
        rawKeywords.forEach(keyword => { this.keywords.push(keyword.trim()); });

        /* Récupérer l'email de celui qui poste l'annonce */
        const userData = localStorage.getItem('currentUser');
        if (!userData) {
            return;
        }

        const userEmail = JSON.parse(userData).data.email;

        const object: {[k: string]: any} = {};
        object.title = form.value.title;
        object.owner = userEmail;
        object.description = form.value.description;

        const availability: {[k: string]: any} = {};
        availability.propOrServ = '';
        availability.propOrServId = '';
        availability.days = form.value.day.map(Number);

        /* Ajouter le bien ou le service */
        if (form.value.goodOrServ === 'good') {
            this.proposeServ.getGoods().subscribe((goods: []) => {

                object.price = form.value.price;
                object.propId = 'prop_' + (goods.length + 1);
                object.pictureLink = form.value.image;

                this.proposeServ.addGood(object).subscribe();

                const goodDescription: {[k: string]: any} = {};
                goodDescription.propId = object.propId;
                goodDescription.keyword = this.keywords;

                this.proposeServ.addGoodDescription(goodDescription).subscribe();

                availability.propOrServ = 'property';
                availability.propOrServId = object.propId;

                // Ajouter une disponibilité
                this.proposeServ.addAvailability(availability).subscribe();

                this.router.navigate(['/']); // On redirige l'user sur la page d'accueil
            });
        } else {
            this.proposeServ.getServices().subscribe((services: []) => {

                object.pricePerHour = form.value.price;
                object.servId = 'serv_' + (services.length + 1);

                this.proposeServ.addService(object).subscribe();

                const serviceDescription: {[k: string]: any} = {};
                serviceDescription.servId = object.servId;
                serviceDescription.keyword = this.keywords;

                this.proposeServ.addServiceDescription(serviceDescription)
                .subscribe();

                availability.propOrServ = 'service';
                availability.propOrServId = object.servId;

                // Ajouter une disponibilité
                this.proposeServ.addAvailability(availability).subscribe();

                this.router.navigate(['/']); // On redirige l'user sur la page d'accueil
            });
        }
    }
}
