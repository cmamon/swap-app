import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../../research.service';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.css']
})
export class ResearchListComponent implements OnInit {
  properties = [];
  services = [];

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
    this.researchService.searchProperties({research: ['outil']}).subscribe(res => this.properties = res);
  }

}
