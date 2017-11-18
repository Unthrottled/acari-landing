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
 * Created by alex on 9/16/17.
 */
var core_1 = require("@angular/core");
var UserPrincipal = (function () {
    function UserPrincipal() {
    }
    Object.defineProperty(UserPrincipal.prototype, "canView", {
        get: function () {
            return this._canView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipal.prototype, "canDelete", {
        get: function () {
            return this._canDelete;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipal.prototype, "canCreate", {
        get: function () {
            return this._canCreate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipal.prototype, "canUpdate", {
        get: function () {
            return this._canUpdate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipal.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipal.prototype, "role", {
        get: function () {
            return this._role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipal.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    UserPrincipal.prototype.newUserPrincipal = function (principal) {
        this.setFields(principal);
    };
    UserPrincipal.prototype.setFields = function (principal) {
        this._canView = principal.principal.canView;
        this._canCreate = principal.principal.canCreate;
        this._canUpdate = principal.principal.canUpdate;
        this._canDelete = principal.principal.canDelete;
        this._token = principal.token;
        this._role = principal.principal.role;
        this._username = principal.principal.username;
    };
    return UserPrincipal;
}());
UserPrincipal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserPrincipal);
exports.UserPrincipal = UserPrincipal;
//# sourceMappingURL=UserPrincipal.model.js.map