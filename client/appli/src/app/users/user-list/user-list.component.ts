import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './user-list.component.html',
    styleUrls: [ './user-list.component.css' ]
})

export class UserListComponent implements OnInit {
    private userList: Object[];
    constructor(private service: UserService) { }

    ngOnInit() {
        this.service.getUsers().subscribe(res => {
            this.userList = res;
        });
    }

    displayedColumns: string[] = [
        'email',
        'firstName',
        'lastName',
        'city',
        'address',
        'phone'
    ];
}
