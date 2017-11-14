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
var ProjectUpload_service_1 = require("./ProjectUpload.service");
var LocalProject_model_1 = require("../model/LocalProject.model");
var ProjectUploadComponent = /** @class */ (function () {
    function ProjectUploadComponent(uploadFileService) {
        this.uploadFileService = uploadFileService;
        // TODO: MOVE DIS TO SOME BETTER PLACE
        this.uploadRequest = new core_1.EventEmitter();
        this._notUploadable = Observable_1.Observable.of(true);
    }
    Object.defineProperty(ProjectUploadComponent.prototype, "notUploadable", {
        get: function () {
            return this._notUploadable;
        },
        set: function (value) {
            this._notUploadable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectUploadComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            this._project = value;
        },
        enumerable: true,
        configurable: true
    });
    ProjectUploadComponent.prototype.upload = function () {
        this.uploadRequest.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectUploadComponent.prototype, "uploadRequest", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable),
        __metadata("design:paramtypes", [Observable_1.Observable])
    ], ProjectUploadComponent.prototype, "notUploadable", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", LocalProject_model_1.LocalProject),
        __metadata("design:paramtypes", [LocalProject_model_1.LocalProject])
    ], ProjectUploadComponent.prototype, "project", null);
    ProjectUploadComponent = __decorate([
        core_1.Component({
            selector: 'project-upload',
            template: require('./ProjectUpload.component.htm')
        }),
        __metadata("design:paramtypes", [ProjectUpload_service_1.ProjectUploadService])
    ], ProjectUploadComponent);
    return ProjectUploadComponent;
}());
exports.ProjectUploadComponent = ProjectUploadComponent;
//# sourceMappingURL=ProjectUpload.component.js.map