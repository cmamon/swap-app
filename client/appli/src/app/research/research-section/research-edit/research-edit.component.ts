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

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.radioControl === '1') {
      this.researchService.searchProperties({research: [form.value.research]});
    } else {
      this.researchService.searchServices({research: [form.value.research]});
    }
  }

}
