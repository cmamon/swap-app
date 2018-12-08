import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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

    constructor(private service: UserService) { }

    ngOnInit() {
        this.service.getUsers().subscribe(res => {
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

}
