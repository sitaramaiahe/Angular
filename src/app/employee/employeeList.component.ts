import {Component, OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html'
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    statusMessage: string = "Loading Data. Please Wait ...";
    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData,
            (error) => {
                this.statusMessage = "Problem with the service. Please try again.";
                console.error(error);
            }
        );
    }
}