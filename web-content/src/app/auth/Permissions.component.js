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
Object.defineProperty(exports, "__esModule", { value: true });
var UserPrincipal_model_1 = require("./UserPrincipal.model");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
/**
 * Created by alex on 9/17/17.
 */
var Permissions = Permissions_1 = (function () {
    function Permissions(userPrince) {
        this.userPrince = userPrince;
    }
    Object.defineProperty(Permissions.prototype, "canView", {
        get: function () {
            return Permissions_1.canActivate(this.userPrince, 'view');
        },
        enumerable: true,
        configurable: true
    });
    Permissions.canActivate = function (userToken, path) {
        return Observable_1.Observable.of(Permissions_1.findPermisson(path, userToken));
    };
    Permissions.findPermisson = function (path, userToken) {
        switch (path) {
            case 'delete':
                return userToken.canDelete;
            case 'create':
                return userToken.canCreate;
            case 'update':
                return userToken.canUpdate;
            default:
                return userToken.canView;
        }
    };
    return Permissions;
}());
Permissions = Permissions_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [UserPrincipal_model_1.UserPrincipal])
], Permissions);
exports.Permissions = Permissions;
var Permissions_1;
//# sourceMappingURL=Permissions.component.js.map