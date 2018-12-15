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
    if (form.value.radio === '1') {
      this.researchService.searchProperties({research: keywordsOK});
    } else {
      this.researchService.searchServices({research: keywordsOK});
    }
  }

}
