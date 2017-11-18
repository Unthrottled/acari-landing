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
var core_1 = require("@angular/core");
require("./roles.template.htm");
var RolesComponent = (function () {
    function RolesComponent() {
        this.roles = ["admin", "editor", "writer", "reader"];
        this.model = {
            role: 'reader'
        };
        this.role = new core_1.EventEmitter();
        this._selectedRole = 'reader';
    }
    Object.defineProperty(RolesComponent.prototype, "selectedRole", {
        get: function () {
            return this._selectedRole;
        },
        set: function (value) {
            this._selectedRole = value;
        },
        enumerable: true,
        configurable: true
    });
    RolesComponent.prototype.ngOnInit = function () {
        this.role.emit(this.selectedRole);
    };
    RolesComponent.prototype.setRole = function (role) {
        this.selectedRole = role;
        this.ngOnInit();
    };
    return RolesComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RolesComponent.prototype, "role", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RolesComponent.prototype, "selectedRole", null);
RolesComponent = __decorate([
    core_1.Component({
        selector: 'roles-input',
        template: require('./roles.template.htm')
    })
], RolesComponent);
exports.RolesComponent = RolesComponent;
//# sourceMappingURL=Roles.component.js.map