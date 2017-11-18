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
/**
 * Created by alex on 9/15/17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var Permissions_component_1 = require("./Permissions.component");
var UserPrincipal_model_1 = require("./UserPrincipal.model");
var Observable_1 = require("rxjs/Observable");
var AuthGuard = (function () {
    function AuthGuard(router, authService, userToken) {
        this.router = router;
        this.authService = authService;
        this.userToken = userToken;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn) {
            return Permissions_component_1.Permissions.canActivate(this.userToken, route.routeConfig.path);
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return Observable_1.Observable.of(false);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, UserPrincipal_model_1.UserPrincipal])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map