"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var auth_module_1 = require("../auth/auth.module");
var Caret_component_1 = require("./Caret.component");
var window_1 = require("../util/window");
var CaretModule = /** @class */ (function () {
    function CaretModule() {
    }
    CaretModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, auth_module_1.AuthModule],
            exports: [Caret_component_1.CaretComponent],
            declarations: [Caret_component_1.CaretComponent],
            bootstrap: [],
            providers: [window_1.WindowRef],
            schemas: []
        })
    ], CaretModule);
    return CaretModule;
}());
exports.CaretModule = CaretModule;
//# sourceMappingURL=Caret.module.js.map