import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { AdminService } from '../admin.service';
import { UserService } from '../../users/user.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './user-list.component.html',
    styleUrls: [ './user-list.component.css' ]
})

export class UserListComponent implements OnInit {
    private userList: Object[];
    selection = new SelectionModel<Object>(true, []);
    dataSource = new MatTableDataSource<Object>();
    displayedColumns: string[] = [
        'select',
        'email',
        'firstName',
        'lastName',
        'city',
        'address',
        'phone'
    ];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private userServ: UserService, private adminServ: AdminService) { }

    ngOnInit() {
        this.userServ.getUsers().subscribe(res => {
            this.userList = res;
            this.dataSource.data = res;
        });
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }

    deleteUsers() {
        this.selection.selected.forEach(user => {
            this.adminServ.deleteUser(user).subscribe();
        });
    }

}
