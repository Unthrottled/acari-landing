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
var TextEntryComponent = /** @class */ (function () {
    function TextEntryComponent() {
        this.textValueChange = new core_1.EventEmitter();
    }
    Object.defineProperty(TextEntryComponent.prototype, "textValue", {
        get: function () {
            return this._textValue;
        },
        set: function (value) {
            this._textValue = value;
            this.textValueChange.emit(this._textValue);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TextEntryComponent.prototype, "textValueChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TextEntryComponent.prototype, "textValue", null);
    TextEntryComponent = __decorate([
        core_1.Component({
            selector: 'text-entry',
            template: require('./TextEntry.component.htm')
        })
    ], TextEntryComponent);
    return TextEntryComponent;
}());
exports.TextEntryComponent = TextEntryComponent;
//# sourceMappingURL=TextEntry.component.js.map