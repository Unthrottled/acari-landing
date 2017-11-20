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
var KonamiDirective = /** @class */ (function () {
    function KonamiDirective(el) {
        this.konami = new core_1.EventEmitter();
        this.sequenceIndex = 0;
        this.konamiCode = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];
    }
    KonamiDirective.prototype.handleKeyUp = function (event) {
        if (event.keyCode && event.keyCode.toString() === this.konamiCode[this.sequenceIndex++]) {
            if (this.sequenceIndex == this.konamiCode.length) {
                this.konami.emit();
            }
        }
        else {
            this.sequenceIndex = 0;
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], KonamiDirective.prototype, "konami", void 0);
    __decorate([
        core_1.HostListener('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], KonamiDirective.prototype, "handleKeyUp", null);
    KonamiDirective = __decorate([
        core_1.Directive({
            selector: '[konami]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], KonamiDirective);
    return KonamiDirective;
}());
exports.KonamiDirective = KonamiDirective;
//# sourceMappingURL=konami.directive.js.map