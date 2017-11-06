import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { HomeCompoent } from './home/home.component';
import { PageNotFoundCompoent } from './others/pagenotfound.component';

import { EmployeeService } from './employee/employee.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeCompoent }, 
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'others', component: PageNotFoundCompoent },
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: '**', component: HomeCompoent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, HomeCompoent, EmployeeListComponent,
      PageNotFoundCompoent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
