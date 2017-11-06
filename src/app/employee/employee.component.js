"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService, _activatedRoute) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this.firstName = 'Sitaramaiah';
        this.lastName = 'Ekkurthi';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage =
                    'Employee with the specified Employee Code does not exist';
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service. Please try again after sometime";
            console.log(error);
        });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-emp',
        templateUrl: '/app/employee/employee.component.html'
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map