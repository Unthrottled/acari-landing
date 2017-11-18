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
var auth_service_1 = require("../auth.service");
var user_model_1 = require("./user.model");
require("./register.template.htm");
var Subscriber_1 = require("rxjs/Subscriber");
var NewUser_model_1 = require("./NewUser.model");
var dist_1 = require("angular2-notifications/dist");
var RegisterComponent = (function () {
    function RegisterComponent(authService, router, notifService) {
        this.authService = authService;
        this.router = router;
        this.notifService = notifService;
        this.model = {};
        this.role = 'reader';
    }
    Object.defineProperty(RegisterComponent.prototype, "validName", {
        get: function () {
            return this._validName;
        },
        set: function (value) {
            this._validName = value;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.getUser = function () {
        return new user_model_1.User(this.model.username, this.model.password);
    };
    RegisterComponent.prototype.getNewUser = function () {
        return new NewUser_model_1.NewUser(this.model.username, this.model.password, this.role);
    };
    RegisterComponent.prototype.userNameValidationChange = function (delta) {
        this.validName = delta;
    };
    RegisterComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        if (this.validName) {
            this.authService.createPrincipal(this.getNewUser())
                .subscribe(Subscriber_1.Subscriber.create(function (succeded) {
                if (succeded) {
                    self.authService.login(self.getUser())
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
                        else {
                            _this.failure();
                        }
                    }, function (e) { return _this.failure(); }));
                }
                else {
                    _this.failure();
                }
            }, function (error) {
                _this.failure();
            }));
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    RegisterComponent.prototype.logout = function () {
        this.authService.logout();
    };
    RegisterComponent.prototype.setUsername = function (newUsername) {
        this.model.username = newUsername;
    };
    RegisterComponent.prototype.failure = function () {
        this.notifService.error("Unable to create user!", "Please try another username.", { timeOut: 3000 });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-form-guy',
        template: require('./register.template.htm')
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, dist_1.NotificationsService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map