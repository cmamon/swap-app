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

    constructor(private proposeServ: ProposeService, private router: Router) {}

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        const rawKeywords = form.value.keywords.split(',');
        rawKeywords.forEach(keyword => { this.keywords.push(keyword.trim()); });

        let object = {
            title: form.value.title,
            description: form.value.description,
            price: form.value.price,
        }

        let availability = {
            propOrServ: "",
            propOrServId: "",
            days: form.value.day,
        }

        console.log(form);
        return;
        // Ajouter le bien ou le service
        if (form.value.radio === 'good') {
            this.proposeServ.addGood(object)
              .subscribe(good => console.log(good));
            availability.propOrServ = 'good';
        } else {
            this.proposeServ.addService(object)
              .subscribe(service => console.log(service));
            availability.propOrServ = 'service';
        }

        // Ajouter une disponibilité
        this.proposeServ.addAvailability(availability)
          .subscribe(availability => console.log(availability));

        this.router.navigate(['/']); // On redirige l'user sur la page d'accueil
    }
}
