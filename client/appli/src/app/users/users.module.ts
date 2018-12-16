import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListComponent, UserPanelComponent]
})
export class UsersModule { }
