import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchEditComponent } from './research-section/research-edit/research-edit.component';
import { ResearchListComponent } from './research-section/research-list/research-list.component';
import { ResearchSectionComponent } from './research-section/research-section.component';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ResearchService } from './research.service';
import { ResearchItemComponent } from './research-section/research-list/research-item/research-item.component';



@NgModule({
  declarations: [
    ResearchEditComponent,
    ResearchListComponent,
    ResearchSectionComponent,
    ResearchItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    ResearchService
  ]
})
export class ResearchModule { }
