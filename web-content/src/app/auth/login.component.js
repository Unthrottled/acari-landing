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
require("./login.template.htm");
var Subscriber_1 = require("rxjs/Subscriber");
var user_model_1 = require("./user/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.getUser = function () {
        return new user_model_1.User(this.model.username, this.model.password);
    };
    LoginComponent.prototype.login = function () {
        var self = this;
        this.authService.login(this.getUser())
            .subscribe(Subscriber_1.Subscriber.create(function (succeded) {
            if (succeded) {
            }
        }, function (e) { }));
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form-guy',
            template: require('./login.template.htm')
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map