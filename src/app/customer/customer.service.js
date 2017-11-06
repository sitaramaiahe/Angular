"use strict";
require("rxjs/add/operator/map");
var customersinformationservice = (function () {
    function customersinformationservice(http) {
        this.http = http;
        // getcustomerinformation(einnumber){
        //     return this.customersinformation.pop(einnumber);
        // }
        //adcustoemrinformation(customerinformation) {
        //    this.customersinformation.push(customerinformation);
        //}
        //deletecustomerinformation(customerinformation) {
        //    let index = this.customersinformation.indexOf(customerinformation);
        //    if (index >= 0) {
        //        this.customersinformation.splice(index);
        //    }
        //}
        this.customersinformation = [
            {
                ein: 12345,
                entityName: 'rtb000345',
                status: 'Active',
                classificationcode: 'abcdefgh',
                formationzipcode: 57107,
                formationcountrycode: 12345,
                businesszipcode: 57104,
                businesscountrycode: 41235,
            },
            {
                ein: 12345,
                entityName: 'rtb000346',
                status: 'InActive',
                classificationcode: 'gfaahfsdh',
                formationzipcode: 57102,
                formationcountrycode: 1357,
                businesszipcode: 57107,
                businesscountrycode: 41535,
            },
            {
                ein: 1379,
                entityName: 'rtb000347',
                status: 'Active',
                classificationcode: 'gfaahfsdh1234',
                formationzipcode: 57108,
                formationcountrycode: 1379,
                businesszipcode: 57104,
                businesscountrycode: 41537,
            }
        ];
    }
    customersinformationservice.prototype.getallcustomersinformation = function () {
        return this.customersinformation;
    };
    return customersinformationservice;
}());
exports.customersinformationservice = customersinformationservice;
//# sourceMappingURL=customer.service.js.map