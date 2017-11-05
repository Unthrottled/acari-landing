"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var UploadFile_service_1 = require("./upload/UploadFile.service");
var UploadFile_component_1 = require("./upload/UploadFile.component");
var BackendAPI_service_1 = require("./util/BackendAPI.service");
var http_2 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                animations_1.BrowserAnimationsModule
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                UploadFile_component_1.UploadFileComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                UploadFile_service_1.UploadFileService,
                BackendAPI_service_1.BackendAPIService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map