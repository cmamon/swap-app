import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../../research.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-research-edit',
  templateUrl: './research-edit.component.html',
  styleUrls: ['./research-edit.component.css']
})
export class ResearchEditComponent implements OnInit {
  selectedRadio = '1';
  today: Date;

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
    this.today = new Date();
  }

  onSubmit(form: NgForm) {
    const keywords = form.value.research.split(',');
    const keywordsOK = [];
    keywords.forEach(element => {
      keywordsOK.push(element.trim());
    });
    let days = [0, 1, 2, 3, 4, 5, 6];
    if (form.value.dateChoice) {
      days = [form.value.dateChoice.getDay()];
    }
    if (form.value.radio === '1') {
      this.researchService.searchProperties({research: keywordsOK, days : days});
    } else {
      this.researchService.searchServices({research: keywordsOK, days : days});
    }
  }

}
