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
var PhantomTyping_component_1 = require("./PhantomTyping.component");
var Welcome_component_1 = require("./Welcome.component");
var Caret_module_1 = require("../cursor/Caret.module");
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, auth_module_1.AuthModule, Caret_module_1.CaretModule],
            exports: [
                PhantomTyping_component_1.PhantomTypingComponent,
                Welcome_component_1.WelcomeComponent
            ],
            declarations: [
                PhantomTyping_component_1.PhantomTypingComponent,
                Welcome_component_1.WelcomeComponent
            ],
            bootstrap: [],
            providers: [],
            schemas: []
        })
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=Welcome.module.js.map