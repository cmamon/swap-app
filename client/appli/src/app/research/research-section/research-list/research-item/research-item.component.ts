import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-research-item',
  templateUrl: './research-item.component.html',
  styleUrls: ['./research-item.component.css']
})
export class ResearchItemComponent implements OnInit {
  @Input() resultat;

  constructor() { }

  ngOnInit() {
  }

}
