import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../../research.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-research-edit',
  templateUrl: './research-edit.component.html',
  styleUrls: ['./research-edit.component.css']
})
export class ResearchEditComponent implements OnInit {

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.researchService.search(form.value.research);
  }

}
