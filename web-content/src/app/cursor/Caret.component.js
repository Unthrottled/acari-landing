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
var window_1 = require("../util/window");
var CaretComponent = /** @class */ (function () {
    function CaretComponent(windowRef) {
        this.windowRef = windowRef;
        this.isBlurred = new BehaviorSubject_1.BehaviorSubject(false);
        this._empty = 'rgba(0,0,0,0)';
        this._typing = Observable_1.Observable.of(false);
        this._backgroundColor = 'lime';
        this._currentBackgroundColor = new BehaviorSubject_1.BehaviorSubject(this.backgroundColor);
        this._outline = '0.05em green solid';
    }
    CaretComponent.prototype.ngOnInit = function () {
        if (!this.windowRef.nativeWindow.document.hasFocus()) {
            this.onBlur({});
        }
    };
    CaretComponent.prototype.onFocus = function (event) {
        this.isBlurred.next(false);
        this._currentBackgroundColor.next(this.backgroundColor);
    };
    CaretComponent.prototype.onBlur = function (event) {
        this.isBlurred.next(true);
        this._currentBackgroundColor.next(this._empty);
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
            //intellij typscript compiler
            //y u no recognize dis without
            //casting?!?
            return this._typing.map(function (b) { return !b; })
                .withLatestFrom(this.isBlurred, function (notTyping, windowNotInFocus) {
                return notTyping && !windowNotInFocus;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaretComponent.prototype, "currentBackgroundColor", {
        get: function () {
            return this._currentBackgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaretComponent.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            this._backgroundColor = value;
            this._currentBackgroundColor.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaretComponent.prototype, "outline", {
        get: function () {
            return this._outline;
        },
        set: function (value) {
            this._outline = value;
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CaretComponent.prototype, "backgroundColor", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CaretComponent.prototype, "outline", null);
    CaretComponent = __decorate([
        core_1.Component({
            selector: 'caret',
            template: require('./Caret.component.htm')
        }),
        __metadata("design:paramtypes", [window_1.WindowRef])
    ], CaretComponent);
    return CaretComponent;
}());
exports.CaretComponent = CaretComponent;
//# sourceMappingURL=Caret.component.js.map