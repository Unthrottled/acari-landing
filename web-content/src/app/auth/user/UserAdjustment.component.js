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
require("./userAdjustment.template.htm");
var Subscriber_1 = require("rxjs/Subscriber");
var dist_1 = require("angular2-notifications/dist");
var backend_service_1 = require("../../util/backend.service");
var StatusPayload_model_1 = require("../../pages/models/StatusPayload.model");
var UserPrincipal_model_1 = require("../UserPrincipal.model");
var UserAdjustmentComponent = (function () {
    function UserAdjustmentComponent(backendService, notifService, userPrinc) {
        this.backendService = backendService;
        this.notifService = notifService;
        this.userPrinc = userPrinc;
        this.model = {};
        this.success = false;
    }
    Object.defineProperty(UserAdjustmentComponent.prototype, "currentRole", {
        get: function () {
            return this.userPrinc.role;
        },
        enumerable: true,
        configurable: true
    });
    UserAdjustmentComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        this.backendService.updateUser(this.role, this.model.password)
            .subscribe(Subscriber_1.Subscriber.create(function (response) {
            if (new StatusPayload_model_1.StatusPayload(response.json()).succeded) {
                self.userPrinc.newUserPrincipal(response.json());
                self.notifService.success("User Permissions Updated!", "Good Job!", {
                    timeOut: 3000,
                    clickToDismiss: true
                });
                self.model.password = '';
                self.success = true;
            }
            else {
                self.failure();
            }
        }, function (error) {
            _this.failure();
        }));
    };
    UserAdjustmentComponent.prototype.failure = function () {
        this.success = false;
        this.notifService.error("Unable to update user!", "Please try again, or not.", { timeOut: 3000 });
    };
    return UserAdjustmentComponent;
}());
UserAdjustmentComponent = __decorate([
    core_1.Component({
        selector: 'user-adjustment-guy',
        template: require('./userAdjustment.template.htm')
    }),
    __metadata("design:paramtypes", [backend_service_1.BackendService,
        dist_1.NotificationsService,
        UserPrincipal_model_1.UserPrincipal])
], UserAdjustmentComponent);
exports.UserAdjustmentComponent = UserAdjustmentComponent;
//# sourceMappingURL=UserAdjustment.component.js.map