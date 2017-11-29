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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Observable_1 = require("rxjs/Observable");
var CaretComponent = /** @class */ (function () {
    function CaretComponent() {
        this.isBlurred = new BehaviorSubject_1.BehaviorSubject(false);
        this._typing = Observable_1.Observable.of(false);
    }
    CaretComponent.prototype.onFocus = function (event) {
        this.isBlurred.next(false);
    };
    CaretComponent.prototype.onBlur = function (event) {
        this.isBlurred.next(true);
    };
    Object.defineProperty(CaretComponent.prototype, "blurred", {
        get: function () {
            return this.isBlurred;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaretComponent.prototype, "typing", {
        get: function () {
            return this._typing;
        },
        set: function (value) {
            this._typing = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaretComponent.prototype, "notTyping", {
        get: function () {
            return this._typing
                .map(function (b) { return !b; })
                .withLatestFrom(this.isBlurred, function (notTyping, windowNotInFocus) { return notTyping && !windowNotInFocus; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostListener('window:focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CaretComponent.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('window:blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CaretComponent.prototype, "onBlur", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable),
        __metadata("design:paramtypes", [Observable_1.Observable])
    ], CaretComponent.prototype, "typing", null);
    CaretComponent = __decorate([
        core_1.Component({
            selector: 'caret',
            template: require('./Caret.component.htm')
        })
    ], CaretComponent);
    return CaretComponent;
}());
exports.CaretComponent = CaretComponent;
//# sourceMappingURL=Caret.component.js.map