"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hideOnLogout_component_1 = require("./hideOnLogout.component");
var logout_component_1 = require("./logout.component");
var login_component_1 = require("./login.component");
var auth_service_1 = require("./auth.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var UserPrincipal_model_1 = require("./UserPrincipal.model");
var SafetyStylePipe_1 = require("../util/SafetyStylePipe");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,],
            exports: [
                hideOnLogout_component_1.LogoutHiderComponent,
                logout_component_1.LogoutComponent,
                login_component_1.LoginComponent,
                SafetyStylePipe_1.SafetyStylePipe
            ],
            declarations: [
                hideOnLogout_component_1.LogoutHiderComponent,
                logout_component_1.LogoutComponent,
                login_component_1.LoginComponent,
                SafetyStylePipe_1.SafetyStylePipe
            ],
            bootstrap: [],
            providers: [
                auth_service_1.AuthService,
                UserPrincipal_model_1.UserPrincipal
            ],
            schemas: []
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map