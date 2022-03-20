import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

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
    Status: 'In Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
  },
  {
    Login_ID: 'admin',
    Name: 'John Doe',
    Email: 'johnDoe@gmail.com',
    Role: ['Admin', 'Normal'],
    Status: 'Active',
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
  dataSource!: MatTableDataSource<PeriodicElement>;
  columnsToDisplay = ['Login_ID', 'Name', 'Email', 'Role', 'Status'];
  expandedElement?: PeriodicElement | null;
  name = new FormControl('');
  selectedRowIndex = -1;
  @ViewChild('paginator') paginator?: MatPaginator;

  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      loginID: [''],
      emailId: [''],
      firstName: [''],
      lastName: [''],
      mobile: [''],
      personId: [''],
    });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator!;
  }
  ngOnInit(): void {}

  clicked(column: any) {
    console.log(column);
  }
}
