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
var UploadFile_service_1 = require("./UploadFile.service");
var util_1 = require("util");
var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(uploadService) {
        this.uploadService = uploadService;
    }
    UploadFileComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files.item(0);
    };
    Object.defineProperty(UploadFileComponent.prototype, "selectedFiles", {
        get: function () {
            return this._selectedFiles;
        },
        set: function (value) {
            this._selectedFiles = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadFileComponent.prototype, "notUploadable", {
        get: function () {
            return Observable_1.Observable.of(util_1.isNullOrUndefined(this.selectedFiles));
        },
        enumerable: true,
        configurable: true
    });
    UploadFileComponent.prototype.upload = function () {
        // this.selectedFiles
        //     .map()
    };
    UploadFileComponent = __decorate([
        core_1.Component({
            selector: 'file-upload',
            template: require('./UploadFile.component.htm')
        }),
        __metadata("design:paramtypes", [UploadFile_service_1.UploadFileService])
    ], UploadFileComponent);
    return UploadFileComponent;
}());
exports.UploadFileComponent = UploadFileComponent;
//# sourceMappingURL=UploadFile.component.js.map