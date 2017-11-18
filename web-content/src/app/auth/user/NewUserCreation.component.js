"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Created by alex on 9/20/17.
 */
var core_1 = require("@angular/core");
require("../../common/validation-field.htm");
var Validation_component_1 = require("../../common/Validation.component");
var NewUserValidation_service_1 = require("./NewUserValidation.service");
var NewUserCreationComponent = (function (_super) {
    __extends(NewUserCreationComponent, _super);
    function NewUserCreationComponent(newUserValidationService, ngZone) {
        var _this = _super.call(this, ngZone) || this;
        _this.newUserValidationService = newUserValidationService;
        _this.ngZone = ngZone;
        _this.hideContent = true;
        _this.placeHolder = "Username";
        return _this;
    }
    NewUserCreationComponent.prototype.validateContent = function (content) {
        return this.newUserValidationService.isValid(content);
    };
    return NewUserCreationComponent;
}(Validation_component_1.ValidationComponent));
NewUserCreationComponent = __decorate([
    core_1.Component({
        selector: 'user-name-creation',
        template: require('../../common/validation-field.htm')
    }),
    __metadata("design:paramtypes", [NewUserValidation_service_1.NewUserValidationService, core_1.NgZone])
], NewUserCreationComponent);
exports.NewUserCreationComponent = NewUserCreationComponent;
//# sourceMappingURL=NewUserCreation.component.js.map