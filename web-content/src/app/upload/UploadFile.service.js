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
var BackendAPI_service_1 = require("../util/BackendAPI.service");
var UploadFileService = /** @class */ (function () {
    function UploadFileService(backendAPIService) {
        this.backendAPIService = backendAPIService;
    }
    UploadFileService.prototype.pushFileToStorage = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        this.backendAPIService.postImage(formData);
    };
    UploadFileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService])
    ], UploadFileService);
    return UploadFileService;
}());
exports.UploadFileService = UploadFileService;
//# sourceMappingURL=UploadFile.service.js.map