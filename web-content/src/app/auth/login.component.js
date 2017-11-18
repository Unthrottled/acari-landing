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
var user_model_1 = require("./user/user.model");
require("./login.template.htm");
var Subscriber_1 = require("rxjs/Subscriber");
var dist_1 = require("angular2-notifications/dist");
var LoginComponent = (function () {
    function LoginComponent(authService, router, notifService) {
        this.authService = authService;
        this.router = router;
        this.notifService = notifService;
        this.model = {};
    }
    LoginComponent.prototype.getUser = function () {
        return new user_model_1.User(this.model.username, this.model.password);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        this.authService.login(this.getUser())
            .subscribe(Subscriber_1.Subscriber.create(function (succeded) {
            if (succeded) {
                // Set our navigation extras object
                // that passes on our global query params and fragment
                var navigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };
                _this.router.navigate(['/'], navigationExtras);
            }
        }, function (e) { return _this.notifService.error("Unable Login!", "Invalid User Credentials", {
            timeOut: 6000,
            clickToDismiss: true
        }); }));
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form-guy',
        template: require('./login.template.htm')
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router,
        dist_1.NotificationsService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map