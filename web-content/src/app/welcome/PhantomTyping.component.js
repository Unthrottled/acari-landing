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
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var PhantomTypingComponent = /** @class */ (function () {
    function PhantomTypingComponent() {
        this.writeComplete = new core_1.EventEmitter();
        this.isTyping = new BehaviorSubject_1.BehaviorSubject(false);
        this._content = '';
        this._words = '';
    }
    Object.defineProperty(PhantomTypingComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhantomTypingComponent.prototype, "words", {
        get: function () {
            return this._words;
        },
        set: function (value) {
            this._words = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhantomTypingComponent.prototype, "typing", {
        get: function () {
            return this.isTyping;
        },
        enumerable: true,
        configurable: true
    });
    PhantomTypingComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.of(1)
            .delay(1000)
            .map((function (value) {
            _this.isTyping.next(true);
            return value;
        }))
            .flatMap(function (seed) { return Observable_1.Observable.interval(45); })
            .takeWhile(function (value) { return value <= _this.words.length; })
            .map(function (value) { return _this.words.charAt(value); })
            .subscribe(function (newChar) { return _this.content += newChar; }, function (error) {
        }, function () {
            _this.isTyping.next(false);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PhantomTypingComponent.prototype, "writeComplete", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PhantomTypingComponent.prototype, "words", null);
    PhantomTypingComponent = __decorate([
        core_1.Component({
            selector: 'phantom-typing',
            template: require('./PhantomTyping.component.htm')
        }),
        __metadata("design:paramtypes", [])
    ], PhantomTypingComponent);
    return PhantomTypingComponent;
}());
exports.PhantomTypingComponent = PhantomTypingComponent;
//# sourceMappingURL=PhantomTyping.component.js.map