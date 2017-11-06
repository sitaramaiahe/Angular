"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var home_component_1 = require("./home/home.component");
var pagenotfound_component_1 = require("./others/pagenotfound.component");
var employee_service_1 = require("./employee/employee.service");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeCompoent },
    { path: 'employees', component: employeeList_component_1.EmployeeListComponent },
    { path: 'employees/:code', component: employee_component_1.EmployeeComponent },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: 'others', component: pagenotfound_component_1.PageNotFoundCompoent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: home_component_1.HomeCompoent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, home_component_1.HomeCompoent, employeeList_component_1.EmployeeListComponent,
            pagenotfound_component_1.PageNotFoundCompoent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.EmployeeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map