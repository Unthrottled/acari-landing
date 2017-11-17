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
var BackendAPI_service_1 = require("../../util/BackendAPI.service");
var Object_util_1 = require("../../util/Object.util");
var ExportableReach_model_1 = require("../model/ExportableReach.model");
var Identifier_model_1 = require("../model/Identifier.model");
var RemoteProject_factory_1 = require("../RemoteProject.factory");
var ProjectUploadService = /** @class */ (function () {
    function ProjectUploadService(backendAPIService, remoteProjectFactory) {
        this.backendAPIService = backendAPIService;
        this.remoteProjectFactory = remoteProjectFactory;
    }
    ProjectUploadService.prototype.pushFileToStorage = function (projectToUpload) {
        var _this = this;
        return projectToUpload.reachFile
            .filter(Object_util_1.isDefined)
            .map(function (reachFile) {
            var formData = new FormData();
            formData.append('reach', reachFile);
            return formData;
        }).flatMap(function (formData) {
            return _this.backendAPIService.postImage(formData);
        })
            .map(function (reachId) { return new ExportableReach_model_1.ExportableReach(new Identifier_model_1.Identifier(reachId)); })
            .map(function (reach) { return projectToUpload.exportableLocalProject(reach); })
            .flatMap(function (project) { return _this.backendAPIService.postProject(project)
            .map(function (json) { return _this.remoteProjectFactory.createProject(json); }); });
    };
    ProjectUploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService,
            RemoteProject_factory_1.RemoteProjectFactory])
    ], ProjectUploadService);
    return ProjectUploadService;
}());
exports.ProjectUploadService = ProjectUploadService;
//# sourceMappingURL=ProjectUpload.service.js.map