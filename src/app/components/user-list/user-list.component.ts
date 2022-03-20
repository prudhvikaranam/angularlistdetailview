import { Component, OnInit } from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  Login_ID: string;
  Name: string;
  Email: string;
  Role: any;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'active',
  },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Login_ID', 'Name', 'Email', 'Role', 'Status'];
  expandedElement?: PeriodicElement | null;
  name = new FormControl('');
  selectedRowIndex = -1;

  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      loginID: [''],
      emailId: [''],
      firstName: [''],
      lastName: [''],
      mobile: [''],
      personId: ['']
    });
  }

  ngOnInit(): void {}

  clicked(column: any) {
    console.log(column);
  }
}
